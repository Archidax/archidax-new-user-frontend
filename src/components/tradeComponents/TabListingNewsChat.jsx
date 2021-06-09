import React from "react";
import ListingExchange from "./listingExchange/ListingExchange";

import { useSelector, useDispatch } from "react-redux";

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
          style={{ padding: "9px 16px" }}
        >
          <th
            className="text-gold font-14 mb-0 "
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <i
                class="fa fa-th-list"
                aria-hidden="true"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="top"
                title="Listing Exchange"
              ></i>
              {/* Listing Exchange */}
            </div>
            <div>
              <i
                class="fa fa-newspaper-o mx-3"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="top"
                title="News"
              ></i>
              <i
                class="fa fa-comments"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="top"
                title="Chat"
              ></i>
            </div>
          </th>
        </div>
        <div>
          <div>
            <ListingExchange />
          </div>
          <div>Test 1</div>
          <div>Test 2</div>
        </div>
      </div>
    </div>
  );
}
