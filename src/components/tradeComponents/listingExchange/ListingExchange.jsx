import React from "react";
import CryptoPair from "./CryptoPair";
import FavoritePair from "./FavoritePair";
import FiatPair from "./FiatPair";
import star from "../../../assets/img/trade/star.png";
import { useSelector } from "react-redux";

export default function ListingExchange() {
  const { mode } = useSelector((state) => state.daynightReducer);

  const { listingList } = useSelector((state) =>
    state ? state.pasarTradingReducer : {},
  );

  return (
    <div className={mode ? "tabs-global-dark" : "tabs-global"}>
      <div className="col-12 col-md-12 p-0">
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
              href="#pills-favs2"
              role="tab"
              aria-controls="pills-favs2"
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
              href="#pills-idrs2"
              role="tab"
              aria-controls="pills-idrs2"
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
              href="#pills-usdts2"
              role="tab"
              aria-controls="pills-usdts2"
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
            id="pills-favs2"
            role="tabpanel"
            aria-labelledby="favorite-tabs"
          >
            <FavoritePair listingList={listingList} />
          </div>
          <div
            className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade show active"
            id="pills-idrs2"
            role="tabpanel"
            aria-labelledby="crypto-pairs"
          >
            <CryptoPair listingList={listingList} />
          </div>
          <div
            className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade"
            id="pills-usdts2"
            role="tabpanel"
            aria-labelledby="fiat-pairs"
          >
            <FiatPair listingList={listingList} />
          </div>
        </div>
      </div>
    </div>
  );
}
