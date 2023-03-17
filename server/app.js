const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleWare  = require('./middleware/errors');

app.use(express.json());
app.use(cookieParser());

const products = require('./routes/product');
const auth = require('./routes/user');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

app.use(errorMiddleWare);

module.exports = app;
