import React from "react";
import financiallogo from "../../../assets/img/homepage/mengapa/financial_security.svg";
import deeplogo from "../../../assets/img/homepage/mengapa/deep_liquidity.svg";
import userlogo from "../../../assets/img/homepage/mengapa/user_first.svg";
import easylogo from "../../../assets/img/homepage/mengapa/easy_to_use.svg";

export default function MengapaHomepage() {
  return (
    <div
      className="bg-archidax"
      style={{ paddingBottom: "220px", paddingTop: "40px" }}
    >
      <div className="" style={{ width: "80%", margin: "auto" }}>
        <h2 className="text-homepage-yellow text-center font-apa-itu-responsive">
          Why Are We Trustworthy
        </h2>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-white">
            <div className="card-body">
              <img src={financiallogo} width="80" className="mb-3" />
              <h5>Financial Security</h5>
              <p>
                Unbiased zero-knowledge proof privacy and confidentiality
                technology protects user privacy.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-white">
            <div className="card-body">
              <img src={deeplogo} width="80" className="mb-3" />
              <h5>Deep Liquidity & Tight Spread</h5>
              <p>
                Trade futures with leverage with maximum efficiency and minimal
                slippage.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-white">
            <div className="card-body">
              <img src={userlogo} width="80" className="mb-3" />
              <h5>User-First</h5>
              <p>
                Serving global users with 24/7 exchange services, multilingual
                support, strong community backup, and professional customer
                service.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-white">
            <div className="card-body">
              <img src={easylogo} width="80" className="mb-3" />
              <h5>Easy to Use</h5>
              <p>
                A wide range of order systems and trading tools for risk
                management are at your disposal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
