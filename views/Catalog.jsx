const React = require('react');

module.exports = function Catalog() {
  return (
  // <div id="catalog">
  //   <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
  //     <div className="carousel-indicators">
  //       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
  //       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
  //       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
  //     </div>
  //     <div className="carousel-inner">
  //       <div className="carousel-item active">
  //         <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="/img/wbp1110.jpg" /></svg>

  //         <div className="container">
  //           <div className="carousel-caption text-start">
  //             <h1>Example headline.</h1>
  //             <p>Some representative placeholder content for the first slide of the carousel.</p>
  //             <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="carousel-item">
  //         <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

  //         <div className="container">
  //           <div className="carousel-caption">
  //             <h1>Another example headline.</h1>
  //             <p>Some representative placeholder content for the second slide of the carousel.</p>
  //             <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="carousel-item">
  //         <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

  //         <div className="container">
  //           <div className="carousel-caption text-end">
  //             <h1>One more for good measure.</h1>
  //             <p>Some representative placeholder content for the third slide of this carousel.</p>
  //             <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
  //       <span className="carousel-control-prev-icon" aria-hidden="true" />
  //       <span className="visually-hidden">Previous</span>
  //     </button>
  //     <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
  //       <span className="carousel-control-next-icon" aria-hidden="true" />
  //       <span className="visually-hidden">Next</span>
  //     </button>
  //   </div>
  // </div>

    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{background-image: "url('unsplash-photo-1.jpg')"}}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-2.jpg');">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                  <small>Pakistan</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-3.jpg');">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
