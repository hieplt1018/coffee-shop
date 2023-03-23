const mongoose = require('mongoose');

const PAYMENT_METHOD = ['Card', 'Cash', 'COD', 'Internet Banking'];
const ORDER_STATUS = ['Processing', 'Paid', 'Cancelled', 'Delivering'];

const orderSchema = mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, 'Vượt quá 100 ký tự']
    },
    city: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Vượt quá 50 ký tự']
    },
    district: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Vượt quá 50 ký tự']
    },
    ward: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Vượt quá 50 ký tự']
    },
    street: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, 'Vượt quá 50 ký tự']
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
        max: [1000000, 'Không thể vượt quá 1.000.000'],
        min: [0, 'Không thể dưới 0'],
        default: 0
      },
      itemPrice: {
        type: Number,
        required: true,
        max: [100000000, 'Không thể vượt quá 100.000.000'],
        min: [0, 'Không thể dưới 0'],
        default: 0
      }
    }
  ],
  paymentInfo: {
    type: String,
    required: true,
    enum: {
      values: PAYMENT_METHOD,
      message: 'Vui lòng chọn phương thức thanh toán khả dụng'
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
    max: [1000000000, 'Không thể vượt quá 1.000.000.000'],
    min: [0, 'Không thể dưới 0'],
    default: 0
  },
  shippingPrice: {
    type: Number,
    required: true,
    max: [1000000000, 'Không thể vượt quá 1.000.000.000'],
    min: [0, 'Không thể dưới 0'],
    default: 0
  },
  totalOrder: {
    type: Number,
    required: true,
    max: [1000000000, 'Không thể vượt quá 1.000.000.000'],
    min: [0, 'Không thể dưới 0'],
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
      message: 'Vui lòng chọn trạng thái đơn hàng sẵn có'
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
