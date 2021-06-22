import React from "react";

export default function MengapaHomepage() {
  return (
    <div className="bg-archidax" style={{ paddingBottom: "220px" }}>
      <div className="" style={{ width: "80%", margin: "auto" }}>
        <h2 className="text-homepage-yellow text-center font-apa-itu-responsive">
          Why Are We Trustworthy
        </h2>
        <div className="row mt-4">
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-white">
            <div className="card-body">
              <h5>Financial Security</h5>
              <p>
                Unbiased zero-knowledge proof privacy and confidentiality
                technology protects user privacy. Based on security designs such
                as multiple signatures, offline signatures, and layered
                architecture, it uses mature cold and hot wallet separation
                technologies.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-white">
            <div className="card-body">
              <h5>Deep Liquidity & Tight Spread</h5>
              <p>
                Trade futures with leverage with maximum efficiency and minimal
                slippage.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-white">
            <div className="card-body">
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
