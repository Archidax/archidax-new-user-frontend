import React from "react";
import Price from "./Price";
import ListBuy from "./listMarket/ListBuy";
import ListSell from "./listMarket/ListSell";
import ListingExchange from "./listingExchange/ListingExchange";
import LiveMarket from "./liveMarket/LiveMarket";
import ChartTrade from "./chart/index";
import LimitMarketChat from "./limitMarket/TabsLimitMarketChat";
import PernyataanResikoTrade from "../footerComponents/pernyataanResiko/PernyataanResikoTrade";

import OrderPending from "./orderPendingHistory/OrderPending";
import OrderHistory from "./orderPendingHistory/OrderHistory";

import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_RX_PAIR } from "../../stores/pasartrading/functions";
import { getMyAssets } from "../../stores/wallet/functions";
import { readMe } from "../../stores/kyc/functions";

import ProtectedPagePasar from "./card/HalamanLoginPasar";

export default function Index() {
  let history = useHistory();
  let { symbol } = useParams();
  const dispatch = useDispatch();
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { mode } = useSelector((state) => state.daynightReducer);

  const { listingList } = useSelector((state) => state.pasarTradingReducer);

  React.useEffect(() => {
    if (symbol && listingList.length) {
      const dataSymbol = listingList.find(
        (data) => data.symbol === symbol.toString(),
      );
      
      if (dataSymbol) {
        let symbolFrom = dataSymbol.symbol.split("/")[0];
        let symbolTo = dataSymbol.symbol.split("/")[1];
        dispatch(
          SET_RX_PAIR({
            currencyFrom: symbolFrom,
            currencyTo: symbolTo,
            pairFrom: symbolFrom,
            pairTo: symbolTo,
            icon: dataSymbol.icon,
          }),
        );
      }

    }
  }, [symbol, dispatch, listingList]);

  React.useEffect(() => {
    if (isLoginPages) {
      getMyAssets(dispatch);
      readMe(dispatch, history);
    }
  }, [isLoginPages, dispatch, history]);

  return (
    <div className={mode ? "body-trade2-dark" : "body-trade2"}>
      {/* <div> */}
      <div className="width-chart2">
        <div className="row">
          <div className="col-3 p-0">
            <div
              className="col-12 p-0"
              style={{
                minHeight: "50vh",
                background: mode ? "black" : "white",
                border: mode ? "1px solid black" : "1px solid grey",
              }}
            >
              <Price />
            </div>
            <div
              className="col-12 p-0"
              style={{
                minHeight: "43.8vh",
                background: mode ? "black" : "white",
                border: mode ? "1px solid black" : "1px solid grey",
              }}
            >
              <LimitMarketChat />
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div
                className="col-12 p-0"
                style={{
                  minHeight: "53vh",
                  background: mode ? "black" : "white",
                  border: mode ? "1px solid black" : "1px solid grey",
                }}
              >
                <ChartTrade />
              </div>
            </div>
            <div className="row mt-1">
              <div
                className="col-4 p-0"
                style={{
                  minHeight: "32vh",
                  background: mode ? "black" : "white",
                  border: mode ? "1px solid black" : "1px solid grey",
                }}
              >
                <ListSell />
              </div>
              <div
                className="col-4 p-0"
                style={{
                  minHeight: "32vh",
                  background: mode ? "black" : "white",
                  border: mode ? "1px solid black" : "1px solid grey",
                }}
              >
                <ListBuy />
              </div>
              <div
                className="col-4 p-0"
                style={{
                  minHeight: "32vh",
                  background: mode ? "black" : "white",
                  border: mode ? "1px solid black" : "1px solid grey",
                }}
              >
                <LiveMarket />
              </div>
            </div>
            <div className="row">
              <div
                class="accordion col-12 p-0"
                id="accordionExample"
                style={{ margin: "2px 1px" }}
              >
                <div
                  class=""
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div class="" id="headingTwo">
                    <div
                      className="py-1"
                      style={{ background: mode ? "#232323" : "#00688f" }}
                    >
                      <th
                        className="collapsed text-gold font-15 mb-0"
                        style={{ padding: "2px 12px" }}
                      >
                        Order Pending
                      </th>
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <OrderPending />
                  </div>
                </div>
                <div
                  class=""
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ marginTop: "2px" }}
                >
                  <div class="" id="headingThree">
                    <div
                      className="py-1"
                      style={{ background: mode ? "#232323" : "#00688f" }}
                    >
                      <th
                        className="collapsed text-gold font-15 mb-0"
                        style={{ padding: "2px 12px" }}
                      >
                        Order History
                      </th>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <OrderHistory />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="width-chart">
        <div className="row">
          <div className="col-12 p-0">
            <Price />
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-lg-7 col-xs-12 col-sm-12">
            <div className="row">
              <div
                className={`col-12 p-1 ${
                  mode ? "dummy-card-dark" : "dummy-card"
                } mt-2-trade`}
              >
                <div
                  className={`${mode ? "dummy-card-dark" : "dummy-card3"}`}
                  style={{ height: "449px" }}
                >
                  <ChartTrade />
                </div>
              </div>
              <div
                className={`col-lg-6 col-sm-12 col-xs-12 p-1 ${
                  mode ? "dummy-card-dark" : "dummy-card"
                } mt-2-trade`}
              >
                <div style={{ height: "30px" }}>
                  <h6
                    className={`mb-0 ${mode ? "text-gold" : "text-black"} px-3`}
                  >
                    Market Sell
                  </h6>
                </div>
                <div
                  className={mode ? "dummy-card2-dark" : "dummy-card3"}
                  style={{ height: "310px" }}
                >
                  <ListSell />
                </div>
              </div>
              <div
                className={`col-lg-6 col-sm-12 col-xs-12 p-1 ${
                  mode ? "dummy-card-dark" : "dummy-card"
                } mt-2-trade`}
              >
                <div style={{ height: "30px" }}>
                  <h6
                    className={`mb-0 ${mode ? "text-gold" : "text-black"} px-3`}
                  >
                    Market Buy
                  </h6>
                </div>
                <div
                  className={mode ? "dummy-card2-dark" : "dummy-card3"}
                  style={{ height: "310px" }}
                >
                  <ListBuy />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xs-12 col-sm-12">
            <div className="row">
              <div
                className={`col-lg-6 col-sm-12 col-xs-12 p-1 ${
                  mode ? "dummy-card-dark" : "dummy-card"
                } mt-2-trade`}
              >
                <div className={mode ? "dummy-card2-dark" : "dummy-card2"}>
                  <ListingExchange />
                </div>
              </div>
              <div
                className={`col-lg-6 col-sm-12 col-xs-12 p-1 ${
                  mode ? "dummy-card-dark" : "dummy-card"
                } mt-2-trade`}
              >
                <div className={mode ? "dummy-card2-dark" : "dummy-card3"}>
                  <LiveMarket />
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className={`col-12 p-1 ${
                  mode ? "dummy-card-dark" : "dummy-card"
                } mt-2-trade`}
              >
                <div
                  className={`${
                    mode ? "dummy-card2-dark" : "dummy-card3"
                  } height-limit-chat`}
                >
                  <LimitMarketChat />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProtectedPagePasar>
          <div className="row">
            <div className="col-12 p-1">
              <h6 className={`${mode ? "text-gold" : "text-black"} px-3 mb-0`}>
                Order Pending
              </h6>
              <OrderPending />
            </div>
          </div>
          <div className="row mt-1 mb-2">
            <div className="col-12 p-1">
              <h6 className={`${mode ? "text-gold" : "text-black"} px-3`}>
                Order History
              </h6>
              <OrderHistory />
            </div>
          </div>
        </ProtectedPagePasar>
      </div>
      <div>
        <PernyataanResikoTrade />
      </div> */}
    </div>
  );
}
