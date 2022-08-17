const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/img/fav.png" type="image/png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/carousel.css" />
        <link rel="stylesheet" href="/styles/heroes.css" />
        <link rel="stylesheet" href="/styles/features.css" />
        <link rel="stylesheet" href="/styles/main.css" />
        <script defer src="/js/application.js" />
      </head>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom header">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none logo">Scirocco</a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#about" className="nav-link px-2 link-dark headerLi">Обо мне</a></li>
          <li><a href="#catalog" className="nav-link px-2 link-dark headerLi">Каталог</a></li>
          <li><a href="#order" className="nav-link px-2 link-dark headerLi">Заказать</a></li>
          {/* <li><a href="#terms" className="nav-link px-2 link-dark headerLi">Условия</a></li>
          <li><a href="#guarantee" className="nav-link px-2 link-dark headerLi">Гарантия</a></li> */}
        </ul>
        <div className="col-md-3 text-end enterReg">
          <button type="submit" className="btn btn-outline-primary me-2 enterBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Вход</button>
          <button type="submit" className="btn btn-primary regBtn" data-bs-toggle="modal" data-bs-target="#Backdrop">Регистрация</button>
        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Вход</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form action="/login" method="POST" id="loginForm">
                  <label htmlFor="exampleInput1" className="form-label">Адрес электронной почты</label>
                  <input name="email" type="text" className="form-control" id="exampleInput1" />
                  <label htmlFor="exampleInput2" className="form-label">Пароль</label>
                  <input name="password" type="text" className="form-control" id="exampleInput2" />
                  <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Регистрация</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form action="/register" method="POST" id="registerForm">
                  <label htmlFor="exampleInput1" className="form-label">Имя</label>
                  <input name="name" type="text" className="form-control" />
                  <label htmlFor="exampleInput1" className="form-label">Адрес электронной почты</label>
                  <input name="email" type="text" className="form-control" />
                  <label htmlFor="exampleInput2" className="form-label">Пароль</label>
                  <input name="password" type="text" className="form-control" />
                  <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <body>
        { children }
        <footer>
          <section className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-6">
                  <h4>Информация</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Условия</a></li>
                    <li><a href="#">Контакты</a></li>
                  </ul>
                </div>

                <div className="col-md-4 col-6">
                  <h4>Контакты</h4>
                  <ul className="list-unstyled">
                    <li> Тел. +7 (999)-777-77-77</li>
                    <li> Тел. +7 (495)-555-55-55</li>
                    <li>Email. watch@mail.ru</li>
                  </ul>
                </div>
                <div className="col-md-4 col-6">
                  <h4>Мы в сети</h4>
                  <ul className="sb circle gray text">
                    <li><a href="#" className="twitter">Twitter</a></li>
                    <li><a href="#" className="Telegram">Telegram</a></li>
                    <li><a href="#" className="facebook">Facebook</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
};
