import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "zingchart/es6";
import ZingChart from "zingchart-react";

export default function VolumeChart() {
  let [depthData, setDepthData] = useState(null);
  const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);

  useEffect(() => {
    setDepthData({
      backgroundColor: "transparent",
      type: "area",
      height: "180px",
      plot: {
        "active-area": true /* Extends the tooltip's active area to the shaded region */,
        color: "#26A69A",
        marker: {
          size: 1,
          borderColor: "#26A69A",
          borderWidth: 1,
          color: "#26A69A",
        },
      },
      series: [
        {
          values: [38, 42, 46, 44, 42, 44, 46, 48, 52, 50, 56, 60],
          "background-color":
            "#26A69A #26A69A" /* Single color or gradient (2 colors) */,
          "alpha-area": 0.15 /* Shaded region transparency */,
        },
      ],
      "scale-x": {
        "line-color": "none",
        item: {
          visible: false,
        },
        tick: {
          "line-color": "none",
        },
      },
      "scale-y": {
        "line-color": "none",
        item: {
          visible: false,
        },
        tick: {
          "line-color": "none",
        },
        guide: {
          "line-style": "dashed",
          "line-color": "transparent",
        },
      },
      plotarea: {
        margin: "0 0",
      },
    });
  }, [setDepthData]);

  return (
    <div>
      {depthData && <ZingChart data={depthData} className="mt-3"></ZingChart>}
    </div>
  );
}
