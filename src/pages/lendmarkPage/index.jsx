import React from "react";
import { Jumbotron } from "react-bootstrap";
import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";
import HeaderHomePage from "../../components/headerComponents/headerHomePage";
import AAVE from "../../assets/img/feelogo/Aave_AAVE.svg";
import AOA from "../../assets/img/feelogo/Aurora_AOA.svg";

import bannerOne from "../../assets/img/homepage/announcements/banner_listing4.jpg";
import bannerTwo from "../../assets/img/homepage/announcements/banner_listing5.jpg";
import bannerThree from "../../assets/img/homepage/announcements/banner_listing1.jpg";

import { Link } from "react-router-dom";
import Slider from "react-slick";
const LendmarkPage = () => {
  const dataMarket = [
    {
      logo: AAVE,
      name: "AAVE",
      marketSize: "12122",
      totalBorrowed: "5772",
      depositApy: "32323",
      variableBorrowApr: "54545",
      stableBorrowApr: "989898",
      apr: "10%",
    },
    {
      logo: AOA,
      name: "AURORA",
      marketSize: "12122",
      totalBorrowed: "5772",
      depositApy: "483948",
      variableBorrowApr: "9998988",
      stableBorrowApr: "78787",
      apr: "1.5%",
    },
  ];
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
    <div className="lendmark">
      <HeaderHomePage />

      <Jumbotron className="lendmark-jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="font-weight-bold" style={{fontSize:'3.5vw'}}>THE LIQUIDITY PROTOCOL</h3>
            </div>
            <div className="col-12 ">
              <p className="text-gold font-weight-bolder" style={{fontSize:'5vw'}}>
                $ 21,052,999,022.66
              </p>
            </div>
            <div className="col-7 mx-auto">
              <p style={{fontSize:'1.5vw'}}>
                Aave is an open source and non-custodial liquidity protocol for
                earning interest on deposits and borrowing assets.
              </p>
            </div>
            <div className="col-12 ">
              <Link to="/register" className="btn-enter-app">
                Enter App
              </Link>
            </div>
          </div>
        </div>
      </Jumbotron>

      <div className="container mt-3 mb-4">
        <div className="row d-none d-sm-block">
          <div className="col-lg-12">
            <div className="card  mb-5 bg-homepage2 text-white card-lendmark">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <span className="font-20">Market Size</span>
                    <br />
                    <span className="font-30 font-weight-bold">
                      $ 23928329308
                    </span>
                  </div>
                  <div className="col-lg-7 d-flex align-items-center">
                    <img src={bannerOne} alt="" width="150" className="mr-1" />
                    <img src={bannerTwo} alt="" width="150" className="mr-1" />
                    <img
                      src={bannerThree}
                      alt=""
                      width="150"
                      className="mr-1"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-none d-sm-block'>
            <button className="btn-enter-app mr-1">USD</button>
            <button className="btn-enter-app ml-1 ">NATIVE</button>
        </div>

        <div className="row d-none d-sm-block">
          <div className="col-12">
            <div className="tHeader-lendmark text-white font-weight-bold">
              <span>Assets</span>
              <span>Market Size</span>
              <span>Total Borrowed</span>
              <span>Deposit APY</span>
              <span>Borrow APR</span>
              <span>Borrow APR</span>
              <span>Operation</span>
            </div>
          </div>
        </div>
        <div className="row d-none d-sm-block">
          <div className="col-lg-12">
            <div>
              {dataMarket?.map((item, index) => {
                return (
                  <div
                    className="card  mb-2 bg-homepage2 text-white card-lendmark"
                    key={index}
                  >
                    <div className="card-body p-0">
                      <div className="item-market">
                        <div className="span-market">
                          <img
                            src={item.logo}
                            alt={item.name}
                            height="30"
                            width="30"
                            className="mr-3"
                          />
                          <span>{item.name}</span>
                        </div>
                        <div className="span-market">
                          <span>{item.marketSize}</span>
                        </div>
                        <div className="span-market">
                          <span>{item.totalBorrowed}</span>
                        </div>
                        <div className="span-market">
                          <span>{item.depositApy}</span>
                        </div>
                        <div className="span-market">
                          <span>{item.variableBorrowApr}</span>
                        </div>
                        <div className="span-market">
                          <span>{item.stableBorrowApr}</span>
                        </div>

                        <div className="span-market">
                          <button className="btn-lendmark">Deposit</button>
                          <button className="btn-lendmark">Borrow</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="d-block d-sm-none text-center text-white mb-2">
          <h6>Select Market</h6>
          <div>
            <Slider {...settings}>
              <img src={bannerOne} alt=""/>
              <img src={bannerTwo} alt=""/>
              <img src={bannerThree} alt=""/>
            
            </Slider>
          </div>
        </div>

        <div className="row d-block d-sm-none">
          <div className="col-md-12">
            <div>
              {dataMarket?.map((item, index) => {
                return (
                  <div className="card bg-homepage2 text-white mb-2" key={index}>
                    <div className="card-header">
                      <img src={item.logo} alt={item.name} className='mr-1' />
                      <span>AURORA</span>
                    </div>
                    <div className="card-body">
                      <div className="mobile-deposit">
                        <div className="">
                          <h6>Deposit</h6>
                          <span className="font-weight-bold">{item.apr}</span>
                          <div className="apr text-center  mt-2">
                            <img src={item.logo} alt="" />
                            <span className="font-12 font-weight-bold">{item.apr}</span>
                            <span className="font-12"> APR</span>
                          </div>
                        </div>
                        <div className="">
                          <h6>
                            Borrow <span className="font-10">Variable</span>
                          </h6>
                          <span className="font-weight-bold">{item.apr}</span>
                          <div className="apr text-center mt-2">
                            <img src={item.logo} alt="" />
                            <span className="font-12 font-weight-bold">{item.apr}</span>
                            <span className="font-12  "> APR</span>
                          </div>
                        </div>
                        <div className="">
                          <h6>
                            Borrow <span className="font-10">Stable</span>
                          </h6>
                          <span className="font-weight-bold">{item.apr}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <FooterHomePage />
    </div>
  );
};

export default LendmarkPage;
