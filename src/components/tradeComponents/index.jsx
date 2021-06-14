import React, { useEffect } from "react";
import Price from "./Price";
import ListBuy from "./listMarket/ListBuy";
import ListSell from "./listMarket/ListSell";
import ListingExchange from "./listingExchange/ListingExchange";
import LiveMarket from "./liveMarket/LiveMarket";
import ChartTrade from "./chart/index";
import LimitMarketChat from "./limitMarket/TabsLimitMarketChat";
import PernyataanResikoTrade from "../footerComponents/pernyataanResiko/PernyataanResikoTrade";
import TabListingNewsChat from "../tradeComponents/TabListingNewsChat";

import OrderPending from "./orderPendingHistory/OrderPending";
import OrderHistory from "./orderPendingHistory/OrderHistory";

import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_RX_PAIR } from "../../stores/pasartrading/functions";
import { getMyAssets } from "../../stores/wallet/functions";
import { readMe } from "../../stores/kyc/functions";

// import ProtectedPagePasar from "./card/HalamanLoginPasar";

export default function Index() {
  let history = useHistory();
  let { symbol } = useParams();
  const dispatch = useDispatch();
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { mode } = useSelector((state) => state.daynightReducer);

  const Order = useSelector((state) => state ? state?.pasarTradingReducer : {});

  const { listingList } = useSelector((state) => state.pasarTradingReducer);

  useEffect(() => {
    if (symbol && listingList.length) {
      const dataSymbol = listingList.find(
        (data) => data.symbol === symbol.split("_").join("/").toString(),
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

  useEffect(() => {
    if (isLoginPages) {
      readMe(dispatch, history);
      getMyAssets(dispatch);
    }
  }, [isLoginPages, dispatch, history]);

  return (
    <div className={mode ? "body-trade2-dark" : "body-trade2"}>
      <div className="width-chart2" style={{ paddingBottom: "1px" }}>
        <div className="row">
          <div className="col-sm-first">
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
                minHeight: "30vh",
                background: mode ? "black" : "white",
                border: mode ? "1px solid black" : "1px solid grey",
              }}
            >
              <LiveMarket />
            </div>
          </div>
          <div className="col-sm-second">
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

            <div className="row">
              <div
                class="accordion col-12 p-0"
                id="accordionExample"
                style={{ margin: "0px 1px" }}
              >
                <div style={{ marginTop: "2px" }}>
                  <div
                    id="headingOne"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <div
                      className={
                        mode ? "bg-trade3-dark py-1" : "bg-trade3 py-1"
                      }
                    >
                      <th
                        className="collapsed text-gold font-15 mb-0"
                        style={{ padding: "2px 12px" }}
                      >
                        Order Book
                      </th>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div
                      className="row"
                      style={{ width: "100%", margin: "0px" }}
                    >
                      <div
                        className="col-6 p-0"
                        style={{
                          minHeight: "26vh",
                          background: mode ? "black" : "white",
                          border: mode ? "1px solid black" : "1px solid grey",
                        }}
                      >
                        <ListSell />
                      </div>
                      <div
                        className="col-6 p-0"
                        style={{
                          minHeight: "26vh",
                          background: mode ? "black" : "white",
                          border: mode ? "1px solid black" : "1px solid grey",
                        }}
                      >
                        <ListBuy />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "2px" }}>
                  <div
                    class=""
                    id="headingTwo"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div
                      className={
                        mode ? "bg-trade3-dark py-1" : "bg-trade3 py-1"
                      }
                    >
                      <th
                        className="collapsed text-gold font-15 mb-0"
                        style={{ padding: "2px 12px" }}
                      >
                        Order Pending ({
                          Order&&Order.OrderPending&&Array.isArray(Order.OrderPending)?Order.OrderPending.length:0
                        })
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
                <div style={{ marginTop: "2px" }}>
                  <div
                    id="headingThree"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div
                      className={
                        mode ? "bg-trade3-dark py-1" : "bg-trade3 py-1"
                      }
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
          <div className="col-sm-third p-0 mt-1">
            <div
              className="col-12 p-0"
              style={{
                minHeight: "49.8vh",
                background: mode ? "black" : "white",
                border: mode ? "1px solid black" : "1px solid grey",
              }}
            >
              {/* <Price /> */}
              {/* <ListingExchange /> */}
              <TabListingNewsChat />
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
        </div>
      </div>
    </div>
  );
}
