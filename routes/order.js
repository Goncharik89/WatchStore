const router = require('express').Router();

const { formOrder, newOrder } = require('../controllers/orderController');

const { isAuth } = require('../middleware/index');

router
  .route('/order')
  .get(formOrder)
  .post(isAuth, newOrder);
