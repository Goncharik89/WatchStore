const router = require('express').Router();
const renderOrdersPage = require('../controllers/ordersPageController');

router.get('/', renderOrdersPage);

module.exports = router;
