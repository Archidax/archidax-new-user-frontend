import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "zingchart/es6";
import { getVolumeChart } from '../../../stores'
import ZingChart from "zingchart-react";
import {IoWebSocketCronjob} from '../../../configuration/IoWebSocket'

export default function VolumeChart() {
  let [volumeData, setVolumeData] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);

  const optionChart = {
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
        // values: [38, 42, 46, 44, 42, 44, 46, 48, 52, 50, 56, 60],
        values: volumeData?volumeData:[],
        "background-color":
          "#26A69A #26A69A" /* Single color or gradient (2 colors) */,
        "alpha-area": 0.15 /* Shaded region transparency */,
      },
    ],
    "scale-x": {
      "line-color": "none",
      item: {
        visible: true,
      },
      tick: {
        "line-color": "none",
      },
      transform: { /* Converts your Unix timestamp to a human readable format. */
        type: "date", /* Set your transform type to "date". */
        all: "%H.%i" /* Specify your date/time format, using tokens. */
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
      guide: {
        "line-style": "dashed",
        "line-color": "transparent",
      },
    },
    plotarea: {
      margin: "0 0",
    },
  }

  useEffect(() => {
    IoWebSocketCronjob.removeEventListener(`VolumeChart-${PairSymbol}`);
    IoWebSocketCronjob.on(`VolumeChart-${PairSymbol}`, (data) => {
      if(data) {
        setVolumeData(data)
      }
    })
    return () => {IoWebSocketCronjob.removeEventListener(`VolumeChart-${PairSymbol}`);}
  }, [PairSymbol])
  
  useEffect(() => {
    getVolumeChart(PairSymbol, 48, setVolumeData);
  }, [PairSymbol]);


  return (
    <div>
      { volumeData&&
        <ZingChart data={optionChart} className="mt-3"></ZingChart>
      }
    </div>
  );
}
