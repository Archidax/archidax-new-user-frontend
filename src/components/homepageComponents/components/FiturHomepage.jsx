import React from "react";
import Spotlogo from "../../../assets/img/homepage/fitur/Spot.svg";
import Futurelogo from "../../../assets/img/homepage/fitur/Future.svg";
import Stocklogo from "../../../assets/img/homepage/fitur/Stock.svg";
import Leveragelogo from "../../../assets/img/homepage/fitur/Leverage.svg";

import coming_soonlogo from "../../../assets/img/homepage/fitur/coming_soon.svg";

export default function FiturHomepage() {
  return (
    <div className="bg-archidax margin-feature-hp">
      <div className="" style={{ width: "75%", margin: "auto" }}>
        {/* ROW 1 */}
        <div className="row">
          {/* SPOT */}
          <div className="col">
            <div className="card-body">
              <div
                className="box-feature-hp"
                data-toggle="modal"
                data-target="#modalComingSoon"
              >
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Spotlogo} width="60px" />
                  </div>
                  <h4 className="text-white">SPOT</h4>
                  <h6 className="text-content">
                    Over 20 spot markets available
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* FUTURE */}
          <div className="col">
            <div className="card-body">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Futurelogo} width="60px" />
                  </div>
                  <h4 className="text-white">FUTURE</h4>
                  <h6 className="text-content">
                    Over 40 perpetual and quarterly future markets
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* STOCK */}
          <div className="col">
            <div className="card-body">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Stocklogo} width="60px" />
                  </div>
                  <h4 className="text-white">STOCK</h4>
                  <h6 className="text-content">
                    Spot and futures of a wide variety of tokenized stocks
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* LEVERAGE */}
          <div className="col">
            <div className="card-body">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Leveragelogo} width="60px" />
                  </div>
                  <h4 className="text-white">LEVERAGE</h4>
                  <h6 className="text-content">
                    ERC 20 assets that can give you leveraged exposured
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="row">
          {/* SPOT */}
          <div className="col">
            <div className="card-body">
              <div
                className="box-feature-hp"
                data-toggle="modal"
                data-target="#modalComingSoon"
              >
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Spotlogo} width="60px" />
                  </div>
                  <h4 className="text-white">SPOT</h4>
                  <h6 className="text-content">
                    Over 20 spot markets available
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* FUTURE */}
          <div className="col">
            <div className="card-body">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Futurelogo} width="60px" />
                  </div>
                  <h4 className="text-white">FUTURE</h4>
                  <h6 className="text-content">
                    Over 40 perpetual and quarterly future markets
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* STOCK */}
          <div className="col">
            <div className="card-body">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Stocklogo} width="60px" />
                  </div>
                  <h4 className="text-white">STOCK</h4>
                  <h6 className="text-content">
                    Spot and futures of a wide variety of tokenized stocks
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* LEVERAGE */}
          <div className="col">
            <div className="card-body">
              <div className="box-feature-hp">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img src={Leveragelogo} width="60px" />
                  </div>
                  <h4 className="text-white">LEVERAGE</h4>
                  <h6 className="text-content">
                    ERC 20 assets that can give you leveraged exposured
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Opened */}
      <div
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
      </div>
    </div>
  );
}
