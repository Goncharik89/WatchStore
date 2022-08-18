const React = require('react');
const Layout = require('./Layout');

function Order({}) {
  return (

    <div className="container orderForm" id="order">

      <div className="orderFormBlock">

        <form id="editEntryForm" action="/order" method="post" encType="multipart/form-data" className="requestForm">

          <div className="col-44">
            <label htmlFor="exampleInputEmail1" className="form-label nameLabel">Имя</label>
            <input type="text" name="name" className="form-control nameInput" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Укажите полность Ваши Ф.И.О" />
          </div>

          <div className="mb-33">
            <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
            <input type="email" name="email" className="form-control emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Мы не передаем Вашу электронную почту третьим лицам" />
          </div>

          <div className="col-44">
            <label htmlFor="exampleInputEmail1" className="form-label">Телефон</label>
            <input type="text" name="phone" className="form-control telephoneInput" id="exampleInputEmail1" aria-describedby="phoneHelp" placeholder="Укажите Ваш номер телефона" />
          </div>

          <div className="mb-33">
            <label htmlFor="exampleInputPassword1" className="form-label">Описание заказа</label>
            <input type="text" name="description" className="form-control h-40 orderHeigth" id="exampleInputDescription1" placeholder="Подробно опишите Ваши пожелания к заказу" />
          </div>

          <div className="uploadPhoto">
            <input className="buttonStyle chooseFile" type="file" name="photo" />
          </div>

          <button type="submit" className="btn btn-primary sendMessage">Отправить</button>

        </form>

      </div>

    </div>

  );
}

module.exports = Order;
