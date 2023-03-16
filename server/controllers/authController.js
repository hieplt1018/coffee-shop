const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

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
