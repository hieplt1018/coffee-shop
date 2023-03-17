const Product =require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { authorizeRoles } = require('../middleware/auth');

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    paymentInfo,
    taxPrice,
    shippingPrice,
    totalOrder,
    totalItemsPrice,
    seller,
    customer
  } = req.body;

  const order = await Order.create({
    orderItems,
    shippingInfo,
    paymentInfo,
    taxPrice,
    shippingPrice,
    totalOrder,
    totalItemsPrice,
    paidAt: Date.now(),
    customer,
    seller
  });
  // console.log(order)
  res.status(200).json({
    success: true,
    order
  })
})