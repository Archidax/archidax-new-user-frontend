import React from "react";

// Import
import TableAssetSaya from "./table/TableAssetSaya";
import NilaiAsset from "./wallet/NilaiAsset";

import CopyrightDashboard from "../footerComponents/copyrightComponents/CopyrightDashboard";
import Translate from "../../i18n/Translate";

function Wallet() {
  return (
    <div>
      <div className="px-3 pt-3" style={{ minHeight: "88vh" }}>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="card ci-customCard-1 bg-transparent">
              <div
                className="card-body ci-bg-primary rounded"
              >
                <div className="row">
                  <div className="col-12 col-md-12">
                    <h4 className="ml-2 text-gold font-bold font-16 label-title-top">
                      {Translate('wal_nilai_aset')}
                    </h4>
                  </div>
                </div>

                <div className="row">
                  lagi bug ya, nnti dlu
                  {/* <NilaiAsset /> */}
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
