const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

exports.newProduct = catchAsyncErrors (async(req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    message: 'Tạo mới sản phẩm thành công',
    product
  })
});

exports.getProducts = catchAsyncErrors (async (req, res, next) => {
  const resPerPage = 8;
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const apiFeatures = new APIFeatures(Product.find({ ...keyword }), req.query)
    .search().filter().pagination(resPerPage);  
  const products = await apiFeatures.query;
  const totalProducts = await Product.find({...keyword})
  const productsCount = totalProducts.length;

  res.status(200).json({
    success: true,
    productsCount,
    products,
    resPerPage
  })
});

exports.getSingleProduct = catchAsyncErrors (async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if(!product) {
    return next(new ErrorHandler('Không tìm thấy sản phẩm', 404));
  };

  res.status(200).json({
    success: true,
    product
  })
});

exports.updateProduct = catchAsyncErrors (async (req, res, nest) => {
  let product = await Product.findById(req.params.id);
  if(!product) {
    return next(new ErrorHandler('Không tìm thấy sản phẩm', 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    message: 'Cập nhật sản phẩm thành công',
    product
  })
});

exports.deleteProduct = catchAsyncErrors (async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if(!product) {
    return next(new ErrorHandler('Không tìm thấy sản phẩm', 404));
  }
  
  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Xóa sản phẩm thành công!'
  })
});
