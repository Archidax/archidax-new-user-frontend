import React from "react";
import { getCoinIcon } from "../../../../helpers/coins";

function AssetCrypto({ data }) {
  return (
    <div className="mt-2 table-responsive">
      {data.map((el, index) => {
        if (index < 7) {
          return (
            <div
              className="col-12 p-1 mb-2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              key={index}
            >
              <div className="d-flex flex-direction-row">
                <img src={getCoinIcon(el.type)} alt="icon" height={20} className="mr-4" />
                <h6 className="mb-0 font-14">{el.balance}</h6>
              </div>
              <div className="w-100 mx-3 row">
                <hr
                  className="w-100 "
                  style={{ borderTop: "0.5px dashed grey" }}
                />
              </div>
              <div>
                <h6 className="mb-0 font-14 text-white-50">{el.type}</h6>
              </div>
            </div>
          );
        }
        return (null);
      })}
    </div>
  );
}

export default AssetCrypto;
