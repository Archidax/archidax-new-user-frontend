import React from "react";
import { useHistory } from "react-router-dom";
import { setMyFav } from "../../../stores/pasartrading/functions";
import { useSelector, useDispatch } from "react-redux";

import { convertNumber } from "../../../assets/js";
import Translate from "../../../i18n/Translate";

function PriceIDR({ exchange }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const { myFav } = useSelector((state) => state?.pasarTradingReducer);
  const { email } = useSelector((state) => state?.profileReducer);

  function addFav(key) {
    let data = JSON.parse(localStorage.getItem("myFav")) || {};
    if (Object.keys(data).includes(email)) {
      if (!data[email].includes(key)) {
        data[email].push(key);
      }
    } else {
      data[email] = [key];
    }
    dispatch(setMyFav(data[email]));
    localStorage.setItem("myFav", JSON.stringify(data));
  }

  function removeFav(key) {
    let data = JSON.parse(localStorage.getItem("myFav")) || {};
    if (Object.keys(data).includes(email)) {
      if (data[email].includes(key)) {
        data[email] = data[email].filter((el) => el !== key);
      }
    }
    dispatch(setMyFav(data[email]));
    localStorage.setItem("myFav", JSON.stringify(data));
  }

  function handleClick(symbol) {
    history.push(`/pasar/${symbol}`);
  }

  return (
    <div className="table-responsive">
      <table className="table ci-table-custom mb-0 table-borderless table-hover table-striped">
        <thead>
          <tr>
            {email && (
              <th
                className="ci-tableHeads-custom text-white text-left"
                style={{ width: "3%" }}
              >
                Fav
              </th>
            )}
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "8%" }}
            >
              {Translate('db_pasar_pasar')}
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "10%" }}
            >
              {Translate('db_pasar_nama_koin')}
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              {Translate('db_pasar_harga')}
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "5%" }}
            >
              {Translate('mk_24jam')}
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              {Translate('mk_high')}
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              {Translate('mk_low')}
            </th>
            <th
              className="ci-tableHeads-custom text-white text-left"
              style={{ width: "12%" }}
            >
              {Translate('mk_volume')} (BTC)
            </th>
          </tr>
        </thead>
        {exchange && Array.isArray(exchange) && exchange.length > 0 ? (
          <tbody>
            {exchange.map((el, index) => {
              return (
                <tr key={index}>
                  {email && (
                    <td className="ci-verti-align-middle text-white text-left">
                      <div>
                        {!myFav.includes(el._id) && (
                          <div
                            onClick={() => addFav(el._id)}
                            className="fav-icon-before"
                          ></div>
                        )}
                        {myFav.includes(el._id) && (
                          <div
                            onClick={() => removeFav(el._id)}
                            style={{ cursor: "pointer" }}
                            className="fav-icon-after"
                          ></div>
                        )}
                      </div>
                    </td>
                  )}
                  {/* <td className="ci-verti-align-middle text-white text-left">
                    {index+1}
                  </td> */}
                  <tp
                    className="ci-verti-align-middle text-white tp-tb d-flex"
                    onClick={() => handleClick(el.symbol.toString().replace("/", "_"))}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={el.price_24hour.icon}
                      alt="iconLogo"
                      height={20}
                    />
                    <div className="ml-2">{el.symbol}</div>
                  </tp>
                  <td
                    className="ci-verti-align-middle text-white font-responsive-trade-page"
                    onClick={() => handleClick(el.symbol.toString().replace("/", "_"))}
                    style={{ cursor: "pointer" }}
                  >
                    {el.assetName ? el.assetName : "-"}
                  </td>
                  <td className="ci-verti-align-middle text-white font-responsive-trade-page">
                    {el.price_24hour
                      ? convertNumber.toRupiah(el.price_24hour.price24h_close)
                      : 0}
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
                      ? Number(el.price_24hour.price24h_change).toFixed(2)
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
              <td colSpan={7}>{Translate('db_data_tidak_ditemukan')}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default PriceIDR;
