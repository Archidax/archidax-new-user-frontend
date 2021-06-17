import React from "react";
// import Translate from "../../../i18n/Translate";
import Calculator from "./calculator/CalculatorAsetHomepage";

export default function apaItuCrypto() {
  return (
    <div className="bg-archidax" style={{ paddingBottom: "220px" }}>
      <div className="mt-hp-r">
        <hr
          style={{ border: "1px solid rgba(249,186,66,0.5)", width: "50%" }}
        />
        <div className="container">
          <div
            className="p-4 text-center"
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <h2 className="text-homepage-yellow font-apa-itu-responsive">
              Price Converter
            </h2>
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  );
}
