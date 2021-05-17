import React from "react";

// Import
import TableAssetSaya from "./table/TableAssetSaya";
import NilaiAsset from "./wallet/NilaiAsset";

// import bgAsset from "../../assets/img/wallet/ornamen.svg";
import CopyrightDashboard from "../footerComponents/copyrightComponents/CopyrightDashboard";

function Wallet() {
  return (
    <div>
      <div className="px-3 pt-3" style={{ minHeight: "88vh" }}>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="card ci-customCard-1 bg-transparent">
              <div
                className="card-body ci-bg-primary rounded"
                // style={{
                //   backgroundImage: `url(${bgAsset})`,
                //   backgroundPosition: "right bottom",
                //   backgroundRepeat: "no-repeat",
                // }}
              >
                <div className="row">
                  <div className="col-12 col-md-12">
                    <h4 className="ml-2 text-gold font-bold font-16 label-title-top">
                      Nilai Asset
                    </h4>
                  </div>
                </div>

                <div className="row">
                  <NilaiAsset />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-12">
            <TableAssetSaya />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
