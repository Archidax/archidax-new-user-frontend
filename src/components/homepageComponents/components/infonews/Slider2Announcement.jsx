import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from '../../../../assets/img/bnb.jpg'
import banner2 from '../../../../assets/img/waves.jpg'

export default class Slider1Announcement extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      // beforeChange: function (currentSlide, nextSlide) {
      //   console.log("before change", currentSlide, nextSlide);
      // },
      // afterChange: function (currentSlide) {
      //   console.log("after change", currentSlide);
      // },
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="bg-news">
            <img src={banner2} alt="" />
          </div>
        </div>
        <div>
          <div className="bg-news">
            <img src={banner1} alt="" />
          </div>
        </div>
      </Slider>
    );
  }
}
