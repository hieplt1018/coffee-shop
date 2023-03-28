const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Order = require('../models/order');

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.create(req.body);
  const cartItems = req.body.orderItems;
  cartItems.forEach(async item => {
    await updateStock(item.product, item.quantity, 'Delivering');
  });

  res.status(200).json({
    success: true,
    message: 'Đơn hàng tạo thành công!',
    order
  });
});

exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate({
    path: 'orderItems',
    populate: {path: 'product'}
    });;

  if( !order || order.customer.valueOf() !== req.user.id ) {
    return next(new ErrorHandler('Không tìm thấy đơn đặt hàng', 404));
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
    return next(new ErrorHandler('Đơn đặt hàng này được thanh toán', 400));
  };

  order.orderItems.forEach(async item => {
    await updateStock(item.product, item.quantity)
  });
  
  order.orderStatus = req.body.orderStatus,
  order.deliveredAt = Date.now();
  await order.save();

  res.status(200).json({
    success: true,
    message: 'Cập nhật trạng thái thành công',
    order
  });
});

async function updateStock(id, quantity, status) {
  const product = await Product.findById(id);
  if(['Delivering', 'Paid'].includes(status)) {
    product.stock = product.stock - quantity;
  } else {
    product.stock = product.stock + quantity;
  }
  
  await product.save();
};

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if(!order) {
    return next(new ErrorHandler('Không tìm thấy đơn đặt hàng', 404));
  }

  await order.deleteOne();

  res.status(200).json({
    success: true,
    message: "Xóa đơn hàng thành công"
  })
});
