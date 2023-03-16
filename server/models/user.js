const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [30, 'Your name can\'t exceed 30 characters']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter valid email address']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Your password must be longer than 6 characters']
  },
  avatar: {
    public_id: {
      type: String,
      maxLength: [300, 'Not invalid']
    },
    url: {
      type: String,
      maxLength: [300, 'Not invalid url']
    },
    role: {
      type: String,
      default: 'user'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
  }
});

userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next();
  };

  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', userSchema);
