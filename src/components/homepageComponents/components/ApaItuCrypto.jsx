import React from "react";
import Translate from "../../../i18n/Translate";

export default function apaItuCrypto() {
  return (
    <div className="bg-apa-itu ">
      <div className="container">
        <div
          className="p-4 text-center"
          // data-aos="fade-up"
          // data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
        >
          <h2 className="text-homepage-yellow mt-4 font-apa-itu-responsive">
            {Translate("haic_title")}
          </h2>
          <p className="pl-1 pr-1 mt-4 text-white font-apa-itu-responsive2">
            {Translate("haic_text1")}
          </p>
          <p className="pl-1 pr-1 text-white font-apa-itu-responsive2">
            {Translate("haic_text2")}
          </p>
        </div>
      </div>
    </div>
  );
}
