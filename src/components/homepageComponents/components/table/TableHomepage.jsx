import React from "react";
import { useSelector } from "react-redux";

import { convertNumber } from "../../../../assets/js";

import { useHistory } from "react-router-dom";

export default function TableHomepage() {
  const { listingList } = useSelector((state) =>
    state ? state.pasarTradingReducer : {},
  );
  const history = useHistory();

  return (
    <div>
      <div className="p-3 outter-table-wrapper">
        <div className="table-wrapper">
          <table id="homepage-table">
            <thead className="tb-border-bottom">
              <tr className="text-white">
                <th className="text-left">Symbol Coin</th>
                <th className="text-left">Coin Name</th>
                <th className="text-left">Change</th>
                <th className="text-left">Price (24 Hours)</th>
                <th className="text-left">High (24 Hours)</th>
                <th className="text-left">Low (24 Hours)</th>
                <th className="text-left">Volume (24 Hours)</th>
              </tr>
            </thead>
            <tbody>
              {listingList &&
              Array.isArray(listingList) &&
              listingList.length > 0 ? (
                listingList.map((item) => {
                  const handleRowClick = (row) => {
                    history.push(
                      `/pasar/${item.symbol.toString().replace("/", "_")}`,
                    );
                  };
                  return (
                    <tr
                      className="tb-border-bottom2 cursor-pointer"
                      onClick={handleRowClick}
                    >
                      <td className="text-white table-center">
                        <img
                          src={item.icon}
                          alt="icon"
                          style={{ maxHeight: "23px", marginRight: "10px" }}
                        />
                        <div className="text-white">{item.symbol}</div>
                      </td>
                      <td className="text-white text-left">{item.assetName}</td>
                      <td
                        className={`${
                          item.price_24hour
                            ? convertNumber.tradeUpDownChangeHomepage(
                                item.price_24hour.price24h_change,
                                2,
                              )
                            : "-"
                        }`}
                      >
                        {item.price_24hour
                          ? convertNumber.tradeChange(
                              item.price_24hour.price24h_change,
                              2,
                            )
                          : "- "}
                      </td>
                      <td className="text-white text-left">
                        {item.price_24hour
                          ? convertNumber.toRupiah(
                              item.price_24hour.price24h_close,
                            )
                          : "- "}
                      </td>
                      <td className="text-white text-left">
                        {item.price_24hour
                          ? convertNumber.toRupiah(
                              item.price_24hour.price24h_high,
                            )
                          : "- "}
                      </td>
                      <td className="text-white text-left">
                        {item.price_24hour
                          ? convertNumber.toRupiah(
                              item.price_24hour.price24h_low,
                            )
                          : "- "}
                      </td>
                      <td className="text-white text-left">
                        {item.price_24hour
                          ? convertNumber.toRupiah(
                              item.price_24hour.price24h_volume,
                            )
                          : "- "}{" "}
                        {item.symbol ? item.symbol.split("/")[0] : null}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="text-white">
                    No Data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
