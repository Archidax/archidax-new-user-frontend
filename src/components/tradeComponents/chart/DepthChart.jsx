import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChartDepth } from '../../../stores'
import "zingchart/es6";
import ZingChart from "zingchart-react";

export default function DepthChart() {
  let [depthData, setDepthData] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  const { PairSymbol, price24H } = useSelector((state) => state.pasarTradingReducer);

  const optionChart = {
    backgroundColor: "transparent transparent",
    height: "280px",
    type: "depth",
    options: {
      palette: ["#1db01d", "#FF6675"],
      currency: `${PairSymbol.split("/")[1]}`,
      // curency diganti
      title: {
        visible: false
      },
      subtitle: {
        visible: false
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
    setIsLoading(true)
    getChartDepth(PairSymbol, 30, setDepthData, setIsLoading);
  }, [PairSymbol]);

  return (
    <div>
      {!isLoading?
        <h1>loading...</h1>:
        depthData?
        <ZingChart data={optionChart} className="mt-3"></ZingChart>:
          <h1>no data</h1>
      }
    </div>
  );
}
