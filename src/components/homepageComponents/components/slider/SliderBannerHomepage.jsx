import React, { Component } from "react";
import Slider from "react-slick";
import ads from "../../../../assets/img/homepage/banner/ARCHI_OFFICIAL.jpg";
// import ads1 from "../../../../assets/img/homepage/banner/banner1.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      fade: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
        <div style={{}}>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <Slider {...settings}>
        <div className="">
          <img src={ads} alt="logo1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={ads} alt="logo1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={ads} alt="logo1" style={{ width: "100%" }} />
        </div>
      </Slider>
    );
  }
}
