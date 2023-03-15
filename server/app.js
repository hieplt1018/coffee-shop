const express = require('express');
const app = express();
const errorMiddleWare  = require('./middleware/middleware.js');

app.use(express.json());

const products = require('./routes/product');
app.use('/api/v1', products);
app.use(errorMiddleWare);

module.exports = app;
