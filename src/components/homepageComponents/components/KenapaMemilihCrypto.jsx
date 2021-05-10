import React, { useState } from "react";
import bg0 from "../../../assets/img/homepage/kenapa/BG0.png";
import bg01 from "../../../assets/img/homepage/kenapa/BG01.png";
import fg01 from "../../../assets/img/homepage/kenapa/FG01.png";
import bg02 from "../../../assets/img/homepage/kenapa/BG02.png";
import fg02 from "../../../assets/img/homepage/kenapa/FG02.png";
import bg03 from "../../../assets/img/homepage/kenapa/BG03.png";
import fg03 from "../../../assets/img/homepage/kenapa/FG03.png";
import bg04 from "../../../assets/img/homepage/kenapa/BG04.png";
import fg04 from "../../../assets/img/homepage/kenapa/FG04.png";

import Translate from "../../../i18n/Translate";
import CalculatorAsetHomepage from "./calculator/CalculatorAsetHomepage";

function KenapaMemilihCrypto() {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

  const handleClick1 = () => {
    setIsShown(true);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
  };

  const handleClick2 = () => {
    setIsShown(false);
    setIsShown2(true);
    setIsShown3(false);
    setIsShown4(false);
  };

  const handleClick3 = () => {
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(true);
    setIsShown4(false);
  };

  const handleClick4 = () => {
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(true);
  };

  return (
    <div className="bg-homepage2 mt-5">
      <div className="container-homepage pt-5 pb-3">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-xs-12 p-4">
            <h6 className="text-homepage-yellow font-apa-itu-responsive">
              {Translate("hkmc_title")}
            </h6>
            <h6
              className="text-white pt-3 font-apa-itu-responsive2"
              style={{ lineHeight: "1.5" }}
            >
              {Translate("hkmc_text1")}
            </h6>
            <h6
              className="text-white font-apa-itu-responsive2"
              style={{ lineHeight: "1.5" }}
            >
              {Translate("hkmc_text2")}
            </h6>
          </div>
          {/* <div className="col-md-6 p-0">
            <CalculatorAsetHomepage />
          </div> */}
        </div>
        <div className="row pt-2 card-homepage">
          <div
            className="col-lg-3 col-sm-12 col-xs-12 bg-kenapa pb-4 homepage-kenapa-responsive margin-kenapa-card-responsive"
            onMouseEnter={handleClick1}
          >
            <div className="pt-4 pb-4 pl-3 pr-3">
              <h6 className="font-22">{Translate("hkmc_subtitle1")}</h6>
              <p className="font-16 mt-3">{Translate("hkmc_subtitle1a")}</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-12 col-xs-12 bg-kenapa pb-4 homepage-kenapa-responsive margin-kenapa-card-responsive"
            onMouseEnter={handleClick2}
          >
            <div className="pt-4 pb-4 pl-3 pr-3">
              <h6 className="font-22">{Translate("hkmc_subtitle2")}</h6>
              <p className="font-16 mt-3">{Translate("hkmc_subtitle2a")}</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-12 col-xs-12 bg-kenapa pb-4 homepage-kenapa-responsive margin-kenapa-card-responsive"
            onMouseEnter={handleClick3}
          >
            <div className="pt-4 pb-4 pl-3 pr-3">
              <h6 className="font-22">{Translate("hkmc_subtitle3")}</h6>
              <p className="font-16 mt-3">{Translate("hkmc_subtitle3a")}</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-12 col-xs-12 bg-kenapa pb-4 homepage-kenapa-responsive margin-kenapa-card-responsive"
            onMouseEnter={handleClick4}
          >
            <div className="pt-4 pb-4 pl-3 pr-3">
              <h6 className="font-22">{Translate("hkmc_subtitle4")}</h6>
              <p className="font-16 mt-3">{Translate("hkmc_subtitle4a")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-12 p-0">
        <img src={hover1} style={{ width: "100%" }} />
      </div> */}

      <div
        className="col-12 p-0 display-f-n justify-content-center mt-0"
        style={{ height: "250px", overflow: "hidden" }}
      >
        <img src={bg0} alt="bg0" style={{ width: "100%" }} />

        {/* 1 */}
        {isShown && (
          <>
            <img
              src={bg01}
              alt="bg01"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
            <img
              src={fg01}
              alt="fg01"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
          </>
        )}

        {/* 2 */}
        {isShown2 && (
          <>
            <img
              src={bg02}
              alt="bg02"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
            <img
              src={fg02}
              alt="fg02"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
          </>
        )}

        {/* 3 */}
        {isShown3 && (
          <>
            <img
              src={bg03}
              alt="bg03"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
            <img
              src={fg03}
              alt="fg03"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
          </>
        )}

        {/* 4 */}
        {isShown4 && (
          <>
            <img
              src={bg04}
              alt="bg04"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
            <img
              src={fg04}
              alt="fg04"
              style={{
                position: "absolute",
                top: "0",
                height: "250px",
              }}
              data-aos="fade-up"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default KenapaMemilihCrypto;
