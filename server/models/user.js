const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const ROLE = ['admin', 'customer', 'staff'];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [100, 'Your name can\'t exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    maxLength: [100, 'Your name can\'t exceed 100 characters'],
    validate: [validator.isEmail, 'Please enter valid email address']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Your password must be longer than 6 characters'],
    select: false
  },
  avatar: {
    public_id: {
      type: String,
      maxLength: [300, 'Not invalid']
    },
    url: {
      type: String,
      maxLength: [300, 'Not invalid url']
    }
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: ROLE,
      message: 'Please select an available role'
    },
    default: 'customer'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next();
  };

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME
  });
}

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken)
    .digest('hex');
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
  return resetToken;
}

module.exports = mongoose.model('User', userSchema);
