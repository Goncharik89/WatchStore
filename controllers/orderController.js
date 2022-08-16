const renderTemplate = require('../lib/renderTemplate');
const Order = require('../views/Order');

exports.formOrder = (req, res) => {
  const name = req.session?.newUserName;
  renderTemplate(Order, { username: name }, res);
};

exports.newOrder = async (req, res) => { // multer создает req.file
  try {
    const findUser = await User.findOne({ where: { id: req.session.user.id } }); // ищем юзера
    const findWatch = await Watch.findOne({ where: { id: req.session.watch.id } });
    const newOrder = await Order.create({ // создаем карту
      // watch_id: findWatch.id,
      // user_id: findUser.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.descritpion,
    }, {
      returning: true, // хз
      plain: true, // хз
    });

    res.redirect(`/order`); // редирект на созданную карточку
  } catch (error) {
    res.send(error.message);
  }
};
