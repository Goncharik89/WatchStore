const React = require('react');

module.exports = function About() {
  return (
    <div id="about">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/img/irina.png" className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg" alt="Irina" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Обо мне</h1>
            <p className="lead">Меня зовут Ирина и создательница бренда Scirocco! Я очень люблю когда все делается в назначенный срок, поэтому начала производство часов ручной работы. Моя главная особенность - стиль! Все часы представленные моей мастерской - это единственный экземпляр.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="#catalog"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Примеры работ</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
