const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'avatars/defaultuser',
      url: 'https://imageio.forbes.com/specials-images/imageserve/5c76bcaaa7ea43100043c836/0x0.jpg'
    }
  });

  sendToken(user, 200, res);
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password) {
    return next(new ErrorHandler('Please enter email & password', 400));
  };

  const user = await User.findOne({ email }).select('+password');
  if(!user) {
    return next(new ErrorHandler('Invalid Email or Password', 401));
  };

  const isPasswordMatched = await user.comparePassword(password);
  if(!isPasswordMatched) {
    return next(new ErrorHandler('Invalid Email or Password'));
  }

  const token = user.getJwtToken();
  sendToken(user, 200, res);
});

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if(!user) {
    return next(new ErrorHandler('User not found with this email', 404));
  };

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/reset/${resetToken}`;
  const message = `Your password reset token is as follow:\n\n${resetUrl}\n\n
    If you have not requested this email, the ignore it.`

  try {
    await sendEmail({
      email: user.email,
      subject: 'Catata Coffee Password Recovery',
      message
    });

    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`
    })
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.token)
    .digest('hex');
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if(!user) {
    return next(new ErrorHandler('Password reset token is invalid or has been expired'
      , 400));
  };
  
  if(req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler('Password does not match', 400));
  };

  user.password = req.body.password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;
  await user.save();
  sendToken(user, 200, res);
});

exports.getCurrentUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user
  });
});

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  const isMatched = await user.comparePassword(req.body.oldPassword);
  if(!isMatched) {
    return next(new ErrorHandler('Old password is incorrect!', 400));
  };

  user.password = req.body.password;
  await user.save();
  sendToken(user, 200, res);
});

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users
  })
});

exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if(!user) {
    return next(new ErrorHandler(`User does not found with id: ${req.params.id}`
      , 400));
  };

  res.status(200).json({
    success: true,
    user
  });
});

exports.logout = catchAsyncErrors( async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    message: "Logout successfully!"
  });
});
