import React from "react";
import Translate from "../../../i18n/Translate";
import Calculator from "./calculator/CalculatorAsetHomepage";

export default function apaItuCrypto() {
  return (
    <div className="mt-hp-r">
      <div className="container">
        <div
          className="p-4 text-center"
          // data-aos="fade-up"
          // data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
        >
          <h2 className="text-homepage-yellow font-apa-itu-responsive">
            Calculator Aset Crypto
          </h2>
          <Calculator/>
        </div>
      </div>
    </div>
  );
}
