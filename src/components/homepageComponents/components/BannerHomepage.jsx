import React from "react";
// import logounderbanner from "../../../assets/img/homepage/banner/bappebti_dkk.png";
import SliderBannerHomepage from "./slider/SliderBannerHomepage";
import kominfo from "../../../assets/img/homepage/logoOrg/Kominfo.png";
import abi from "../../../assets/img/homepage/logoOrg/ABI.png";
import bappebti from "../../../assets/img/homepage/logoOrg/Bappebti.png";
import group from "../../../assets/img/homepage/logoOrg/group.png";

import Translate from "../../../i18n/Translate";

export default function BannerHomepage() {
  return (
    <div className="min-h-65-r bg-homepage-banner pb-4">
      <div className="container-homepage">
        <div className="row banner-padding-responsive">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="col-12 p-0">
              <h2 className="text-white font-50-reponsive mb-4">
                {Translate("hb_title")}
              </h2>
              <div className="css-typing">
                <h4 className="text-white font-miliki mb-1">
                  {Translate("hb_text1")}
                </h4>
                <h4 className="text-white font-miliki mb-4">
                  {Translate("hb_text2")}
                </h4>
              </div>
            </div>

            <div className="mb-4 display-f-b">
              <div className="btn-daftar-r">
                <a href="/register" className="btn-daftar px-4 py-2">
                  <h6 className="mb-0">{Translate("hb_daftar")}</h6>
                </a>
              </div>
              <div className="btn-masuk-r">
                <a href="/login" className="btn-masuk px-4 py-2">
                  <h6 className="mb-0">{Translate("hb_masuk")}</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-xs-12 col-md-5 offset-md-1 col-sm-12 col-xs-12">
            <div className="col-lg-11 offset-lg-1 pb-3 pl-0 pr-0 display-b-n">
              {/* <img src={ads} alt="ads" width="100%" /> */}
              <SliderBannerHomepage />
            </div>
            <div className="col-lg-11 offset-lg-1 col-xs-12 mt-4 p-0">
              <img src={group} style={{ width: "100%" }} />
              {/* <div
                style={{
                  display: "flex",
                  // backgroundColor: "white",
                  // padding: "8px 10px",
                  // borderRadius: "10px",
                  justifyContent: "flex-end",
                }}
              >
                {" "}
                <div style={{ background: "white" }} className="pl-3 py-2 pr-1">
                  <a
                    href="https://pse.kominfo.go.id/tdpse-detail/379"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={kominfo}
                      alt="kominfo"
                      className="image-bapepti-height"
                    />
                  </a>
                </div>
                <div style={{ background: "white" }} className="px-1 py-2">
                  <a
                    href="https://asosiasiblockchain.co.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={abi} alt="abi" className="image-bapepti-height" />
                  </a>
                </div>
                <div style={{ background: "white" }} className="pr-3 py-2 pl-1">
                  <a
                    href="http://www.bappebti.go.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={bappebti}
                      alt="bappebti"
                      className="image-bapepti-height"
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
