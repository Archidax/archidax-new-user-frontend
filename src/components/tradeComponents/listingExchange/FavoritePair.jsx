import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";
import { convertNumber } from "../../../assets/js";

export default function FavoritePair({ listingList }) {
  const { mode } = useSelector((state) => state.daynightReducer);
  const { myFav } = useSelector((state) => state.pasarTradingReducer);
  const { email } = useSelector((state) => state?.profileReducer);

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
              {email &&
              listingList &&
              Array.isArray(listingList) &&
              listingList.length > 0 ? (
                listingList
                  .filter((item) => {
                    if (myFav.includes(item._id)) {
                      return item;
                    } else {
                      return null;
                    }
                  })
                  .map((item, index) => {
                    return <FavoritePairRealtime item={item} index={index} />;
                  })
              ) : (
                <div className="text-center p-2">No Data</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FavoritePairRealtime({ item, index }) {
  const history = useHistory();
  const [Data, setData] = React.useState(item.price_24hour);
  const { mode } = useSelector((state) => state.daynightReducer);

  const handleRowClick = () => {
    history.push(`/pasar/${item.symbol.toString().replace("/", "_")}`);
  };

  React.useEffect(() => {
    IoWebSocketTrade.on(`Prices-${item.symbol}`, (data) => {
      if (data) {
        setData(data);
      }
    });
    return () => IoWebSocketTrade.removeEventListener(`Prices-${item.symbol}`);
  }, [item, setData]);

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
            convertNumber.tradeUpDownChange(
              item.price_24hour.price24h_change,
              2,
            ) === "text-price"
              ? mode
                ? "text-price-dark"
                : "text-price"
              : convertNumber.tradeUpDownChange(
                  item.price_24hour.price24h_change,
                  2,
                )
          }`}
        >
          {Data.price24h_close
            ? convertNumber.toRupiah(Data.price24h_close)
            : 0}
        </td>
        <td
          className={`${mode ? "text-white" : "text-black"} ${
            convertNumber.tradeUpDownChange(
              item.price_24hour.price24h_change,
              2,
            ) === "text-price"
              ? mode
                ? "text-price-dark"
                : "text-price"
              : convertNumber.tradeUpDownChange(
                  item.price_24hour.price24h_change,
                  2,
                )
          }`}
        >
          {Data.price24h_change ? Data.price24h_change.toFixed(5) + "%" : "0%"}
        </td>
      </tr>
    );
  }

  return null;
}
