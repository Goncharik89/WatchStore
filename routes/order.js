const router = require('express').Router();

const { formOrder, newOrder } = require('../controllers/orderController');

const { isAuth } = require('../middleware/index');

router
  .route('/')
  .get(formOrder)
  .post(isAuth, newOrder);

module.exports = router;
