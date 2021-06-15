import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChartDepth } from "../../../stores";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import { IoWebSocketCronjob } from "../../../configuration/IoWebSocket";

export default function DepthChart() {
  let [depthData, setDepthData] = useState(null);
  const { PairSymbol, price24H } = useSelector(
    (state) => state.pasarTradingReducer,
  );

  const optionChart = {
    backgroundColor: "transparent transparent",
    height: "170px",
    type: "depth",
    options: {
      palette: ["#1db01d", "#FF6675"],
      currency: `${PairSymbol.split("/")[1]}`,
      // curency diganti
      title: {
        visible: false,
      },
      subtitle: {
        visible: false,
      },
      labels: {
        cost: "Total",
      },
      "button-zoomout": {
        visible: false,
      },
      "button-zoomin": {
        visible: false,
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
    if(PairSymbol&&IoWebSocketCronjob){
      getChartDepth(PairSymbol, 30, setDepthData);
      IoWebSocketCronjob.on(`DepthChart-${PairSymbol}`, (data) => {
        if(data) {
          setDepthData(data)
        }
      })
    }
    return () => IoWebSocketCronjob.removeEventListener(`DepthChart-${PairSymbol}`)
  }, [PairSymbol])

  return (
    <div>
      {depthData ? (
        <ZingChart data={optionChart} className="mt-3"></ZingChart>
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
}
