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
        className={`${
          mode ? "nav-trade-full-dark" : "nav-trade-full"
        } nav nav-pills mb-0 font-14`}
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item col-6 p-0">
          <a
            className="nav-link text-center active"
            id="Limit-tab"
            data-toggle="pill"
            href="#limit-tab"
            role="tab"
            aria-controls="limit-tab"
            aria-selected="true"
          >
            Buy
          </a>
        </li>
        <li className="nav-item col-6 p-0">
          <a
            className="nav-link text-center"
            id="market"
            data-toggle="pill"
            href="#market-tab"
            role="tab"
            aria-controls="market-tab"
            aria-selected="false"
          >
            Sell
          </a>
        </li>
        {/* <li className="nav-item col-3 p-0">
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
        </li> */}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="limit-tab"
          role="tabpanel"
          aria-labelledby="Limit-tab"
        >
          <div className="row col-12 m-0 p-0">
            <div className="col-lg-12 col-sm-12 col-xs-12 p-0">
              <div className={`${mode ? "bg-trade-dark" : "bg-trade"}`}>
                <div className="width-trade pt-2">
                  <input
                    className="ml-3 mr-2"
                    type="radio"
                    name="tabs"
                    id="tab1"
                    checked
                  />
                  <label
                    for="tab1"
                    className="mr-4 font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Limit
                  </label>

                  <input type="radio" name="tabs" id="tab2" className="mr-2" />
                  <label
                    for="tab2"
                    className="font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Market
                  </label>

                  <div class="tab content1">
                    <LimitBuy />
                  </div>
                  <div class="tab content2">
                    <MarketBuy />
                  </div>
                </div>
              </div>
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
            <div className="col-lg-12 col-sm-12 col-xs-12 p-0">
              <div className={`${mode ? "bg-trade-dark" : "bg-trade"}`}>
                {/* <div className="width-trade pt-2">
                  <input
                    className="ml-3 mr-2"
                    type="radio"
                    name="tabs"
                    id="tab3"
                    checked
                  />
                  <label
                    for="tab3"
                    className="mr-4 font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Limit
                  </label>

                  <input type="radio" name="tabs" id="tab4" className="mr-2" />
                  <label
                    for="tab4"
                    className="font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Market
                  </label>

                  <div class="tab2 content3">
                    <LimitBuy />
                  </div>
                  <div class="tab2 content4">
                    <MarketBuy />
                  </div>
                </div> */}
              </div>
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
