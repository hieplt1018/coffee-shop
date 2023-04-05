const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleWare  = require('./middleware/errors');
const cloudinary = require('cloudinary');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: 'server/config/config.env' }); 


app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const products = require('./routes/product');
const auth = require('./routes/user');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

app.use(errorMiddleWare);

module.exports = app;
