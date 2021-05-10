import React, { useEffect, useState } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";

import BasicChartData from './basicData'
import { baseAxiosTrading } from '../../../stores'


export default function BasicChart(props) {
  const { PairSymbol, resolution } = props
  const [chartData, setChartData] = useState(BasicChartData)  

  useEffect(() => {
    setChartData(BasicChartData)
    baseAxiosTrading({
      method: 'GET',
      url: `/history2?symbol=${PairSymbol}&resolution=${resolution}`
    })
    .then(({data}) => {
      setChartData({
        ...chartData,
        'scale-x': {
          ...chartData['scale-x'],
          "min-value": data.stockChart[0][0],
        },
        "scale-y": {
          ...chartData['scale-y'],
          values: `${data.lowestStock}:${data.highestStock}:${(data.highestStock - data.lowestStock)/10}`,
          'offset-end': "15%", //to adjust scale offsets.
        },
        "scale-y-2": {
          ...chartData['scale-y-2'],
          values: `${data.lowestVolume}:${data.highestVolume}:${(data.highestVolume - data.lowestVolume)/10}`,
        },
        "title": {
          text: `CryptoIndex ${PairSymbol} Chart`,
        },
        series: [
          {
            type: "stock",
            scales: "scale-x,scale-y",
            aspect: "candlestick",
            "guide-label": {
              text: "Open: $%open<br>High: $%high<br>Low: $%low<br>Close: $%close",
            },
            "trend-up": {
              "background-color": "#14795B",
              "line-color": "#ffffff",
              "border-color": "#14795B",
            },
            "trend-down": {
              "background-color": "#B80D0D",
              "line-color": "#ffffff",
              "border-color": "#B80D0D",
            },  
            values: data.stockChart
          },
          {
            type: "bar",
            scales: "scale-x,scale-y-2",
            "guide-label": {
              text: "Volume: %vM",
            },
            "bar-width": "60%",
            "line-color": "#F9BA42",
            "line-width": 0.5,
            "background-color": "#F9BA42",
            marker: {
              type: "none",
            },
            values: data.volumeChart
          }
        ]
      })
    })
    .catch((err) => {
      console.log(err)
    })
  },[PairSymbol,resolution])

  return (
    <div>
      <ZingChart
        data={chartData}
        height="380"
        width="100%"
        id="myChart"
        className="mt-3"
      ></ZingChart>
    </div>
  );
}
