import React from "react";
import gadgetimage from "../../../assets/img/homepage/gadget/gadget.png";

export default function GadgetHomepage() {
  return (
    <div style={{ background: "rgba(0,0,0,0.75)" }}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <img src={gadgetimage} style={{ width: "90%", margin: "auto" }} />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="card-body">
              <h2 className="font-36 text-white text-center">
                Trading in any conditions, anyone, anywhere and anytime !
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
