import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasicChart from "./basicChart/BasicChart";

export default function MainChart(props) {
  const { symbol } = props;
  const [PairSymbol, setPairSymbol] = useState("BTC/IDR");
  const [resolution, setResolution] = useState("60");

  useEffect(() => {
    setPairSymbol(symbol.replace("_", "/"));
  }, [symbol]);

  return (
    <div>
      <div className="col-11 offset-1 mb-1">
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="pt-3"
        >
          <div className="tabs-mainchart">
            <ul
              className="nav nav-pills mb-0 font-14"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item col p-0 text-price">
                <a
                  className="nav-link text-center active"
                  id="minutes-tab"
                  // data-toggle="pill"
                  href="#pills-minutes"
                  role="tab"
                  aria-controls="pills-minutes"
                  aria-selected="true"
                >
                  15M
                </a>
              </li>
              <li className="nav-item col p-0">
                <a
                  className="nav-link text-center"
                  id="hour"
                  // data-toggle="pill"
                  href="#pills-hour"
                  role="tab"
                  aria-controls="pills-hour"
                  aria-selected="false"
                >
                  1H
                </a>
              </li>
              <li className="nav-item col p-0">
                <a
                  className="nav-link text-center"
                  id="day"
                  data-toggle="pill"
                  href="#pills-day"
                  role="tab"
                  aria-controls="pills-day"
                  aria-selected="false"
                >
                  1D
                </a>
              </li>
              <li className="nav-item col p-0">
                <a
                  className="nav-link text-center"
                  id="day"
                  data-toggle="pill"
                  href="#pills-week"
                  role="tab"
                  aria-controls="pills-week"
                  aria-selected="false"
                >
                  1W
                </a>
              </li>
              <li className="nav-item col p-0">
                <a
                  className="nav-link text-center"
                  id="day"
                  data-toggle="pill"
                  href="#pills-month"
                  role="tab"
                  aria-controls="pills-month"
                  aria-selected="false"
                >
                  1M
                </a>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link
              to={`/marketdepth/${
                PairSymbol ? PairSymbol.toString().replace("/", "_") : undefined
              }`}
              target="_blank"
            >
              <button className="ci-dropdown-btn-wallets-trade2">
                <h6 className="mb-0 mx-2">Market Depth</h6>
              </button>
            </Link>
            <Link to={`/chart/${PairSymbol.replace("/", "_")}`} target="_blank">
              <button className="ci-dropdown-btn-wallets-trade2">
                <h6 className="mb-0 mx-2">TradingView</h6>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-minutes"
            role="tabpanel"
            aria-labelledby="minutes-tab"
          >
            <BasicChart PairSymbol={PairSymbol} resolution={resolution} />
          </div>
          <div
            className="tab-pane fade"
            id="pills-hour"
            role="tabpanel"
            aria-labelledby="hour"
          >
            Kosong1
          </div>
          <div
            className="tab-pane fade"
            id="pills-day"
            role="tabpanel"
            aria-labelledby="day"
          >
            Kosong2
          </div>
          <div
            className="tab-pane fade"
            id="pills-week"
            role="tabpanel"
            aria-labelledby="week"
          >
            Kosong3
          </div>
          <div
            className="tab-pane fade"
            id="pills-month"
            role="tabpanel"
            aria-labelledby="month"
          >
            Kosong4
          </div>
        </div>
      </div>
    </div>
  );
}
