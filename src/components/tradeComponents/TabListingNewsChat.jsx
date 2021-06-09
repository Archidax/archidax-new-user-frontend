import React from "react";
import ListingExchange from "./listingExchange/ListingExchange";

import { useSelector, useDispatch } from "react-redux";
import Chat from "./chat/Chat";

export default function TabListingNewsCHat() {
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
            <ul class="nav nav-pills " id="pills-tab" role="tablist">
              <li class="nav-item px-0 mx-2">
                <a
                  class="nav-link active p-0 m-0"
                  id="pills-activity-tab"
                  data-toggle="pill"
                  href="#pills-activity"
                  role="tab"
                  aria-controls="pills-activity"
                  aria-selected="true"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <i
                    class="fa fa-th-list"
                    aria-hidden="true"
                    aria-hidden="true"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Listing Exchange"
                  ></i>
                </a>
              </li>
              <li class="nav-item px-0 mx-2">
                <a
                  class="nav-link p-0 m-0"
                  id="pills-Important-Notice-tab"
                  data-toggle="pill"
                  href="#pills-Important-Notice"
                  role="tab"
                  aria-controls="pills-Important-Notice"
                  aria-selected="false"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <i
                    class="fa fa-newspaper-o"
                    aria-hidden="true"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="News"
                  ></i>
                </a>
              </li>
              <li class="nav-item px-0 mx-2">
                <a
                  class="nav-link p-0 m-0"
                  id="pills-New-Listing-tab"
                  data-toggle="pill"
                  href="#pills-New-Listing"
                  role="tab"
                  aria-controls="pills-New-Listing"
                  aria-selected="false"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <i
                    class="fa fa-comments"
                    aria-hidden="true"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chat"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-activity"
            role="tabpanel"
            aria-labelledby="pills-activity-tab"
          >
            <ListingExchange />
          </div>
          <div
            class="tab-pane fade"
            id="pills-Important-Notice"
            role="tabpanel"
            aria-labelledby="pills-Important-Notice-tab"
          >
            Test 1
          </div>
          <div
            class="tab-pane fade"
            id="pills-New-Listing"
            role="tabpanel"
            aria-labelledby="pills-New-Listing-tab"
          >
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
