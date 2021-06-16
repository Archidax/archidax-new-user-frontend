import React from "react";
import ListingExchange from "./listingExchange/ListingExchange";

import { useSelector, useDispatch } from "react-redux";
import Chat from "./chat/Chat";
import NewsTrade from "../homepageComponents/components/infonews/tab/NewsTrade";
import LiveMarket from "./liveMarket/LiveMarket";
import LiveMarketBuy from "./liveMarket/LiveMarketBuy";
import LiveMarketSell from "./liveMarket/LiveMarketSell";

export default function TabLiveMarket() {
  const { mode } = useSelector((state) => state.daynightReducer);

  const { PairSymbol, icon, price24H, listingList } = useSelector((state) =>
    state ? state.pasarTradingReducer : {},
  );

  return (
    <div className={mode ? "tabs-global-dark" : "tabs-global"}>
      <div className="col-12 col-md-12 p-0">
        <div
          className={mode ? "bg-trade3-dark" : "bg-trade3"}
          style={{ padding: "0px" }}
        >
          <div className="tabs-global-dark2">
            <ul
              class="nav nav-pills mx-2"
              id="pills-tab"
              role="tablist"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <li class="nav-item px-0 mx-2">
                <a
                  class="nav-link p-0 m-0"
                  role="tab"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <th className="text-gold font-14 mb-0">Live Market</th>
                </a>
              </li>
              <li class="nav-item px-0 mx-2">
                <a
                  class="nav-link active p-0 m-0"
                  id="pills-combine-tab"
                  data-toggle="pill"
                  href="#pills-combine"
                  role="tab"
                  aria-controls="pills-buy-market"
                  aria-selected="false"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "absolute",
                    right: "75px",
                  }}
                >
                  <i
                    class="fa fa-bar-chart text-gold mx-1"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li class="nav-item px-0 mx-2">
                <a
                  class="nav-link p-0 m-0"
                  id="pills-buy-market-tab"
                  data-toggle="pill"
                  href="#pills-buy-market"
                  role="tab"
                  aria-controls="pills-buy-market"
                  aria-selected="false"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "absolute",
                    right: "45px",
                  }}
                >
                  <i
                    class="fa fa-bar-chart text-success mx-1"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li class="nav-item px-0 mx-2">
                <a
                  class="nav-link p-0 m-0"
                  id="pills-sell-market-tab"
                  data-toggle="pill"
                  href="#pills-sell-market"
                  role="tab"
                  aria-controls="pills-sell-market"
                  aria-selected="false"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <i
                    class="fa fa-bar-chart text-danger mx-1"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-combine"
            role="tabpanel"
            aria-labelledby="pills-combine-tab"
          >
            <LiveMarket />
          </div>
          <div
            class="tab-pane fade"
            id="pills-buy-market"
            role="tabpanel"
            aria-labelledby="pills-buy-market-tab"
          >
            <LiveMarketBuy />
          </div>
          <div
            class="tab-pane fade"
            id="pills-sell-market"
            role="tabpanel"
            aria-labelledby="pills-sell-market-tab"
          >
            <LiveMarketSell />
          </div>
        </div>
      </div>
    </div>
  );
}
