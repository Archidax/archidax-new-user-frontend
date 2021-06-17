import React from "react";
import Chat from "../chat/Chat";
import LimitBuy from "./LimitBuy";
import LimitSell from "./LimitSell";
import MarketBuy from "./MarketBuy";
import MarketSell from "./MarketSell";
import { useSelector } from "react-redux";

import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";

export default function TabsLimitMarketChat() {
  const [BalancePair, setBalancePair] = React.useState({
    pairFrom: 0,
    pairTo: 0,
  });

  const { mode } = useSelector((state) => state.daynightReducer);
  const { pairTo, pairFrom } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );
  const { assets } = useSelector((state) => state?.walletReducer);
  const { username } = useSelector((state) =>
    state ? (state.profileReducer ? state.profileReducer : {}) : {},
  );

  React.useEffect(() => {
    if (assets && Array.isArray(assets)) {
      let tempPairFrom = assets.find((item) => item.type === pairFrom);
      let tempPairTo = assets.find((item) => item.type === pairTo);
      if (tempPairFrom && tempPairTo) {
        setBalancePair({
          pairFrom: tempPairTo.balance,
          pairTo: tempPairFrom.balance,
        });
      }
    }
  }, [assets, setBalancePair, pairFrom, pairTo]);

  React.useEffect(() => {
    if (IoWebSocketTrade && username) {
      IoWebSocketTrade.on(
        `WalletBalance-${username}`,
        (baseBalance, quoteBalance) => {
          if ((baseBalance, quoteBalance)) {
            setBalancePair({
              pairFrom: baseBalance.balance,
              pairTo: quoteBalance.balance,
            });
          }
        },
      );
      return () => {
        IoWebSocketTrade.removeEventListener(`WalletBalance-${username}`);
      };
    }
  }, [pairFrom, pairTo, username, setBalancePair]);

  return (
    <div className={mode ? "tabs-global-dark2-buy-sell" : "tabs-global"}>
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
                    name="tabbuy"
                    id="tabbuy1"
                    checked
                  />
                  <label
                    for="tabbuy1"
                    className="mr-4 font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Limit
                  </label>
                  <input
                    type="radio"
                    name="tabbuy"
                    id="tabbuy2"
                    className="mr-2"
                  />
                  <label
                    for="tabbuy2"
                    className="font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Market
                  </label>
                  <div class="tabbuy content1">
                    <LimitBuy balanceAsset={BalancePair.pairFrom} />
                  </div>
                  <div class="tabbuy content2">
                    <MarketBuy balanceAsset={BalancePair.pairFrom} />
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
                <div className="width-trade pt-2">
                  <input
                    className="ml-3 mr-2"
                    type="radio"
                    name="tabsell"
                    id="tabsell1"
                    checked
                  />
                  <label
                    for="tabsell1"
                    className="mr-4 font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Limit
                  </label>

                  <input
                    type="radio"
                    name="tabsell"
                    id="tabsell2"
                    className="mr-2"
                  />
                  <label
                    for="tabsell2"
                    className="font-13"
                    style={{ color: mode ? "white" : "black" }}
                  >
                    Market
                  </label>

                  <div class="tabsell content1">
                    <LimitSell balanceAsset={BalancePair.pairTo} />
                  </div>
                  <div class="tabsell content2">
                    <MarketSell balanceAsset={BalancePair.pairTo} />
                  </div>
                </div>
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
