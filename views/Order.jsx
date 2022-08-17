const React = require('react');
const Layout = require('./Layout');

function Order({ username }) {
  return (
    <Layout username={username}>
      <div>
        <form id="editEntryForm" action="/order" method="post" encType="multipart/form-data">
          <label htmlFor="title-input" className="block mar-b-1 inputForm">Имя:</label>
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
          />
        </form>
      </div>
    </Layout>
  );
}

module.exports = Order;
