const React = require('react');
const Layout = require('./Layout');

function Order({}) {
  return (
    <div id="order">
      <div className="container">

        <div className="justify-content-around">
          <form id="editEntryForm" action="/order" method="post" encType="multipart/form-data">

            <div className="row">

              <div className='col-4'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
                <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" />
                <div id="emailHelp" className="form-text">Укажите полность Ф.И.О</div>
              </div>
              </div>

              <div className='col-4'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Телефон</label>
                <input type="text" name="phone" className="form-control" id="exampleInputEmail1" aria-describedby="phoneHelp" />
              </div>
              </div>

            </div>

            <div className="row">

            <div className='col-4'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
              </div>
              </div>
              
              <div className='col-4'>
              <input className="buttonStyle" type="file" name="photo" />
              </div>
            </div>

            <div className="row">

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Описание заказа</label>
                <input type="text" name="description" className="form-control h-40" id="exampleInputDescription1" />
              </div>

            </div>

            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>

        </div>
      </div>
    </div>

  );
}

module.exports = Order;
