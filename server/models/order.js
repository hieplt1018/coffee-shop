const mongoose = require('mongoose');

const PAYMENT_METHOD = ['Card', 'Cash', 'COD', 'Internet Banking'];
const ORDER_STATUS = ['Processing', 'Paid', 'Cancelled', 'Delivering'];

const orderSchema = mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, 'Exceeded 100 characters']
    },
    city: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Exceeded 50 characters']
    },
    district: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Exceeded 50 characters']
    },
    ward: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Exceeded 50 characters']
    },
    street: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Exceeded 50 characters']
    }
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        required: true,
        max: [1000000, 'Can\'t not exceed 1000000'],
        min: [0, 'Can\'t below 0'],
        default: 0
      },
      itemPrice: {
        type: Number,
        required: true,
        max: [100000000, 'Can\'t not exceed 100000000'],
        min: [0, 'Can\'t below 0'],
        default: 0
      }
    }
  ],
  paymentInfo: {
    type: String,
    required: true,
    enum: {
      values: PAYMENT_METHOD,
      message: 'Please select an available payment method'
    },
    default: 'Cash'
  },
  totalItemsPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  taxPrice: {
    type: Number,
    required: true,
    max: [1000000000, 'Can\'t not exceed 1000000000'],
    min: [0, 'Can\'t below 0'],
    default: 0
  },
  shippingPrice: {
    type: Number,
    required: true,
    max: [1000000000, 'Can\'t not exceed 1000000000'],
    min: [0, 'Can\'t below 0'],
    default: 0
  },
  totalOrder: {
    type: Number,
    required: true,
    max: [1000000000, 'Can\'t not exceed 1000000000'],
    min: [0, 'Can\'t below 0'],
    default: 0
  }, 
  paidAt: {
    type: Date
  },
  orderStatus: {
    type: String,
    required: true,
    enum: {
      values: ORDER_STATUS,
      message: 'Please select an available order\'s status'
    },
    default: ORDER_STATUS[0]
  },
  deliveredAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
