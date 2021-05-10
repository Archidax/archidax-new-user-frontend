import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  // ButtonBack,
  // ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { beritaRecent } from "../../../stores/berita/functions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import Slider from "react-slick";
export default function SliderBannerDashboard () {
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    beritaRecent(dispatch);
  }, [dispatch]);

  const dataNewNews = useSelector((state) => state.beritaReducer.Recent);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 10000,
  //   autoplaySpeed: 10000,
  //   cssEase: "linear",
  //   arrows: false
  // };
  return (
    // <div className="px-3 text-white ci-bg-primary py-2 font-14">
    //     <Slider {...settings}>
    //       {dataNewNews?.map((item, index) => {
    //         return (
    //           <div
    //             style={{
    //               cursor: "pointer",
    //             }}
    //             onClick={() => {
    //               history.push(`/berita/${item.slug}`);
    //             }}
    //             key={index}
    //           >
    //             <p className="m-0 font-15">{item.title}</p>
    //           </div>
    //         );
    //       })}
    //     </Slider>
    //   </div>
    <div className="px-3 text-white ci-bg-primary pt-2 font-14">
      <CarouselProvider
        visibleSlides={1}
        totalSlides={6}
        naturalSlideWidth={100}
        naturalSlideHeight={2}
        interval={5000}
        dragEnabled={false}
        touchEnabled={false}
        isPlaying={3000}
        infinite
      >
        <Slider>
          {dataNewNews?.map((item, index) => {
            return (
              <Slide index={index}>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    history.push(`/berita/${item.slug}`);
                  }}
                >
                  <p className="m-0 font-15">{item.title}</p>
                </div>
              </Slide>
            );
          })}

          {/* <Slide index={0}>
              Crypto Long & Short: What Does Dogecoin Have to Do With Government
              Bans? Crypto Long & Short: What Does Dogecoin Have to Do With
              Government Bans?
            </Slide>
            <Slide index={1}>
              Bitcoin Sets New All-Time High of $49.7K, Putting $50K Within
              Striking Distance{" "}
            </Slide>
            <Slide index={2}>
              Coinbase Ventures, Paradigm Invest $12M in Synthetix DeFi Platform{" "}
            </Slide>
            <Slide index={3}>I am the 4 Slide.</Slide>
            <Slide index={4}>I am the 5 Slide.</Slide>
            <Slide index={5}>I am the 6 Slide.</Slide>
            <Slide index={6}>I am the 7 Slide.</Slide>
            <Slide index={7}>I am the 8 Slide.</Slide> */}
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    </div>
  );
};
