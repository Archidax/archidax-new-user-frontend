import React from "react";
import noaset from "../../../../assets/img/dashboard/noaset.png";

export default function EmptyChart() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={noaset}
        alt="noasset"
        className="undraggable"
        style={{ pointerEvents: "none", width: "80%" }}
      />
    </div>
  );
}
