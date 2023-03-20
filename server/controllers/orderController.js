const Product =require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { authorizeRoles } = require('../middleware/auth');
const order = require('../models/order');

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

  res.status(200).json({
    success: true,
    order
  })
});

exports.getMySingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if( !order || order.customer.valueOf() !== req.user.id ) {
    return next(new ErrorHandler('No Order found with this ID', 404));
  };

  res.status(200).json({
    success: true,
    order
  })
});

exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({
    success: true,
    orders
  });
});

exports.getMyOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ customer: req.user.id })
    .populate('customer', 'name');

  res.status(200).json({
    success: true,
    count: orders.length,
    orders
  });
});

exports.updateProcessOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if(order.orderStatus === 'Paid') {
    return next(new ErrorHandler('This order is paid', 400));
  };

  order.orderItems.forEach(async item => {
    await updateStock(item.product, item.quantity)
  });
  
  order.orderStatus = req.body.orderStatus,
  order.deliveredAt = Date.now();
  await order.save();

  res.status(200).json({
    success: true,
    order
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock = product.stock - quantity;
  await product.save();
};

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if(!order) {
    return next(new ErrorHandler('No order found with this ID', 404));
  }

  await order.deleteOne();

  res.status(200).json({
    success: true,
    message: "Delete order successfully"
  })
});
