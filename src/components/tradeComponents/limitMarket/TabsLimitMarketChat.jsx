import React from "react";
import Chat from "../chat/Chat";
import LimitBuy from "./LimitBuy";
import LimitSell from "./LimitSell";
import MarketBuy from "./MarketBuy";
import MarketSell from "./MarketSell";
import { useSelector } from "react-redux";
export default function TabsLimitMarketChat() {
  const { mode } = useSelector((state) => state.daynightReducer);
  return (
    <div className={mode ? "tabs-global-dark" : "tabs-global"}>
      <ul
        className=
        {`${
          mode ? "nav-trade-full-dark" : "nav-trade-full"
        } nav nav-pills mb-0 font-14`}
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item col-3 p-0">
          <a
            className="nav-link text-center active"
            id="Limit-tab"
            data-toggle="pill"
            href="#limit-tab"
            role="tab"
            aria-controls="limit-tab"
            aria-selected="true"
          >
            Limit
          </a>
        </li>
        <li className="nav-item col-3 p-0">
          <a
            className="nav-link text-center"
            id="market"
            data-toggle="pill"
            href="#market-tab"
            role="tab"
            aria-controls="market-tab"
            aria-selected="false"
          >
            Market
          </a>
        </li>
        <li className="nav-item col-3 p-0">
          <a
            className="nav-link text-center"
            id="chat"
            data-toggle="pill"
            href="#chat-tabt"
            role="tab"
            aria-controls="chat-tabt"
            aria-selected="false"
          >
            Chat
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="limit-tab"
          role="tabpanel"
          aria-labelledby="Limit-tab"
        >
          <div className="row col-12 m-0 p-0">
            <div className="col-lg-6 col-sm-12 col-xs-12 p-0">
              <LimitBuy />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 p-0">
              <LimitSell />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="market-tab"
          role="tabpanel"
          aria-labelledby="market"
        >
          <div className="row col-12 m-0 p-0">
            <div className="col-lg-6 col-sm-12 col-xs-12 p-0">
              <MarketBuy />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 p-0">
              <MarketSell />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="chat-tabt"
          role="tabpanel"
          aria-labelledby="chat"
        >
          <div className="col-12 p-0">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
