import React, { Component } from "react";
import Slider from "react-slick";
import banner6 from "../../../../assets/img/homepage/announcements/banner_listing6.jpg";
import banner7 from "../../../../assets/img/homepage/announcements/banner_listing7.jpg";
import banner8 from "../../../../assets/img/homepage/announcements/banner_listing8.jpg";
import banner9 from "../../../../assets/img/homepage/announcements/banner_listing9.jpg";
import banner10 from "../../../../assets/img/homepage/announcements/banner_listing10.jpg";

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
              <img src={banner6} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
          <div>
            <div className="bg-news">
              <img src={banner7} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
          <div>
            <div className="bg-news">
              <img src={banner8} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
          <div>
            <div className="bg-news">
              <img src={banner9} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
          <div>
            <div className="bg-news">
              <img src={banner10} alt="" style={{ borderRadius: "20px" }} />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
