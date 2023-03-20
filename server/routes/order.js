const express = require('express');
const router = express.Router();
const { isAuthenticateUser, authorizeRoles } = require('../middleware/auth');
const { 
  newOrder, 
  getMyOrders, 
  getMySingleOrder,
  getAllOrders,
  updateProcessOrder,
  deleteOrder
} = require('../controllers/orderController');

router.route('/order/new').post(isAuthenticateUser, newOrder);
router.route('/orders/me').get(isAuthenticateUser, getMyOrders);
router.route('/order/me/:id').get(isAuthenticateUser, getMySingleOrder);
router.route('/admin/orders')
  .get(isAuthenticateUser, authorizeRoles('staff', 'admin'), getAllOrders);
router.route('/admin/order/:id')
  .put(isAuthenticateUser, authorizeRoles('staff','admin'), updateProcessOrder)
  .delete(isAuthenticateUser, authorizeRoles('staff','admin'), deleteOrder);

module.exports = router;
