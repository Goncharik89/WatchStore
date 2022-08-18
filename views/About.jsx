const React = require('react');

module.exports = function About() {
  return (
    <div id="about" className="about">

      <div className="aboutTextBlock">
        <h1 className="aboutTitle">Обо мне</h1>
        <p className="aboutTextBody">Привет!<br/>Меня зовут Ирина и я создательница бренда Scirocco! Я очень люблю, когда всё делается качественно и в назначенное время, поэтому связала свою жизнь с производством часов ручной работы. Все часы, представленные моей мастерской - это уникальный продукт в единственном экземпляре.<br/>Мы работаем, чтобы Вы чувствовали свою индивидуальность!</p>

        <a href="#catalog"><button type="button" className="btn btn-lg btn-primary aboutBtn">Примеры работ</button></a>
      </div>

      <div className="aboutImg">
        <img src="/img/irina.png" className="aboutPhoto" alt="Irina" width="600" height="500" loading="lazy" />
      </div>

    </div>
  );
};
