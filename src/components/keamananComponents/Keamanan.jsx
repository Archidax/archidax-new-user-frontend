import React from "react";
import KeamananPanel from "./KeamananPanel";
import LayananAktif from "./LayananAktif";

function Keamanan() {
  return (
    <div className="ci-customCard-1  m-3" style={{minHeight:'100vh',borderRadius:'5px'}}>
      <div className="row no-gutters p-4 text-white">
        <div className="col-12 col-lg-4 mb-2">
          <KeamananPanel />
        </div>
        <div className="col-12 col-lg-7 offset-lg-1 ">
          <LayananAktif />
        </div>
      </div>
    </div>
  );
}

export default Keamanan;
