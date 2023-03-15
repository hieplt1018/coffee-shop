const Product =require('../models/products');
const ErrorHandler = require('../utils/errorHandler');

exports.newProduct = async(req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
}

exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products
  })
}

exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if(!product) {
    return next(new ErrorHandler('Product not found', 404));
  };

  res.status(200).json({
    success: true,
    product
  })
}

exports.updateProduct = async (req, res, nest) => {
  let product = await Product.findById(req.params.id);
  if(!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    product
  })
}

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if(!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  
  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Product is deleted!'
  })
}
