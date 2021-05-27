import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


import { convertNumber } from "../../../assets/js";

export default function FiatPair({listingList}) {
  // const { Exchange } = useSelector(
  //   (state) => state.pasarTradingReducer?.LISTING_EXCHANGE_ORDER,
  // );
  const { mode } = useSelector((state) => state.daynightReducer);
  return (
    <div className="">
      <div
        className={
          mode ? "outter-table-wrapper4-dark" : "outter-table-wrapper4"
        }
      >
        <div class={mode ? "table-wrapper4-dark" : "table-wrapper4"}>
          <table
            className="table-hover"
            id={mode ? "trade-table-dark" : "trade-table"}
          >
            <thead className="">
              <tr className={mode ? "text-price-dark" : "text-price"}>
                <th className="text-left">Pair</th>
                <th className="text-left">Price</th>
                <th className="text-left">%</th>
              </tr>
            </thead>
            <tbody>
              {listingList.map((val, index) => {
                if(val.toToken.symbol === "USDT"){
                  return <FiatPairRealtime item={val} index={index} />
                }
              })}
            </tbody>
            {/* <tbody>
              {Exchange && Array.isArray(Exchange) && Exchange.length > 0 ? (
                Exchange.filter((item) => {
                  if (item.base.toString().toUpperCase() === "USDT") {
                    return item;
                  } else {
                    return null;
                  }
                }).map((item, index) => {
                  return <FiatPairRealtime item={item} index={index} />;
                })
              ) : (
                <div className="text-center p-2">No Data</div>
              )}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}

function FiatPairRealtime({ item, index }) {
  // const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);
  const history = useHistory();
  const { mode } = useSelector((state) => state.daynightReducer);

  const handleRowClick = () => {
    history.push(`/pasar/${item.symbol.toString().replace('/', '_')}`);
  };

  // React.useEffect(() => {
  //   if (IoWebSocketTrade && IoWebSocketTrade.connected && item) {
  //     IoWebSocketTrade.removeAllListeners(`Prices-${item.symbol}`);
  //     IoWebSocketTrade.on(`Prices-${item.symbol}`, (data) => {
  //       if (data) {
  //         setData(data);
  //       }
  //       if (PairSymbol === data.symbol) {
  //         dispatch(
  //           setPasarTrading({
  //             Open: data.price24h_open,
  //             High: data.price24h_high,
  //             Low: data.price24h_low,
  //             Close: data.price24h_close,
  //             Change: data.price24h_change,
  //             Volume: data.price24h_priceVolume,
  //             VolumeCrypto: data.price24h_volume,
  //           }),
  //         );
  //       }
  //     });
  //     return () =>
  //       IoWebSocketTrade.removeEventListener(`Prices-${item.symbol}`);
  //   }
  // }, [item, setData, PairSymbol]);

  return (
    <tr
      onClick={handleRowClick}
      className="cursor-pointer"
      activeClassName="active"
      key={index}
    >
      <td className="text-left d-flex">
        <img src={item.fromToken.icon} alt="logo" className="mr-2" />

        <div className={mode ? "text-price-dark" : "text-price"}>
          {item.symbol}
        </div>
      </td>
      <td
        className={`${mode ? "text-white" : "text-black"} ${
          convertNumber.tradeUpDownChange(
            item.Price.change,
            2,
          ) === "text-price"
            ? mode
              ? "text-price-dark"
              : "text-price"
            : convertNumber.tradeUpDownChange(
              item.Price.change,
                2,
              )
        }`}
      >
        {
          Number(item.Price.close).toLocaleString("id-ID", {
            maximumFractionDigits: 6,
          })}
      </td>
      <td
        className={`${mode ? "text-white" : "text-black"} ${
          convertNumber.tradeUpDownChange(
            item.Price.change,
            2,
          ) === "text-price"
            ? mode
              ? "text-price-dark"
              : "text-price"
            : convertNumber.tradeUpDownChange(
              item.Price.change,
                2,
              )
        }`}
      >
        {convertNumber.tradeChange(item.Price.change, 2)}
      </td>
    </tr>
  );
  // if (Data) {
  //   return (
  //     <tr
  //       onClick={handleRowClick}
  //       className="cursor-pointer"
  //       activeClassName="active"
  //       key={index}
  //     >
  //       <td className="text-left d-flex">
  //         <img src={Data.icon} alt="logo" className="mr-2" />

  //         <div className={mode ? "text-price-dark" : "text-price"}>
  //           {Data.symbol}
  //         </div>
  //       </td>
  //       <td
  //         className={`${mode ? "text-white" : "text-black"} ${
  //           convertNumber.tradeUpDownChange(
  //             item.price_24hour.price24h_change,
  //             2,
  //           ) === "text-price"
  //             ? mode
  //               ? "text-price-dark"
  //               : "text-price"
  //             : convertNumber.tradeUpDownChange(
  //                 item.price_24hour.price24h_change,
  //                 2,
  //               )
  //         }`}
  //       >
  //         {item.price_24hour &&
  //           Number(item.price_24hour.price24h_close).toLocaleString("id-ID", {
  //             maximumFractionDigits: 6,
  //           })}
  //       </td>
  //       <td
  //         className={`${mode ? "text-white" : "text-black"} ${
  //           convertNumber.tradeUpDownChange(
  //             item.price_24hour.price24h_change,
  //             2,
  //           ) === "text-price"
  //             ? mode
  //               ? "text-price-dark"
  //               : "text-price"
  //             : convertNumber.tradeUpDownChange(
  //                 item.price_24hour.price24h_change,
  //                 2,
  //               )
  //         }`}
  //       >
  //         {convertNumber.tradeChange(item.price_24hour.price24h_change, 2)}
  //       </td>
  //     </tr>
  //   );
  // }

  // return null;
}
