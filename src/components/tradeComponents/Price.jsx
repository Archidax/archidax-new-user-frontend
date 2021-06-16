import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoWebSocketTrade } from "../../configuration/IoWebSocket";
import ReactLoading from "react-loading";
import { convertNumber } from "../../assets/js";

import {
  GetOrderLastPrice,
  GetListingExchange,
} from "../../stores/pasartrading/functions";

// Import Images
import logocoin from "../../assets/img/iconsCoin/BitcoinCoin.png";
import star from "../../assets/img/trade/star.png";
import FavoritePair from "./listingExchange/FavoritePair";
import CryptoPair from "./listingExchange/CryptoPair";
import FiatPair from "./listingExchange/FiatPair";
import DayNight from "./daynight/DayNight";
import arrowup from "../../assets/img/trade/arrow_atas.svg";
import arrowdown from "../../assets/img/trade/arrow_bawah.svg";

import TabsChartTrade from "./TabsChartTrade";

export default function Price() {
  const { mode } = useSelector((state) => state.daynightReducer);
  const [showDropdown, setShowDropdown] = React.useState("d-none");
  const dispatch = useDispatch();
  const handleShowDropdown = (props) => {
    props === "d-none" ? setShowDropdown("d-block") : setShowDropdown("d-none");
  };

  const { PairSymbol, icon, price24H, listingList } = useSelector((state) =>
    state ? state.pasarTradingReducer : {},
  );

  React.useEffect(() => {
    GetListingExchange(dispatch);
  }, []);

  React.useEffect(() => {
    if (PairSymbol) {
      dispatch(GetOrderLastPrice({ pair: PairSymbol }));
    }
  }, [PairSymbol]);

  return (
    <div
      className={`${mode ? "bg-trade2-dark" : "bg-trade2"} ptb-2-trade mt-1`}
      style={{ maxHeight: "49vh" }}
    >
      <div className="px-3">
        <div className="pt-3" style={{ display: "flex", flexDirection: "row" }}>
          {/* dropdown price */}
          <div class="ci-dropdown list-coin-responsive">
            <button
              className="ci-dropdown-btn ci-dropdown-btn-TradeSymbol py-2 ci-md w-100"
              type="button"
              style={{
                overflow: "hidden",
                background: mode ? "#232323" : "#00688f",
              }}
              onClick={() => handleShowDropdown(showDropdown)}
            >
              {PairSymbol ? (
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-left mr-2 d-flex align-items-center">
                    <img
                      src={icon}
                      alt="icon"
                      width="33px"
                      height="40px"
                      className="mr-2"
                    />
                    <p
                      className="mb-0 font-22"
                      style={{
                        color: mode ? "white" : "white",
                        fontWeight: mode ? 600 : 600,
                      }}
                    >
                      {PairSymbol ? PairSymbol : "-"}
                    </p>
                  </div>
                  <div className="icons">
                    <i className="fas fa-sort-down d-flex justify-content-center"></i>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-left mr-2 d-flex align-items-center">
                    <ReactLoading
                      type={"spin"}
                      color={"#ffffff"}
                      height={"40px"}
                      width={"33px"}
                    />
                  </div>
                </div>
              )}
            </button>
            <div
              className={`ci-dropdown-menu-TradeSymbol ${showDropdown} pt-0`}
              style={{
                position: "absolute",
                zIndex: "999",
                borderRadius: "6px",
              }}
            >
              <div className="w-100">
                <div
                  className={mode ? "row tabs-global-dark" : "row tabs-global"}
                >
                  <div className="col-12 col-md-12">
                    <ul
                      className="nav nav-pills mb-0 font-14"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item col-4 p-0">
                        <a
                          className="nav-link text-center"
                          id="favorite-tabs"
                          data-toggle="pill"
                          href="#pills-favs"
                          role="tab"
                          aria-controls="pills-favs"
                          aria-selected="true"
                          style={{ borderRadius: "6px 0px 0px 0px" }}
                        >
                          <img src={star} alt="star" />
                        </a>
                      </li>
                      <li className="nav-item col-4 p-0">
                        <a
                          className="nav-link text-center active"
                          id="crypto-pair"
                          data-toggle="pill"
                          href="#pills-idrs"
                          role="tab"
                          aria-controls="pills-idrs"
                          aria-selected="false"
                        >
                          BTC
                        </a>
                      </li>
                      <li className="nav-item col-4 p-0">
                        <a
                          className="nav-link text-center"
                          id="fiat-pairs"
                          data-toggle="pill"
                          href="#pills-usdts"
                          role="tab"
                          aria-controls="pills-usdts"
                          aria-selected="false"
                          style={{ borderRadius: "0px 6px 0px 0px" }}
                        >
                          USDT
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade"
                        id="pills-favs"
                        role="tabpanel"
                        aria-labelledby="favorite-tabs"
                      >
                        <FavoritePair listingList={listingList} />
                      </div>
                      <div
                        className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade show active"
                        id="pills-idrs"
                        role="tabpanel"
                        aria-labelledby="crypto-pairs"
                      >
                        <CryptoPair listingList={listingList} />
                      </div>
                      <div
                        className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade"
                        id="pills-usdts"
                        role="tabpanel"
                        aria-labelledby="fiat-pairs"
                      >
                        <FiatPair listingList={listingList} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {PairSymbol && (
          <div className="p-2 mt-2">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Price */}
              <div style={{ display: "flex", marginTop: "11px" }}>
                <div
                  className={`${
                    mode ? "text-price-bottom-dark" : "text-price-bottom"
                  } font-22 `}
                >
                  {PairSymbol ? PairSymbol : null}
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  className={`${
                    mode ? "text-price-bottom-dark" : "text-price-bottom"
                  } font-32`}
                >
                  {price24H ? convertNumber.toRupiah(price24H.Close,"CRYPTO") : 0}
                </div>
                <div
                  className={`${
                    mode ? "text-white" : "text-black"
                  } font-16 ml-1 ${convertNumber.tradeUpDownChange(
                    price24H.Change,
                  )}`}
                  style={{ marginTop: "18px" }}
                >
                  {price24H
                    ? convertNumber.tradeChange(price24H.Change)
                    : 0 + "%"}
                </div>
                {price24H && Number(price24H.Change).toFixed(2) > 0 ? (
                  <img
                    src={arrowup}
                    style={{
                      width: "18px",
                      marginTop: "9px",
                      marginLeft: "7px",
                    }}
                  />
                ) : (
                  Number(price24H.Change).toFixed(2) < 0 && (
                    <img
                      src={arrowdown}
                      style={{
                        width: "18px",
                        marginTop: "9px",
                        marginLeft: "7px",
                      }}
                    />
                  )
                )}
              </div>
            </div>

            <div
              className="mt-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className=""
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className={`${
                    mode ? "text-price-top-dark" : "text-price-top"
                  } font-15 mr-2`}
                >
                  Volume{" "}
                  {PairSymbol ? PairSymbol.toString().split("/")[1] : null} :
                </div>
                {/* Volume IDR */}
                <div
                  className={`${
                    mode ? "text-price-bottom-dark" : "text-price-bottom"
                  } font-15`}
                >
                  {price24H ? convertNumber.toRupiah(price24H.Volume) : 0}
                  {/* 30.652.175.748 */}
                </div>
              </div>
              {/* High */}
              <div
                className=""
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className={`${
                    mode ? "text-price-top-dark" : "text-price-top"
                  } font-15 mr-2`}
                >
                  High :
                </div>
                <div
                  className={`${
                    mode ? "text-price-bottom-dark" : "text-price-bottom"
                  } font-15`}
                >
                  {price24H ? convertNumber.toRupiah(price24H.High) : 0}
                </div>
              </div>
            </div>

            <div
              className="mt-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* Volume BTC */}
              <div
                className=""
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className={`${
                    mode ? "text-price-top-dark" : "text-price-top"
                  } font-15 mr-2`}
                >
                  Volume{" "}
                  {PairSymbol ? PairSymbol.toString().split("/")[0] : null} :
                </div>
                <div
                  className={`${
                    mode ? "text-price-bottom-dark" : "text-price-bottom"
                  } font-15 `}
                >
                  {price24H ? convertNumber.toRupiah(price24H.VolumeCrypto) : 0}
                </div>
              </div>
              {/* Low */}
              <div
                className=""
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className={`${
                    mode ? "text-price-top-dark" : "text-price-top"
                  } font-15 mr-2`}
                >
                  Low :
                </div>
                <div
                  className={`${
                    mode ? "text-price-bottom-dark" : "text-price-bottom"
                  } font-15`}
                >
                  {price24H ? convertNumber.toRupiah(price24H.Low) : 0}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <TabsChartTrade />
      </div>

      {/* <div className="row m-0">
        <div className="col-lg-11">
          <div className="row">
            <div
              className="col-lg-2 col-sm-12 col-xs-12 p-0"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            ></div>
            <div className="col-lg-9 row" style={{ overflowX: "auto" }}>
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="padding-price-responsive"
              >
                <div className="price-trade-responsive">
                  <div
                    className={mode ? "text-price-top-dark" : "text-price-top"}
                  >
                    Last Price
                  </div>
                  <div
                    className={`${
                      mode ? "text-price-bottom-dark" : "text-price-bottom"
                    } font-13`}
                  >
                    {price24H ? convertNumber.toRupiah(price24H.Close) : 0}
                  </div>
                </div>
                <div className="price-trade-responsive">
                  <div
                    className={mode ? "text-price-top-dark" : "text-price-top"}
                  >
                    Change
                  </div>
                  <div
                    className={`${
                      mode ? "text-white" : "text-black"
                    } font-13 ${convertNumber.tradeUpDownChange(
                      price24H.Change,
                    )}`}
                  >
                    {price24H
                      ? convertNumber.tradeChange(price24H.Change)
                      : 0 + "%"}
                  </div>
                </div>
                <div className="price-trade-responsive">
                  <div
                    className={mode ? "text-price-top-dark" : "text-price-top"}
                  >
                    High
                  </div>
                  <div
                    className={`${
                      mode ? "text-price-bottom-dark" : "text-price-bottom"
                    } font-13`}
                  >
                    {price24H ? convertNumber.toRupiah(price24H.High) : 0}
                  </div>
                </div>
                <div className="price-trade-responsive">
                  <div
                    className={mode ? "text-price-top-dark" : "text-price-top"}
                  >
                    Low
                  </div>
                  <div
                    className={`${
                      mode ? "text-price-bottom-dark" : "text-price-bottom"
                    } font-13`}
                  >
                    {price24H ? convertNumber.toRupiah(price24H.Low) : 0}
                  </div>
                </div>
                <div className="price-trade-responsive">
                  <div
                    className={mode ? "text-price-top-dark" : "text-price-top"}
                  >
                    Volume{" "}
                    {PairSymbol ? PairSymbol.toString().split("/")[1] : null}
                  </div>
                  <div
                    className={`${
                      mode ? "text-price-bottom-dark" : "text-price-bottom"
                    } font-13`}
                  >
                    {price24H ? convertNumber.toRupiah(price24H.Volume) : 0}
                  </div>
                </div>
                <div className="price-trade-responsive">
                  <div
                    className={mode ? "text-price-top-dark" : "text-price-top"}
                  >
                    Volume{" "}
                    {PairSymbol ? PairSymbol.toString().split("/")[0] : null}
                  </div>
                  <div
                    className={`${
                      mode ? "text-price-bottom-dark" : "text-price-bottom"
                    } font-13`}
                  >
                    {price24H
                      ? convertNumber.toRupiah(price24H.VolumeCrypto)
                      : 0}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-1 "
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="row">
            <div className="col-3"></div>
            <div className="col-5 day-night-responsive"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
