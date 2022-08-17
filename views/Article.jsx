const React = require('react');

module.exports = function Article() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src="img/articleSlider/1.png" className="d-block w-100" alt="слайдер часов №1" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="img/articleSlider/2.png" className="d-block w-100" alt="слайдер часов №2" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/3.png" className="d-block w-100" alt="слайдер часов №3" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/4.png" className="d-block w-100" alt="слайдер часов №4" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/5.png" className="d-block w-100" alt="слайдер часов №5" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/6.png" className="d-block w-100" alt="слайдер часов №6" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

{ /* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/articleSlider/1.png" className="d-block w-100" alt="слайдер часов №1" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/2.png" className="d-block w-80" alt="слайдер часов №2" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/3.png" className="d-block w-80" alt="слайдер часов №3" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/4.png" className="d-block w-80" alt="слайдер часов №4" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/5.png" className="d-block w-80" alt="слайдер часов №5" />
        </div>
        <div className="carousel-item">
          <img src="img/articleSlider/6.png" className="d-block w-80" alt="слайдер часов №6" />
        </div>
      </div>
    </div> */ }
