const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="stylesheet" href="/styles/carousel.css" />
        <link rel="stylesheet" href="/styles/heroes.css" />
        <script defer src="/js/application.js" />
      </head>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">Scirocco</a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-dark">О нас</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Условия</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Гарантия</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="submit" className="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Вход</button>
            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Backdrop">Регистрация</button>
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
      </div>
      <body>
        { children }
      </body>
    </html>
  );
};
