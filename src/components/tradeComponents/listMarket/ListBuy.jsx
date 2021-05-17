import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetOrderBuyAndSell,
  SET_RX_FORM_DATASELL,
} from "../../../stores/pasartrading/functions";
import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";

import { convertNumber } from "../../../assets/js";

export default function ListBuy() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.daynightReducer);
  const { PairSymbol, pairTo, pairFrom } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );

  useEffect(() => {
    if (PairSymbol) {
      GetOrderBuyAndSell({
        dispatch: setData,
        pair: PairSymbol,
        side: "BUY",
        limit: 50,
      });
    }
  }, [setData, PairSymbol]);

  React.useEffect(() => {
    if (IoWebSocketTrade && IoWebSocketTrade.connected && PairSymbol) {
      IoWebSocketTrade.on(`OrderBuy-${PairSymbol}`, (data) => {
        setData(data);
      });
      return () =>
        IoWebSocketTrade.removeEventListener(`OrderBuy-${PairSymbol}`);
    }
  }, [PairSymbol]);

  return (
    <div>
      <div className="outter-table-wrapper2">
        <div class={mode ? "table-wrapper2-dark" : "table-wrapper2"}>
          <table>
            <thead className="">
              <tr className={mode ? "text-price2-dark" : "text-price2"}>
                <th className="text-left font-bolder25">Price</th>
                {/* <th className="text-left font-bolder25">Jumlah</th> */}
                <th className="text-left font-bolder25">{pairTo}</th>
                <th className="text-left font-bolder25">{pairFrom}</th>
              </tr>
            </thead>
            <tbody>
              {data && Array.isArray(data) && data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          SET_RX_FORM_DATASELL({
                            price: item.price,
                            amount: "",
                          }),
                        )
                      }
                    >
                      <td
                        className={`${
                          mode ? "text-success" : "text-success font-bolder25"
                        } text-left`}
                      >
                        {pairFrom === "USDT"
                          ? item.price
                          : convertNumber.toRupiah(item.price)}
                      </td>
                      <td
                        className={`${
                          mode ? "text-price-dark" : "text-price font-bolder25"
                        } text-left`}
                      >
                        {item.amount
                          ? convertNumber.toRupiah(item.amount, "CRYPTO")
                          : 0}
                      </td>
                      <td
                        className={`${
                          mode ? "text-price-dark" : "text-price font-bolder25"
                        } text-left`}
                      >
                        {pairFrom === "USDT"
                          ? item.total
                          : convertNumber.toRupiah(item.total)}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="text-success text-center" colSpan={4}>
                    No Order
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
