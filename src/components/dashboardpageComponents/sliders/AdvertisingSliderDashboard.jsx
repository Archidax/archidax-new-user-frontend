import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  // ButtonBack,
  // ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import banner from "../../../assets/img/dashboard/ads/firstads.png";

// eslint-disable-next-line
export default class extends React.Component {
  
  render() {
    return (
      <div className="text-white ci-bg-primary mt-2 font-14">
        <CarouselProvider
          visibleSlides={1}
          totalSlides={2}
          naturalSlideWidth={90}
          naturalSlideHeight={90}
          interval={4000}
          isPlaying
          infinite
        >
          <Slider>
            <Slide index={1} className="slider1-dashboard"></Slide>
            <Slide index={2} className="slider2-dashboard"></Slide>
          </Slider>
          {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
      </div>
    );
  }
}
