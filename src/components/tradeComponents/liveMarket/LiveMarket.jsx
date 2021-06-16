import React from "react";
import { useSelector } from "react-redux";

import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";
import { GetOrderLiveMarket } from "../../../stores/pasartrading/functions";

import { convertNumber } from "../../../assets/js";

import moment from "moment";
import "moment/locale/id";

export default function LiveMarket() {
  const { PairSymbol } = useSelector((state) =>
    state ? state?.pasarTradingReducer : {},
  );
  const { mode } = useSelector((state) => state.daynightReducer);
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    if (PairSymbol && IoWebSocketTrade) {
      GetOrderLiveMarket({ dispatch: setData, pair: PairSymbol });
      IoWebSocketTrade.removeEventListener(`OrderMatch-${PairSymbol}`);
      IoWebSocketTrade.on(`OrderMatch-${PairSymbol}`, (data) => {
        setData(data);
      });
    }
    return () =>
      IoWebSocketTrade.removeEventListener(`OrderMatch-${PairSymbol}`);
  }, [PairSymbol]);

  return (
    <div>
      <div
        className={mode ? "bg-trade3-dark" : "bg-trade3"}
        style={{ padding: "9px 16px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <th className="text-gold font-14 mb-0">Live Market</th>
          <div>
            <i class="fa fa-bar-chart text-success mx-1" aria-hidden="true"></i>

            <i class="fa fa-bar-chart text-danger mx-1" aria-hidden="true"></i>

            <i class="fa fa-bar-chart text-gold mx-1" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div
        className={
          mode ? "outter-table-wrapper3-dark" : "outter-table-wrapper3"
        }
      >
        <div class={mode ? "table-wrapper3-dark" : "table-wrapper3"}>
          <table>
            <thead className="">
              <tr className={mode ? "text-price-dark" : "text-price"}>
                <th className="text-left">
                  Price (
                  {PairSymbol ? PairSymbol.toString().split("/")[1] : null})
                </th>
                <th className="text-right">
                  Amount (
                  {PairSymbol ? PairSymbol.toString().split("/")[0] : null})
                </th>
                <th className="text-right">Time</th>
                {/* <th className="text-right">Waktu</th> */}
              </tr>
            </thead>

            {Data && Array.isArray(Data) && Data.length > 0 ? (
              Data.map((item) => {
                return (
                  <tbody>
                    <tr
                      data-toggle="tooltip"
                      data-placement="top"
                      title={convertNumber.toRupiah(item.price * item.amount,"CRYPTO")}
                    >
                      <td
                        className={`${
                          item.side
                            ? item.side.toUpperCase() === "BUY"
                              ? "text-success"
                              : item.side.toUpperCase() === "SELL"
                              ? "text-danger"
                              : "text-white"
                            : "text-white"
                        } text-left`}
                      >
                        {item.price ? convertNumber.toRupiah(item.price,"CRYPTO") : 0}
                      </td>
                      <td
                        className={`${
                          mode ? "text-price-dark" : "text-price"
                        } text-right`}
                      >
                        {item.amount
                          ? convertNumber.toRupiah(item.amount, "CRYPTO")
                          : 0}
                      </td>
                      {/* <td className="text-price text-right">{item.total?Number(item.total<1)?Number(item.total).toFixed(8):Number(item.total).toLocaleString().split(",")[0]:0}</td> */}
                      <td
                        className={`${
                          mode ? "text-price-dark" : "text-price"
                        } text-right`}
                      >
                        {moment(item.createdAt).format("HH:MM:SS")}
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody>
                <tr>
                  <td className=""></td>
                  <td
                    className={`${
                      mode ? "text-price-dark" : "text-price"
                    } text-center`}
                  >
                    No Orders
                  </td>
                  {/* <td className="text-price text-right">{item.total?Number(item.total<1)?Number(item.total).toFixed(8):Number(item.total).toLocaleString().split(",")[0]:0}</td> */}
                  <td
                    className={`${
                      mode ? "text-price-dark" : "text-price"
                    } text-right`}
                  ></td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
