import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../../../../assets/img/homepage/announcements/banner_listing1.jpg";
import banner2 from "../../../../assets/img/homepage/announcements/banner_listing2.png";

import banner4 from "../../../../assets/img/homepage/announcements/banner_listing4.png";
import banner5 from "../../../../assets/img/homepage/announcements/banner_listing5.png";

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
      <div className="banner-news-responsive">
        <Slider {...settings}>
          <div>
            <div className="bg-news">
              <img src={banner1} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
          <div>
            <div className="bg-news">
              <img src={banner2} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
          <div>
            <div className="bg-news">
              <img src={banner4} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
          <div>
            <div className="bg-news">
              <img src={banner5} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
