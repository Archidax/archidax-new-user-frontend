import React from "react";

import { useSelector } from "react-redux";

import moment from "moment";

import { GetHistoryOrder } from "../../../stores/pasartrading/functions";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { convertNumber } from "../../../assets/js";

import noorder from "../../../assets/img/trade/no_order.svg";

export default function OrderPending() {
  const { mode } = useSelector((state) => state.daynightReducer);

  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { PairSymbol } = useSelector((state) =>
    state ? state?.pasarTradingReducer : {},
  );

  const [Data, setData] = React.useState([]);
  const [, setCopy] = React.useState(false);

  React.useEffect(() => {
    if (isLoginPages) {
      GetHistoryOrder({ dispatch: setData, pair: PairSymbol });
    }
  }, [setData, PairSymbol, isLoginPages]);

  return (
    <div className="outter-table-wrapper6">
      <div class={mode ? "table-wrapper2-dark" : "table-wrapper2"}>
        <table>
          <thead className="">
            <tr className="text-white">
              <th className="text-left">Time</th>
              <th className="text-left">Order ID</th>
              <th className="text-left">Order Type</th>
              <th className="text-left">Pair</th>
              <th className="text-left">
                Price ({PairSymbol ? PairSymbol.toString().split("/")[1] : null}
                )
              </th>
              <th className="text-left">
                Amount (
                {PairSymbol ? PairSymbol.toString().split("/")[0] : null})
              </th>
              <th className="text-left">
                Total ({PairSymbol ? PairSymbol.toString().split("/")[1] : null}
                )
              </th>
            </tr>
          </thead>
          <tbody>
            {Data && Array.isArray(Data) && Data.length > 0 ? (
              Data.map((item, index) => {
                return (
                  <tr>
                    <td
                      className={`${
                        mode ? "text-price-dark" : "text-price"
                      } text-left`}
                    >
                      ({index + 1}),{" "}
                      {item.createdAt
                        ? moment(item.createdAt).format("L HH:MM:SS")
                        : "-"}
                    </td>
                    <td
                      className={`${
                        mode ? "text-price-dark" : "text-price"
                      } text-left`}
                    >
                      <CopyToClipboard
                        text={`${
                          item.symbol ? item.symbol.replace("/", "-") : null
                        }-${item.order ? item.order : null}`}
                        onCopy={() => {
                          setCopy(true);
                          alert("Order ID telah tercopy");
                        }}
                      >
                        <div
                          className={`btn btn-default p-0 ${
                            mode ? "text-price-dark" : "text-price"
                          }`}
                        >
                          {/*
                            <i className={`far fa-copy font-18`} style={{ cursor: "pointer" }} />
                          */}
                          {"  "}
                          <i className="font-12">
                            {item.symbol ? item.symbol.replace("/", "-") : null}
                            -{item.order ? item.order : null}
                          </i>
                        </div>
                      </CopyToClipboard>
                    </td>
                    <td
                      className={`${
                        mode ? "text-price-dark" : "text-price"
                      } text-left`}
                    >
                      {item.side
                        ? item.side.toUpperCase() === "BUY"
                          ? "BELI"
                          : item.side.toUpperCase() === "SELL"
                          ? "JUAL"
                          : "-"
                        : "-"}
                    </td>
                    <td
                      className={`${
                        mode ? "text-price-dark" : "text-price"
                      } text-left`}
                    >
                      {item.symbol ? item.symbol : "-"}
                    </td>
                    <td
                      className={`${
                        mode ? "text-price-dark" : "text-price"
                      } text-left`}
                    >
                      {convertNumber.toRupiah(item.price)}
                    </td>
                    <td
                      className={`${
                        mode ? "text-price-dark" : "text-price"
                      } text-left`}
                    >
                      {convertNumber.toRupiah(item.amount, "CRYPTO")}
                    </td>
                    <td
                      className={`${
                        mode ? "text-price-dark" : "text-price"
                      } text-left`}
                    >
                      {convertNumber.toRupiah(item.total)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  className="text-white text-left text-center mt-5 pt-3"
                  colSpan={7}
                >
                  <img src={noorder} width="100px" className="mt-4" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
