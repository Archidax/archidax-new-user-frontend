import React from "react";
import { useHistory } from "react-router-dom";

import { convertNumber } from "../../../assets/js";

function PriceFav({ exchange }) {
  let history = useHistory();

  function handleClick(symbol) {
    history.push(`/pasar/${symbol}`);
  }

  return (
    <div className="table-responsive">
      <table className="table ci-table-custom mb-0 table-borderless table-hover table-striped">
        <thead>
          <tr>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "8%" }}
            >
              Pasar
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "10%" }}
            >
              Nama Koin
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              Harga
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "5%" }}
            >
              24 Jam
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              High
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              Low
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              Volume (IDR)
            </th>
          </tr>
        </thead>
        {exchange && exchange instanceof Array && exchange.length > 0 ? (
          <tbody>
            {exchange.map((el, index) => {
              return (
                <tr key={index}>
                  <tp
                    className="ci-verti-align-middle text-white tp-tb d-flex"
                    onClick={() => handleClick(el.quote + "_" + el.base)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={el.price_24hour.icon} alt="icons" height={20} />
                    <div className="ml-2">{el.symbol}</div>
                  </tp>
                  <td
                    className="ci-verti-align-middle text-white"
                    onClick={() => handleClick(el.quote + "_" + el.base)}
                    style={{ cursor: "pointer" }}
                  >
                    {el.assetName}
                  </td>
                  <td className="ci-verti-align-middle text-white">
                    {el.price_24hour
                      ? Number(el.price_24hour.price24h_close < 100)
                        ? Number(el.price_24hour.price24h_close).toFixed(2)
                        : Number(el.price_24hour.price24h_close)
                            .toLocaleString("id-ID")
                            .split(",")[0]
                      : 0}{" "}
                    {el.price_24hour?.base}
                  </td>
                  <td
                    className={`ci-verti-align-middle ${
                      el.price_24hour.price24h_change < 0
                        ? "text-danger"
                        : el.price_24hour.price24h_change >= 0 &&
                          el.price_24hour.price24h_change <= 0
                        ? "text-white"
                        : "text-success"
                    } font-responsive-trade-page`}
                  >
                    {el.price_24hour
                      ? convertNumber.tradeChange(
                          el.price_24hour.price24h_change,
                        )
                      : 0}
                    %
                  </td>
                  <td className="ci-verti-align-middle text-white font-responsive-trade-page">
                    {el.price_24hour
                      ? convertNumber.toRupiah(el.price_24hour.price24h_high)
                      : 0}
                  </td>
                  <td className="ci-verti-align-middle text-white font-responsive-trade-page">
                    {el.price_24hour
                      ? convertNumber.toRupiah(el.price_24hour.price24h_low)
                      : 0}
                  </td>
                  <td className="ci-verti-align-middle text-white font-responsive-trade-page">
                    {el.price_24hour
                      ? convertNumber.toRupiah(el.price_24hour.price24h_volume)
                      : 0}
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td
                colSpan={8}
                className="text-white font-responsive-trade-page text-center mt-3 text-bold"
              >
                No Data
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default PriceFav;
