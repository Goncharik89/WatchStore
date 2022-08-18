const renderTemplate = require('../lib/renderTemplate');
const OrderJSX = require('../views/Order');
const mailer = require('../nodemailer');

const { User, Order } = require('../db/models');

exports.formOrder = async (req, res) => {
  const user = await User.findOne({ where: { email: req.session.newUserEmail } });
  renderTemplate(OrderJSX, { userId: user.id }, res);
};

exports.newOrder = async (req, res) => { // multer создает req.file
  console.log(req.body);
  try {
    const findUser = await User.findOne({ where: { email: req.session.newUserEmail } }); // ищем юзера
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
    // res.json();
    const message = {
      to: req.body.email,
      subject: 'Your order',
      text: `Здравствуйте, ${req.body.name} . Мы получили ваш заказ. 
    ${req.body.description}
    Часы будут готовы в течение 2 недель. При готовности с вами свяжутся`,
    };
    mailer(message);
    setTimeout(() => {
      res.redirect('/');
    }, 3000);
  } catch (error) {
    res.send(error.message);
  }
};
