const router = require('express').Router();
const renderOrdersPage = require('../controllers/ordersPageController');
const { checkAdmin } = require('../middleware');

router.get('/', checkAdmin, renderOrdersPage);

module.exports = router;
