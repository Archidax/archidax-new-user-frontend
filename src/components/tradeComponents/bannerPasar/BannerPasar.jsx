import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import banner1 from "../../../assets/img/trade/banner/bannerasal1.png";
import banner2 from "../../../assets/img/trade/banner/bannerasal2.png";
import banner3 from "../../../assets/img/trade/banner/bannerasal3.png";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={4}
        visibleSlides={3}
        interval={4000}
        isPlaying
        infinite
      >
        <Slider>
          <Slide index={0}>
            <div>
              <div className="banner-list-coin">
                <img src={banner1} style={{ width: "100%" }} />
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div>
              <div className="banner-list-coin">
                <img src={banner2} style={{ width: "100%" }} />
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div>
              <div className="banner-list-coin">
                <img src={banner3} style={{ width: "100%" }} />
              </div>
            </div>
          </Slide>
          <Slide index={3}>
            <div>
              <div className="banner-list-coin">
                <img src={banner1} style={{ width: "100%" }} />
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
