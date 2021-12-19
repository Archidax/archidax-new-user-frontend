import React from "react";

import { useSelector } from "react-redux";
import LiveMarket from "./liveMarket/LiveMarket";

export default function TabLiveMarket() {
  const { mode } = useSelector((state) => state.daynightReducer);

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
                  <th className="text-gold atr-resp mb-0">Live Market</th>
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
        </div>
      </div>
    </div>
  );
}
