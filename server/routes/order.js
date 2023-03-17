const express = require('express');
const router = express.Router();
const { isAuthenticateUser, authorizeRoles } = require('../middleware/auth');
const { 
  newOrder, 
  getMyOrders, 
  getMySingleOrder
} = require('../controllers/orderController');

router.route('/order/new').post(isAuthenticateUser, newOrder);
router.route('/orders/me').get(isAuthenticateUser, getMyOrders);
router.route('/order/me/:id').get(isAuthenticateUser, getMySingleOrder);



module.exports = router;
