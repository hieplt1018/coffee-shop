const express = require('express');
const router = express.Router();
const { isAuthenticateUser } = require('../middleware/auth');
const { newOrder } = require('../controllers/orderController');

router.route('/order/new').post(isAuthenticateUser, newOrder);

module.exports = router;
