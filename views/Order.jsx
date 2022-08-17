const React = require('react');
const Layout = require('./Layout');

function Order({ order, username }) {
  return (
    <Layout username={username}>
      <div className="container d-flex style">

        <div className="justify-content-around">
          <form id="editEntryForm" action="/order" method="post" encType="multipart/form-data">
            <div className="row styleT">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
                <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" />
                <div id="emailHelp" className="form-text">Укажите полность Ф.И.О</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Телефон</label>
                <input type="text" name="phone" className="form-control" id="exampleInputEmail1" aria-describedby="phoneHelp" />
              </div>
              <input className="buttonStyle" type="file" name="photo" />
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Описание заказа</label>
                <input type="text" name="description" className="form-control" id="exampleInputDescription1" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>

        </div>
      </div>
    </Layout>
  );
}

module.exports = Order;

{ /* <input className="buttonStyle" type="file" name="photo" /> */ }

{ /* <label htmlFor="title-input" className="block mar-b-1 inputForm">Имя:</label>
          <input
            id="title-input"
            name="name"
            type="text"
            tabIndex="1"
            className="block w-10 no-outline no-border pad-1 mar-b-2 inputForm"
          />
          <label htmlFor="body-textarea" className="block mar-b-1 inputForm">Email:</label>
          <textarea
            id="body-textarea"
            name="email"
            type="mail"
            tabIndex="2"
            className="block w-10 no-resize no-outline no-border no-resize pad-1 mar-b-2 inputForm"
          />
          <label htmlFor="body-textarea" className="block mar-b-1 inputForm">Телефон:</label>
          <input
            id="title-input"
            name="phone"
            type="text"
              // value={entry.title}
            tabIndex="1"
            className="block w-10 no-outline no-border pad-1 mar-b-2 inputForm"
          />
          <label htmlFor="body-textarea" className="block mar-b-1 inputForm">Описание:</label>
          <input
            id="title-input"
            name="description"
            type="text"
              // value={entry.title}
            tabIndex="1"
            className="block w-10 no-outline no-border pad-1 mar-b-2 inputText"
          />
          <input className="buttonStyle" type="file" name="photo" />
          <input
            type="submit"
            value="Отправить"
            tabIndex="3"
            className="block button w-10 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline inputText"
          /> */ }
