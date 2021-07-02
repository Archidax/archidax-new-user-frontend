import React from "react";
// import "zingchart/es6";
// import ZingChart from "zingchart-react";
import ReactApexChart from "react-apexcharts";

export default function VolumeChart({ volumeData }) {
  // const optionChart = {
  //   backgroundColor: "transparent",
  //   type: "area",
  //   height: "160px",
  //   plot: {
  //     "active-area": true /* Extends the tooltip's active area to the shaded region */,
  //     color: "#26A69A",
  //     marker: {
  //       size: 1,
  //       borderColor: "#26A69A",
  //       borderWidth: 1,
  //       color: "#26A69A",
  //     },
  //   },
  //   series: [
  //     {
  //       values: volumeData ? volumeData : [],
  //       "background-color":
  //         "#26A69A #26A69A" /* Single color or gradient (2 colors) */,
  //       "alpha-area": 0.15 /* Shaded region transparency */,
  //     },
  //   ],
  //   "scale-x": {
  //     "line-color": "none",
  //     item: {
  //       visible: true,
  //     },
  //     tick: {
  //       "line-color": "none",
  //     },
  //     transform: {
  //       /* Converts your Unix timestamp to a human readable format. */
  //       type: "date" /* Set your transform type to "date". */,
  //       all: "%H.%i" /* Specify your date/time format, using tokens. */,
  //     },
  //   },
  //   "scale-y": {
  //     "line-color": "none",
  //     item: {
  //       visible: false,
  //     },
  //     tick: {
  //       "line-color": "none",
  //     },
  //     guide: {
  //       "line-style": "dashed",
  //       "line-color": "transparent",
  //     },
  //   },
  //   plotarea: {
  //     margin: "10 10",
  //   },
  // };

  const apexOptions = {
    chart: {
      height: "100%",
      width: "100%",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    // tooltip: {
    //   enabled: false,
    // },
  };

  return (
    <div>
      {/* <ZingChart data={optionChart} className="mt-3"></ZingChart> */}
      <ReactApexChart
        options={apexOptions}
        series={[
          {
            name: "Series 1",
            data: [[1, 45], [2, 41], [3, 38], [4, 23], [5, 19], [6, 13], [7, 2]]
          },
          {
            name: "Series 2",
            data: [[8, 0],[9, 8],[10, 19],[11, 30],[12, 48]]
          }
        ]}
        type="area"
      />
    </div>
  );
}
