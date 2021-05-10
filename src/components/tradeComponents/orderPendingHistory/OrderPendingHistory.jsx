import React from "react";
import OrderHistory from "./OrderHistory";
import OrderPending from "./OrderPending";

export default function OrderPendingHistory() {

  return (
    <div>
      <ul
        className="nav nav-pills mb-0 font-14 bg-trade2"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item p-0">
          <a
            className="nav-link text-center active"
            id="market"
            data-toggle="pill"
            href="#order-pending-tab"
            role="tab"
            aria-controls="order-pending-tab"
            aria-selected="false"
            style={{ minWidth: "180px" }}
          >
            Order Pending
          </a>
        </li>
        <li className="nav-item p-0">
          <a
            className="nav-link text-center"
            id="market"
            data-toggle="pill"
            href="#order-history-tab"
            role="tab"
            aria-controls="order-history-tab"
            aria-selected="false"
            style={{ minWidth: "180px" }}
          >
            Order History
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="order-pending-tab"
          role="tabpanel"
          aria-labelledby="market"
        >
          <div className="col-12 p-0">
            <OrderPending />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="order-history-tab"
          role="tabpanel"
          aria-labelledby="market"
        >
          <div className="col-12 p-0">
            <OrderHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
