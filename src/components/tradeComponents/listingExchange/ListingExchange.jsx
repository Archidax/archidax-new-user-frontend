import React from "react";
import CryptoPair from "./CryptoPair";
import FavoritePair from "./FavoritePair";
import FiatPair from "./FiatPair";
import star from "../../../assets/img/trade/star.png";

import { useDispatch, useSelector } from "react-redux";
import { GetListingExchange } from "../../../stores/pasartrading/functions";

export default function ListingExchange() {
  const { mode } = useSelector((state) => state.daynightReducer);
  const Dispatch = useDispatch();

  React.useEffect(() => {
    Dispatch(GetListingExchange());
  }, [Dispatch]);

  return (
    <div className={mode ? "tabs-global-dark" : "tabs-global"}>
      <ul
        className="nav nav-pills mb-0 font-14"
        id="pills-tab"
        role="tablist"
        style={{ background: "#000000" }}
      >
        <li className="nav-item col-4 p-0">
          <a
            className="nav-link text-center"
            id="favorite-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <img src={star} alt="star" />
          </a>
        </li>
        {/* <li className="nav-item col-4 p-0">
          <a
            className="nav-link text-center active"
            id="crypto-pair"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            IDR
          </a>
        </li> */}
        <li className="nav-item col-4 p-0">
          <a
            className="nav-link text-center active"
            id="fiat-pair"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            USDT
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="favorite-tab"
        >
          <FavoritePair />
        </div>
        {/* <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="crypto-pair"
        >
          <CryptoPair />
        </div> */}
        <div
          className="tab-pane fade show active"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="fiat-pair"
        >
          <FiatPair />
        </div>
      </div>
    </div>
  );
}
