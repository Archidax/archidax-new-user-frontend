import React from "react";
import { useSelector } from "react-redux";

import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";
import { GetOrderLiveMarket } from "../../../stores/pasartrading/functions";

import { convertNumber } from "../../../assets/js";

export default function LiveMarket() {
  const { PairSymbol } = useSelector((state) =>
    state ? state?.pasarTradingReducer : {},
  );
  const { mode } = useSelector((state) => state.daynightReducer);
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    GetOrderLiveMarket({ dispatch: setData, pair: PairSymbol });
  }, [setData, PairSymbol]);

  React.useEffect(() => {
    if (IoWebSocketTrade && IoWebSocketTrade.connected && PairSymbol) {
      IoWebSocketTrade.on(`OrderMatch-${PairSymbol}`, (data) => {
        setData(data);
      });
      return () =>
        IoWebSocketTrade.removeEventListener(`OrderMatch-${PairSymbol}`);
    }
  }, [PairSymbol, setData]);

  return (
    <div>
      <div
        className={mode ? "bg-trade3-dark" : "bg-trade3"}
        style={{ padding: "9px 16px" }}
      >
        <th className="text-gold font-14 mb-0 ">Live Market</th>
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
                  Harga (
                  {PairSymbol ? PairSymbol.toString().split("/")[1] : null})
                </th>
                <th className="text-right">
                  Jumlah (
                  {PairSymbol ? PairSymbol.toString().split("/")[0] : null})
                </th>
                <th className="text-right">Waktu</th>
                {/* <th className="text-right">Waktu</th> */}
              </tr>
            </thead>
            <tbody>
              {Data && Array.isArray(Data) && Data.length > 0 ? (
                Data.map((item) => {
                  return (
                    <tr
                      data-toggle="tooltip"
                      data-placement="top"
                      title={convertNumber.toRupiah(item.price * item.amount)}
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
                        {item.price ? convertNumber.toRupiah(item.price) : 0}
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
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleTimeString("id-ID")
                          : "-"}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    className={`${
                      mode ? "text-price-dark" : "text-price"
                    } text-left text-right mt-5 pt-3`}
                    colSpan={2}
                  >
                    No Orders
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
