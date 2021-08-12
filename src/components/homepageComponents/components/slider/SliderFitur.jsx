import React from "react";
import Slider from "react-slick";
import ReactApexChart from "react-apexcharts";

import spotmarketlogo from "../../../../assets/img/homepage/fitur/spot_market.svg";
import launchpadlogo from "../../../../assets/img/homepage/fitur/launchpad.svg";
import derivativelogo from "../../../../assets/img/homepage/fitur/derivative.svg";
import archiswaplogo from "../../../../assets/img/homepage/fitur/archiswap.svg";
import archibotlogo from "../../../../assets/img/homepage/fitur/archibot.svg";
import lendmarklogo from "../../../../assets/img/homepage/fitur/lendmark.svg";
import digifundlogo from "../../../../assets/img/homepage/fitur/digifund.svg";
import archiratorlogo from "../../../../assets/img/homepage/fitur/archirator.svg";

// import graph from "../../../../assets/img/cryptoIndex/graph.svg";
import up from "../../../../assets/img/cryptoIndex/up.svg";
import down from "../../../../assets/img/cryptoIndex/down.svg";

import { convertNumber } from "../../../../assets/js";

export default function SliderFitur() {
    const dataFitur = [
        {
        image: spotmarketlogo,
        title:'SPOT MARKET',
        desc:'Trade your digital assets in real time and make profits immediately'
    },
        {
        image: launchpadlogo,
        title:'LAUNCHPAD',
        desc:' Participate and become an early investor on the best projects and make maximum profit',
    },
        {
        image: derivativelogo,
        title:'DERIVATIVE',
        desc:' Enjoy maximum profit both ways in both down and up crypto price conditions',
    },
        {
        image: archiswaplogo,
        title:'ARCHISWAP',
        desc:'Instant and fast exchange service without having to trade'
    },
        {
        image: archibotlogo,
        title:'ARCHIBOT',
        desc:'An advanced trading robot with AI technology makes it easy for you to trade',
    },
        {
        image: lendmarklogo,
        title:'LENDMARK',
        desc:'Peer 2 peer lending crypto with 5% to 7% potential p.a',
    },
        {
        image: digifundlogo,
        title:'DIGIFUND',
        desc:' Loan & Credit for Property based on CryptoLoan & Credit for Property based on Crypto',
    },
        {
        image: archiratorlogo,
        title:'ARCHIRATOR',
        desc:' Startup accelerators and venture capital for startups to get funding via crypto',
    },
]
  const settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
     
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
{dataFitur.map((item,index) => {
    return(
      <div className='d-lg-none d-xl-block' key={index}>
        <div>
          <div className="px-3  pb-1">
            <div className="row">
              <div className="card-body-feature">
                <div
                  className="box-feature-hp"
                  data-toggle="modal"
                  data-target="#modalComingSoon"
                >
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <img
                        src={item.image}
                        width="60px"
                        className="mx-auto d-block"
                      />
                    </div>
                    <h4 className="text-white">{item.title}</h4>
                    <h6 className="text-content">
                      {item.desc}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
})}
    </Slider>
  );
}
