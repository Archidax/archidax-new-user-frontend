import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChartDepth } from '../../../stores'
import "zingchart/es6";
import ZingChart from "zingchart-react";

export default function DepthChart() {
  let [depthData, setDepthData] = useState(null);
  const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);

  const setting = {
    backgroundColor: "transparent transparent",
    height: "280px",
    type: "depth",
    options: {
      palette: ["#1db01d", "#FF6675"],
      currency: `${depthData?PairSymbol.split("/")[1]:'-'}`,
      // curency diganti
      title: {
        color: "white",
      },
      subtitle: {
        text: depthData?PairSymbol:'-',
        // symbol diganti
        fontSize: "14px",
        color: "white",
      },
      labels: {
        cost: "Total",
      },
    },
    series: [
      {
        values: depthData?depthData.bids:[],
        text: "Amount Bid",
      },
      {
        values: depthData?depthData.asks:[],
        text: "Amount Ask",
      },
    ],
  }

  useEffect(() => {
    getChartDepth(PairSymbol, 30, setDepthData);
  }, [PairSymbol]);

  return (
    <div>
      {depthData&&
        <ZingChart data={setting} className="mt-3"></ZingChart>
      }
    </div>
  );
}
