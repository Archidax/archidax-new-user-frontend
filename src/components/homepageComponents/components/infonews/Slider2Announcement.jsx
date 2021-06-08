import React, { Component } from "react";
import Slider from "react-slick";

export default class Slider2Announcement extends Component {
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
      autoplaySpeed: 4500,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="bg-news3 px-4 py-3">
            <h6>Copy Trading</h6>
            <h5>Trade like a Pro</h5>
            <h6 className="mb-0">Follow Your Favorite Trader</h6>
            <h6>with One-Click</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news4 px-4 py-3">
            <h6>Copy Trading</h6>
            <h5>Trade like a Pro</h5>
            <h6 className="mb-0">Follow Your Favorite Trader</h6>
            <h6>with One-Click</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news1 px-4 py-3">
            <h6>Copy Trading</h6>
            <h5>Trade like a Pro</h5>
            <h6 className="mb-0">Follow Your Favorite Trader</h6>
            <h6>with One-Click</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news2 px-4 py-3">
            <h6>Copy Trading</h6>
            <h5>Trade like a Pro</h5>
            <h6 className="mb-0">Follow Your Favorite Trader</h6>
            <h6>with One-Click</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news3 px-4 py-3">
            <h6>Copy Trading</h6>
            <h5>Trade like a Pro</h5>
            <h6 className="mb-0">Follow Your Favorite Trader</h6>
            <h6>with One-Click</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news4 px-4 py-3">
            <h6>Copy Trading</h6>
            <h5>Trade like a Pro</h5>
            <h6 className="mb-0">Follow Your Favorite Trader</h6>
            <h6>with One-Click</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
      </Slider>
    );
  }
}
