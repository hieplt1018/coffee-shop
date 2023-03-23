const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload');
const errorMiddleWare  = require('./middleware/errors');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(fileUpload());

const products = require('./routes/product');
const auth = require('./routes/user');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

app.use(errorMiddleWare);

module.exports = app;
