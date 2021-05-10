import React from "react";
import Slider from "react-slick";
import ReactApexChart from "react-apexcharts";

// import graph from "../../../../assets/img/cryptoIndex/graph.svg";
import up from "../../../../assets/img/cryptoIndex/up.svg";
import down from "../../../../assets/img/cryptoIndex/down.svg";

import { convertNumber } from "../../../../assets/js";

export default function SliderTopGainer({ dataHome }) {
  const stateLinechart = {
    options: {
      chart: {
        height: "100%",
        width: "100%",
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 5,
      },
      colors: ["#00CE15"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        colors: ["#FF9900"],
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const settings = {
    lazyLoad: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToShow:
      dataHome && Array.isArray(dataHome) && dataHome.length >= 4
        ? 4
        : dataHome.length,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{}}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {dataHome &&
        Array.isArray(dataHome) &&
        dataHome.length > 0 &&
        dataHome.map((item) => (
          <div className="">
            <div className="bg-homepage2 mx-2">
              <div className="px-3 pt-4 pb-1">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={item.icon}
                      alt="icon"
                      style={{
                        width: "55px",
                        height: "55px",
                        marginLeft: "10px",
                      }}
                    />
                    <ReactApexChart
                      options={stateLinechart.options}
                      series={[
                        {
                          type: "line",
                          data:
                            item.chart.price && item.chart.price.length > 1
                              ? item.chart.price
                              : [],
                        },
                      ]}
                      type="line"
                      height={70}
                    />
                  </div>
                  <div className="col-6 text-right">
                    <h5 className="mb-0 font-24 text-white">{item.symbol}</h5>
                    <h5 className="font-18 text-gold">{item.assetName}</h5>
                    <h5 className="mt-4 mb-1 font-14 text-gray2">
                      {item.symbol}
                    </h5>
                    <h5
                      className={`font-13 ${
                        item.price24h_change < 0
                          ? "text-danger"
                          : item.price24h_change >= 0 &&
                            item.price24h_change <= 0
                          ? "text-white"
                          : "text-success"
                      }`}
                    >
                      {convertNumber.toRupiah(item.price24h_close)}
                    </h5>

                    <h5
                      className={`font-14 mb-1 price-end ${
                        item.price24h_change < 0
                          ? "text-danger"
                          : item.price24h_change >= 0 &&
                            item.price24h_change <= 0
                          ? "text-white"
                          : "text-success"
                      }`}
                    >
                      {item.price24h_change > 0 && (
                        <img
                          src={up}
                          alt="icon"
                          style={{ height: "12px", marginRight: "5px" }}
                        />
                      )}
                      {Number(item.price24h_change).toFixed(2)}%
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
}
