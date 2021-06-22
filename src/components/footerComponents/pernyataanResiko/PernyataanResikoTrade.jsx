import React from "react";
import { useSelector } from "react-redux";
export default function PernyataanResikoTrade() {
  const { mode } = useSelector((state) => state.daynightReducer);
  return (
    <div
      className={mode ? "bg-trade-dark" : "bg-trade"}
      style={{ margin: "0px 12px" }}
    >
      <div
        className={`col-11 px-3 ${mode ? "bg-trade-dark" : "bg-trade"} py-3`}
      >
        <p
          className={`${mode ? "text-price-dark" : "text-price"} mb-2`}
          style={{ fontStyle: "italic" }}
        >
          <span
            style={{ background: "rgba(255, 0, 0, 0.4)" }}
            className="px-2 py-1"
          >
            Risk Statement :
          </span>
        </p>
        <p
          className={`${mode ? "text-price-dark" : "text-price"} mb-0`}
          style={{ fontStyle: "italic" }}
        >
          Trading digital assets (crypto) carries a high risk. Considerations
          and decisions are in the hands of Archidax users not to force users to
          carry out buying and selling activities and transactions and all
          buying and selling decisions of your digital money assets are your own
          decisions and are not influenced by any party.{" "}
        </p>
      </div>
    </div>
  );
}
