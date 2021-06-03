import React, { Component } from "react";
import Slider from "react-slick";

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
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="bg-news1 px-4 py-3">
            <h6>Staking</h6>
            <h5>Deposit & Earn</h5>
            <h6 className="mb-0">Unstake Anytime, Staked</h6>
            <h6>as Margin Collateral</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news2 px-4 py-3">
            <h6>Staking</h6>
            <h5>Deposit & Earn</h5>
            <h6 className="mb-0">Unstake Anytime, Staked</h6>
            <h6>as Margin Collateral</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news3 px-4 py-3">
            <h6>Staking</h6>
            <h5>Deposit & Earn</h5>
            <h6 className="mb-0">Unstake Anytime, Staked</h6>
            <h6>as Margin Collateral</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news4 px-4 py-3">
            <h6>Staking</h6>
            <h5>Deposit & Earn</h5>
            <h6 className="mb-0">Unstake Anytime, Staked</h6>
            <h6>as Margin Collateral</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news1 px-4 py-3">
            <h6>Staking</h6>
            <h5>Deposit & Earn</h5>
            <h6 className="mb-0">Unstake Anytime, Staked</h6>
            <h6>as Margin Collateral</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <div className="bg-news2 px-4 py-3">
            <h6>Staking</h6>
            <h5>Deposit & Earn</h5>
            <h6 className="mb-0">Unstake Anytime, Staked</h6>
            <h6>as Margin Collateral</h6>
            <button className="mt-3 px-3 py-1" style={{ border: "none" }}>
              Join Now
            </button>
          </div>
        </div>
      </Slider>
    );
  }
}
