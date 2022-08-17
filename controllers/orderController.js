const renderTemplate = require('../lib/renderTemplate');
const OrderJSX = require('../views/Order');

const { User, Order } = require('../db/models');

exports.formOrder = async (req, res) => {
  const name = req.session?.newUserName;
  renderTemplate(OrderJSX, { username: name }, res);
};

exports.newOrder = async (req, res) => { // multer создает req.file
  try {
    const findUser = await User.findOne({ where: { id: req.session.newUser.id } }); // ищем юзера
    await Order.create({
      // watch_id: findWatch.id,
      user_id: findUser.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      pic: req.file.filename,
      description: req.body.description,
    }, {
      returning: true, // хз
      plain: true, // хз
    });

    res.redirect('/');
  } catch (error) {
    res.send(error.message);
  }
};
