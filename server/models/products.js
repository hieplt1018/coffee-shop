const mongoose = require('mongoose');

const CATEGORIES = ['Cake', 'Coffee', 'Coffee Bean', 'Pastries', 'Bread'];

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product\'s name'],
    trim: true,
    maxLength: [100, 'Product\'s name can\'t exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please enter product\'s price'],
    maxLength: [7, 'Product\'s price can\'t exceed 7 characters'],
    max: [1000000, 'Product\'s price can\'t not exceed 1000000'],
    min: [0, 'Product\'s price can\'t below 0'],
    default: 0
  },
  description: {
    type: String,
    required: [true, 'Please enter product\'s description'],
    trim: true,
    maxLength: [3000, 'Product\'s name can\'t exceed 3000 characters']
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
        maxLength: 300
      },
      url: {
        type: String,
        required: true,
        maxLength: 300
        }
    }
  ],
  category: {
    type: String,
    required: [true, 'Please select category for this product'],
    enum: {
      values: CATEGORIES,
      message: 'Please select correct category for product'
    }
  },
  : {
    type: String,
    required: [true, 'Please enter product\'s seller']
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product\'s stock'],
    max: [1000, 'Product\'s stock can\'t not exceed 1000'],
    min: [0, 'Product\'s stock can\'t below 0'],
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
