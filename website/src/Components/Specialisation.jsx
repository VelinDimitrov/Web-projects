import React from 'react';

class Specialisation extends React.Component {
  render() {
    let { middleSpecInfo } = this.props;
    return (
      <div className="container-fluid py-4">
        <div className="row mb-4">
          <BigCarouselSpec bigSpecInfo={this.props.bigSpecInfo} />
          <RightCarouselRows middleSpecInfo={middleSpecInfo} />
        </div>
        <div className="row lower-row">
          {middleSpecInfo && middleSpecInfo.map((carousel) => {
            return <LowerCarouselSpec key={carousel.name} name={carousel.name} src={carousel.src} />
          })}

        </div>
      </div>
    );
  }
}
const LowerCarouselSpec = (props) => {
  return (
    <div className="col-md-3 col-xs-12">
      <div className="hovereffect">
        <div id="slider6" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active img-overlay-box">
              <img className="w-100 h-100 img-thumbnail d-block img-fluid" src={props.src} alt="" />
            </div>
            <div className="carousel-item img-overlay-box">
              <img className="w-100 h-100 img-thumbnail d-block img-fluid" src={props.src} alt="" />
            </div>
            <div className="carousel-item img-overlay-box">
              <img className="w-100 h-100 img-thumbnail d-block img-fluid" src={props.src} alt="" />
            </div>
          </div>
        </div>
        <div className="overlay">
          <h2>{props.name}</h2>
          <a className="info" href="#">Отведи ме</a>
        </div>
      </div>
    </div>
  );
}
const BigCarouselSpec = ({ bigSpecInfo }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 col-lg-6-special">
      <div id="slider1" className="col-lg-12 carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active img-overlay-box">
            <img className="w-100 h-100 img-thumbnail d-block img-fluid" src={bigSpecInfo[0].src} alt="img1" />
            <div className="carousel-caption">
              <h1 className="display-3 my-5">{bigSpecInfo[0].name}</h1>
            </div>
          </div>
          <div className="carousel-item img-overlay-box">
            <img className="w-100 h-100 img-thumbnail d-block img-fluid" src={bigSpecInfo[1].src} alt="img2" />
            <div className="carousel-caption">
              <h1 className="display-3 my-5">{bigSpecInfo[1].name}</h1>
            </div>
          </div>
          <div className="carousel-item img-overlay-box">
            <img className="w-100 h-100 img-thumbnail d-block img-fluid" src={bigSpecInfo[2].src} alt="img3" />
            <div className="carousel-caption">
              <h1 className="display-3 my-5">{bigSpecInfo[2].name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RightCarouselRows = (props) => {
  return (
    <div id="img-grid" className="col-lg-6 col-md-12 col-xs-12 col-lg-6-special">
      <div className="row mb-5">
        <div className="col-md-6 col-xs-12">
          <div className="hovereffect">
            <div id="slider2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/box-1.jpeg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/box-1.jpeg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/box-1.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="overlay">
              <h2>Ремонт на коли</h2>
              <a className="info" href="#">Отведи ме</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="hovereffect">
            <div id="slider3" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/gear.jpeg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/gear.jpeg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/gear.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="overlay">
              <h2>Ремонт на скоростни кутии, диференциали</h2>
              <a className="info" href="#">Отведи ме</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <div className="hovereffect">
            <div id="slider4" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/engine.jpeg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/engine.jpeg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/engine.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="overlay">
              <h2>Ремонт на двигатели, рейки</h2>
              <a className="info" href="#">Отведи ме</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="hovereffect">
            <div id="slider5" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/nozzle.jpg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/nozzle.jpg" alt="" />
                </div>
                <div className="carousel-item img-overlay-box">
                  <img className="w-100 h-100 img-thumbnail d-block img-fluid" src="./img/nozzle.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="overlay">
              <h2>ГНП Дюзи</h2>
              <a className="info" href="#">Отведи ме</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialisation;