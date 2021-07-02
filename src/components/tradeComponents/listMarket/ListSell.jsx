import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetOrderBuyAndSell,
  SET_RX_FORM_DATABUY,
} from "../../../stores/pasartrading/functions";
import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";

import { convertNumber } from "../../../assets/js";
import { useParams } from "react-router";

import NumberFormat from "react-number-format";

// import darksell from "../../../assets/img/trade/volume/dark-sell.svg";

export default function ListSell() {
  const {symbol}=useParams();
  const [data, setData] = useState([]);
  const { mode } = useSelector((state) => state.daynightReducer);
  const dispatch = useDispatch();
  const { pairTo, pairFrom } = useSelector(
    (state) => state.pasarTradingReducer,
  );
  
  React.useEffect(() => {
    if (symbol&&IoWebSocketTrade) {
      let Symbols=symbol.replace("_","/");
      GetOrderBuyAndSell({
        dispatch: setData,
        PairSymbol: Symbols,
        side: "SELL",
        limit: 50,
      });
      IoWebSocketTrade.removeEventListener(`OrderSell-${Symbols}`);
      IoWebSocketTrade.on(`OrderSell-${Symbols}`, (data) => {
        if(data){
          setData(data);
        }
      });
      return () => IoWebSocketTrade.removeEventListener(`OrderSell-${Symbols}`);
    }
  }, [symbol]);

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
                        <NumberFormat value={item.price} displayType={'text'} decimalScale={15} thousandSeparator={true} />
                      </td>
                      <td
                        className={`${
                          mode ? "text-price-dark" : "text-price font-bolder25"
                        } text-left`}
                      >
                           <NumberFormat value={item.amount} decimalScale={8} displayType={'text'} thousandSeparator={true} />
                      </td>
                      <td
                        className={`${
                          mode ? "text-price-dark" : "text-price font-bolder25"
                        } text-left`}
                      >
                        <NumberFormat value={Number(item.amount * item.price)} decimalScale={8} displayType={'text'} fixedDecimalScale={true} thousandSeparator={true} />
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
