const React = require('react');

module.exports = function Catalog() {
  return (
    <div id="catalog">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" />
        </div>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="img/watches/1.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Aquaracer</h1>
                <p>Модель обладает компактными размерами и профессиональным качеством</p>
                <p><a className="btn btn-lg btn-primary" href="#">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="img/watches/2.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Tango</h1>
                <p>Воплощает в себе страсть, которую мы вкладываем в создание часов</p>
                <p><a className="btn btn-lg btn-primary" href="#">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="img/watches/3.jpeg" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Toccata</h1>
                <p>Изысканный дизайн и неподвластные времени материалы</p>
                <p><a className="btn btn-lg btn-primary" href="#">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="img/watches/4.jpeg" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Maestro</h1>
                <p>Maestro - это элегантная и утонченная модель механических часов</p>
                <p><a className="btn btn-lg btn-primary" href="#">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="img/watches/5.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Time</h1>
                <p>Впечатлит людей, на которых время не влияет</p>
                <p><a className="btn btn-lg btn-primary" href="#">Заказать</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  );
};
