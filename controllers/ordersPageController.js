const renderTemplate = require('../lib/renderTemplate');
const OrdersPage = require('../views/OrdersPage');
const { Order } = require('../db/models/order');

const renderOrdersPage = async (req, res) => {
  try {
    // const order = await Order.findAll();
    // console.log(order);
    renderTemplate(OrdersPage, null, res);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = renderOrdersPage;
