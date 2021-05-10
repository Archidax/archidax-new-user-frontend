import React from "react";
import KeamananPanel from "./KeamananPanel";
import LayananAktif from "./LayananAktif";

function Keamanan() {
  return (
    <div className="ci-customCard-1">
      <div className="row no-gutters p-4 text-white">
        <div className="col-12 col-lg-4">
          <KeamananPanel />
        </div>
        <div className="col-12 col-lg-7 offset-lg-1 mt-lg-4 mt-lg-0">
          <LayananAktif />
        </div>
      </div>
    </div>
  );
}

export default Keamanan;
