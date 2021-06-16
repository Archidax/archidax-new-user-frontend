import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetOrderBuyAndSell,
  SET_RX_FORM_DATASELL,
} from "../../../stores/pasartrading/functions";
import { IoWebSocketTrade, IoWebSocket } from "../../../configuration/IoWebSocket";

import { convertNumber } from "../../../assets/js";
import { useParams } from "react-router";

export default function ListBuy() {
  const {symbol}=useParams();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.daynightReducer);
  const { pairTo, pairFrom } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );
  
  React.useEffect(() => {
    if (symbol&&IoWebSocketTrade) {
      let Symbols=symbol.replace("_","/");
      GetOrderBuyAndSell({
        dispatch: setData,
        PairSymbol: Symbols,
        side: "BUY",
        limit: 50,
      });
      IoWebSocketTrade.removeEventListener(`OrderBuy-${Symbols}`);
      IoWebSocketTrade.on(`OrderBuy-${Symbols}`, (data) => {
        if(data){
          setData(data);
        }
      });
      return () => IoWebSocketTrade.removeEventListener(`OrderBuy-${Symbols}`);
    }
  }, [symbol]);

  return (
    <div>
      <div className="outter-table-wrapper2">
        <div class={mode ? "table-wrapper2-dark" : "table-wrapper2"}>
          <table>
            <thead className="">
              <tr className={mode ? "text-price2-dark" : "text-price2"}>
                <th className="text-left font-bolder25">Price</th>
                {/* <th className="text-left font-bolder25">Jumlah</th> */}
                <th className="text-left font-bolder25">{pairFrom}</th>
                <th className="text-left font-bolder25">{pairTo}</th>
              </tr>
            </thead>

            {data && Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <tbody
                    className={`${mode ? "dark-buy" : "day-buy"}`}
                    style={{
                      backgroundSize: `${(item.amount / item.stock) * 100}%`,
                      backgroundRepeat: "repeat-y",
                    }} // value based on volume sisa
                  >
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
                          {convertNumber.toRupiah(item.price,"CRYPTO")}
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
                        {convertNumber.toRupiah(item.amount * item.price,"CRYPTO")}
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody
              // className={`${mode ? "dark-buy" : "day-buy"}`}
              // style={{ backgroundSize: "50%" }}
              >
                <tr>
                  <td className="text-success text-center" colSpan={4}>
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
