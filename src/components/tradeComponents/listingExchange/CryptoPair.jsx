import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";

import { convertNumber } from "../../../assets/js";
import { setPasarTrading } from "../../../stores/pasartrading/functions";

export default function CryptoPair({ listingList }) {
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
                <th className="text-left">Change</th>
              </tr>
            </thead>
            <tbody>
              {listingList.map((val, index) => {
                if (val.base === "BTC") {
                  return <CryptoPairRealtime item={val} index={index} />;
                }
              })}
            </tbody>
            {/* <tbody>
              {listingList && Array.isArray(listingList) && listingList.length > 0 ? (
                listingList.filter((item) => {
                  if (Data.base.toString().toUpperCase() === "BTC") {
                    return item;
                  } else {
                    return null;
                  }
                }).map((item, index) => {
                  return <CryptoPairRealtime item={item} index={index} />;
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

function CryptoPairRealtime({ item, index }) {
  const { mode } = useSelector((state) => state.daynightReducer);
  const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);
  const dispatch = useDispatch();

  const history = useHistory();
  const [Data, setData] = React.useState(item.price_24hour);

  const handleRowClick = () => {
    history.push(`/pasar/${Data.symbol.toString().replace("/", "_")}`);
  };
  React.useEffect(() => {
    if(PairSymbol) {
      IoWebSocketTrade.removeEventListener(`Prices-${Data.symbol}`);
      IoWebSocketTrade.on(`Prices-${Data.symbol}`, (data) => {
        if (data) {
          setData(data);
        }
        if (PairSymbol === data.symbol) {
          dispatch(
            setPasarTrading({
              Open: data.price24h_open,
              High: data.price24h_high,
              Low: data.price24h_low,
              Close: data.price24h_close,
              Change: data.price24h_change,
              Volume: data.price24h_priceVolume,
              VolumeCrypto: data.price24h_volume,
            }),
          );
        }
      });
      return () => {IoWebSocketTrade.removeEventListener(`Prices-${Data.symbol}`);}
    }
  }, [item,PairSymbol]);
  
  if (Data) {
    return (
      <tr
        onClick={handleRowClick}
        className="cursor-pointer"
        activeClassName="active"
        key={index}
      >
        <td className="text-left d-flex">
          <img src={Data.icon} alt="logo" className="mr-2" />

          <div className={mode ? "text-price-dark" : "text-price"}>
            {Data.symbol}
          </div>
        </td>
        <td
          className={`${mode ? "text-white" : "text-black"} ${
            convertNumber.tradeUpDownChange(Data.price24h_change, 2) ===
            "text-price"
              ? mode
                ? "text-price-dark"
                : "text-price"
              : convertNumber.tradeUpDownChange(Data.price24h_change, 2)
          }`}
        >
          {Data &&
            Number(Data.price24h_close).toLocaleString("id-ID", {
              maximumFractionDigits: 6,
            })}
        </td>
        <td
          className={`${mode ? "text-white" : "text-black"} ${
            convertNumber.tradeUpDownChange(Data.price24h_change, 2) ===
            "text-price"
              ? mode
                ? "text-price-dark"
                : "text-price"
              : convertNumber.tradeUpDownChange(Data.price24h_change, 2)
          }`}
        >
          {convertNumber.tradeChange(Data.price24h_change, 2)}
        </td>
      </tr>
    );
  }

  return null;
}
