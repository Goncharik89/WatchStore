require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const { sequelize } = require('./db/models');
// const renderTemplate = require('../lib/renderTemplate');

// const Home = require('../views/Home');
// const Form = require('../views/Form');
// const Tasks = require('../views/Tasks');
// const Dog = require('../views/Dog');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate(app);
    console.log('Соединение с базой установлено!');
  } catch (error) {
    console.log('Faaaack!!!', error);
  }
  console.log(`Сервер запущен на порту ${PORT}!`);
});
