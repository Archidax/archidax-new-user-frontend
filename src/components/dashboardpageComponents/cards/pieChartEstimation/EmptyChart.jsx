import React from "react";
import noaset from "../../../../assets/img/dashboard/noaset.png";

export default function EmptyChart() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "240px" }}>
        <img
          src={noaset}
          alt="noasset"
          className="undraggable"
          style={{ pointerEvents: "none", width: "100%" }}
        />
      </div>
    </div>
  );
}
