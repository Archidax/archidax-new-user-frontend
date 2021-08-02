import React from "react";
import spotmarketlogo from "../../../assets/img/homepage/fitur/spot_market.svg";
import launchpadlogo from "../../../assets/img/homepage/fitur/launchpad.svg";
import derivativelogo from "../../../assets/img/homepage/fitur/derivative.svg";
import archiswaplogo from "../../../assets/img/homepage/fitur/archiswap.svg";
import archibotlogo from "../../../assets/img/homepage/fitur/archibot.svg";
import lendmarklogo from "../../../assets/img/homepage/fitur/lendmark.svg";
import digifundlogo from "../../../assets/img/homepage/fitur/digifund.svg";
import archiratorlogo from "../../../assets/img/homepage/fitur/archirator.svg";

import coming_soonlogo from "../../../assets/img/homepage/fitur/coming_soon.svg";
import Slider from "react-slick";
import SliderFitur from "./slider/SliderFitur";

export default function FiturHomepage() {
  return (
    <div className="bg-archidax margin-feature-hp">
      <div className="" style={{ width: "75%", margin: "auto" }}>
        <h2 className="text-homepage-yellow text-center font-apa-itu-responsive">
          Archidax Features
        </h2>
        {/* ROW 1 */}

        <div className='d-block d-sm-none'>
        <SliderFitur />
        </div>
            
        <div className="row mt-4	d-none d-md-flex">
          {/* SPOT */}
          <div className="col-lg-3 col-md-3 col-sm-12 ">
            <div className="card-body-feature"> 
              <div
                className="box-feature-hp"
                data-toggle="modal"
                data-target="#modalComingSoon"
              >
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={spotmarketlogo} width="60px" />
                  </div>
                  <h4 className="text-white">SPOT MARKET</h4>
                  <h6 className="text-content">
                    Trade your digital assets in real time and make profits
                    immediately
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* FUTURE */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card-body-feature">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={launchpadlogo} width="60px" />
                  </div>
                  <h4 className="text-white">LAUNCHPAD</h4>
                  <h6 className="text-content">
                    Participate and become an early investor on the best
                    projects and make maximum profit
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* STOCK */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card-body-feature">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={derivativelogo} width="60px" />
                  </div>
                  <h4 className="text-white">DERIVATIVE</h4>
                  <h6 className="text-content">
                    Enjoy maximum profit both ways in both down and up crypto
                    price conditions
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* LEVERAGE */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card-body-feature">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={archiswaplogo} width="60px" />
                  </div>
                  <h4 className="text-white">ARCHISWAP</h4>
                  <h6 className="text-content">
                    Instant and fast exchange service without having to trade
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="row d-none d-md-flex">
          {/* SPOT */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card-body-feature">
              <div
                className="box-feature-hp"
                data-toggle="modal"
                data-target="#modalComingSoon"
              >
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={archibotlogo} width="60px" />
                  </div>
                  <h4 className="text-white">ARCHIBOT</h4>
                  <h6 className="text-content">
                    An advanced trading robot with AI technology makes it easy
                    for you to trade
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* FUTURE */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card-body-feature">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={lendmarklogo} width="60px" />
                  </div>
                  <h4 className="text-white">LENDMARK</h4>
                  <h6 className="text-content">
                    Peer 2 peer lending crypto with 5% to 7% potential p.a
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* STOCK */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card-body-feature">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={digifundlogo} width="60px" />
                  </div>
                  <h4 className="text-white">DIGIFUND</h4>
                  <h6 className="text-content">
                    Loan & Credit for Property based on CryptoLoan & Credit for
                    Property based on Crypto
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* LEVERAGE */}
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card-body-feature">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3 mt-2">
                    <img src={archiratorlogo} width="60px" />
                  </div>
                  <h4 className="text-white">ARCHIRATOR</h4>
                  <h6 className="text-content">
                    Startup accelerators and venture capital for startups to get
                    funding via crypto
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Opened */}
      {/* <div
        class="modal fade"
        id="modalComingSoon"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div style={{ background: "black" }}>
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "60px",
                  marginBottom: "60px",
                }}
              >
                <img src={coming_soonlogo} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
