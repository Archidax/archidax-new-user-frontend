import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetOrderBuyAndSell,
  SET_RX_FORM_DATABUY,
} from "../../../stores/pasartrading/functions";
import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";

import { convertNumber } from "../../../assets/js";

import darksell from "../../../assets/img/trade/volume/dark-sell.svg";

export default function ListSell() {
  const [data, setData] = useState([]);
  const { mode } = useSelector((state) => state.daynightReducer);
  const dispatch = useDispatch();
  const { PairSymbol, pairTo, pairFrom } = useSelector(
    (state) => state.pasarTradingReducer,
  );
  
  React.useEffect(() => {
    if (PairSymbol) {
      GetOrderBuyAndSell({
        dispatch: setData,
        PairSymbol: PairSymbol,
        side: "SELL",
        limit: 50,
      });
    }
    if (IoWebSocketTrade && IoWebSocketTrade.connected && PairSymbol) {
      IoWebSocketTrade.removeEventListener(`OrderSell-${PairSymbol}`);
      IoWebSocketTrade.on(`OrderSell-${PairSymbol}`, (data) => {
        setData(data);
      });
      return () => IoWebSocketTrade.removeEventListener(`OrderSell-${PairSymbol}`);
    }
  }, [PairSymbol]);

  return (
    <div>
      <div className="outter-table-wrapper2">
        <div class={mode ? "table-wrapper2-dark" : "table-wrapper2"}>
          <table>
            <thead className="">
              <tr className={mode ? "text-price2-dark" : "text-price2"}>
                {/* <th className="text-left">Jumlah</th> */}
                <th className="text-left font-bolder25">Price</th>
                <th className="text-left font-bolder25">{pairFrom}</th>
                <th className="text-left font-bolder25">{pairTo}</th>
              </tr>
            </thead>

            {data && Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <tbody
                    className={`${mode ? "dark-sell" : "day-sell"}`}
                    style={{
                      backgroundSize: `${(item.amount / item.stock) * 100}%`,
                      backgroundRepeat: "repeat-y",
                    }} // value based on volume sisa
                  >
                    <tr
                      key={index}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        dispatch(
                          SET_RX_FORM_DATABUY({
                            price: item.price,
                            amount: "",
                          }),
                        )
                      }
                    >
                      <td
                        className={`${
                          mode ? "text-danger" : "text-danger font-bolder25"
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
                          ? item.amount * item.price
                          : convertNumber.toRupiah(item.amount * item.price)}
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody
              // className={`${mode ? "dark-sell" : "day-sell"}`}
              // style={{ backgroundSize: "35%" }}
              >
                <tr>
                  <td className="text-left text-sell text-center" colSpan={4}>
                    No Order
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
