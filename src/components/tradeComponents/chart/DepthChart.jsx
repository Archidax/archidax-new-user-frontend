import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChartDepth } from "../../../stores";
import "zingchart/es6";
import ZingChart from "zingchart-react";

export default function DepthChart() {
  let [depthData, setDepthData] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);

  const optionChart = {
    backgroundColor: "transparent transparent",
    height: "170px",
    type: "depth",
    options: {
      palette: ["#1db01d", "#FF6675"],
      currency: `${depthData ? PairSymbol.split("/")[1] : "-"}`,
      // curency diganti
      title: {
        color: "white",
      },
      subtitle: {
        text: depthData ? PairSymbol : "-",
        // symbol diganti
        fontSize: "14px",
        color: "white",
      },
      labels: {
        cost: "Total",
      },
    },
    "scale-x": {
      "line-color": "none",
      item: {
        visible: true,
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
    },
    "scale-y-2": {
      "line-color": "none",
      item: {
        visible: false,
      },
      tick: {
        "line-color": "none",
      },
    },
    series: [
      {
        values: depthData ? depthData.bids : [],
        text: "Amount Bid",
      },
      {
        values: depthData ? depthData.asks : [],
        text: "Amount Ask",
      },
    ],
    plotarea: {
      margin: "10 30",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    getChartDepth(PairSymbol, 30, setDepthData, setIsLoading);
    console.log("jalan");
  }, [PairSymbol]);

  return (
    <div>
      {isLoading && !depthData ? (
        <h1>loading...</h1>
      ) : (
        <ZingChart data={optionChart} className="mt-3"></ZingChart>
      )}
    </div>
  );
}
