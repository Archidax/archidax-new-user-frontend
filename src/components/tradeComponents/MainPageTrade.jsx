import React from "react";
import { useSelector } from "react-redux";
import PriceFav from "./card/PriceFav";
import PriceIDR from "./card/PriceIDR";
import PriceUSDT from "./card/PriceUSDT";

function MainPageTrade() {
  const { email } = useSelector((state) => state?.profileReducer);
  const { myFav } = useSelector((state) => state.pasarTradingReducer);
  const { Exchange } = useSelector(
    (state) => state.pasarTradingReducer?.LISTING_EXCHANGE_ORDER,
  );

  return (
    <div
      className="card"
      style={{ backgroundColor: "#151933", border: "none" }}
    >
      <div className="row">
        <div
          className="col-12 col-md-12 pt-1 px-1"
          style={{ background: "#0B0D22" }}
        >
          <div className="container-fluid py-0 px-1">
            <div
              className="nav nav-tabs"
              id="myTab"
              role="tablist"
              style={{ borderBottom: "0px" }}
            >
              <button
                className="nav-link ci-btn-trade px-2 py-3 font-responsive-trade-page font-bold"
                id="favorite-tab"
                data-toggle="tab"
                href="#favorite"
                role="tab"
                aria-controls="favorite"
                aria-selected="false"
                style={{ width: "110px" }}
              >
                Fav
              </button>
              <button
                className="nav-link ci-btn-trade active px-2 py-3 font-responsive-trade-page font-bold"
                id="IDR-tab"
                data-toggle="tab"
                href="#IDR"
                role="tab"
                aria-controls="IDR"
                aria-selected="true"
                style={{ width: "110px" }}
              >
                USD
              </button>
              <button
                className="nav-link ci-btn-trade px-2 py-3 font-responsive-trade-page font-bold"
                id="USDT-tab"
                data-toggle="tab"
                href="#USDT"
                role="tab"
                aria-controls="USDT"
                aria-selected="false"
                style={{ width: "110px" }}
              >
                USDT
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="IDR"
              role="tabpanel"
              aria-labelledby="IDR-tab"
            >
              <PriceIDR
                exchange={
                  Exchange && Exchange instanceof Array && Exchange.length > 0
                    ? Exchange.filter((item) => {
                        if (item.base.toString().toUpperCase() === "USD") {
                          return item;
                        } else {
                          return null;
                        }
                      })
                    : []
                }
              />
            </div>
            <div
              className="tab-pane fade"
              id="USDT"
              role="tabpanel"
              aria-labelledby="USDT-tab"
            >
              <PriceUSDT
                exchange={
                  Exchange && Exchange instanceof Array && Exchange.length > 0
                    ? Exchange.filter((item) => {
                        if (item.base.toString().toUpperCase() === "USDT") {
                          return item;
                        } else {
                          return null;
                        }
                      })
                    : []
                }
              />
            </div>
            <div
              className="tab-pane fade"
              id="favorite"
              role="tabpanel"
              aria-labelledby="favorite-tab"
            >
              <PriceFav
                exchange={
                  email &&
                  Exchange &&
                  Exchange instanceof Array &&
                  Exchange.length > 0
                    ? Exchange.filter((item) => {
                        if (myFav.includes(item._id)) {
                          return item;
                        } else {
                          return null;
                        }
                      })
                    : []
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageTrade;
