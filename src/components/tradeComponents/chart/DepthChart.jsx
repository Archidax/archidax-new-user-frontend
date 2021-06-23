import React from "react";
import { useSelector } from "react-redux";
import "zingchart/es6";
import ZingChart from "zingchart-react";

export default function DepthChart({ depthData }) {
  const { PairSymbol, price24H } = useSelector(
    (state) => state.pasarTradingReducer,
  );
    let optionChart = {
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
      series: [
        {
          "values": depthData.bids?depthData.bids:[],
          "text": "bids"
        },
        {
          "values": depthData.asks?depthData.asks:[],
          "text": "ask"
        }
      ],
      "scale-x": {
        "line-color": "none",
        item: {
          visible: true,
        },
        tick: {
          "line-color": "none",
        }
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
      plotarea: {
        margin: "10 30",
      },
    };

  return (
    <div>
      { depthData.bids&&depthData.asks&&
        <ZingChart data={optionChart} className="mt-3"></ZingChart>
      }
    </div>
  );
}
