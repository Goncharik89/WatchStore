const React = require('react');

function Order({}) {
  return (
    <>
     
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Статус заказа</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
            </div>
            <div className="modal-body">
             Ваш заказ принят, на вашу почту отправлено письмо
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              <button type="button" className="btn btn-primary">Сохранить изменения</button>
            </div>
          </div>
        </div>
      </div>

      <div id="order">
        <div className="container">

          <div className="justify-content-around">
            <form id="editEntryForm" action="/order" method="post" encType="multipart/form-data" className="order">

              <div className="row">

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
                    <input type="text" name="name" className="form-control Name" id="exampleInputEmail1" aria-describedby="nameHelp" />
                    <div id="emailHelp" className="form-text">Укажите полность Ф.И.О</div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Телефон</label>
                    <input type="text" name="phone" className="form-control Phone" id="exampleInputEmail1" aria-describedby="phoneHelp" />
                  </div>
                </div>

              </div>

              <div className="row">

                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                    <input type="email" name="email" className="form-control Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
                  </div>
                </div>

                <div className="col-4">
                  <input className="buttonStyle Photo" type="file" name="photo" />
                </div>
              </div>

              <div className="row">

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Описание заказа</label>
                  <input type="text" name="description" className="form-control Description" id="exampleInputDescription1" />
                </div>

              </div>

              <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}

module.exports = Order;
