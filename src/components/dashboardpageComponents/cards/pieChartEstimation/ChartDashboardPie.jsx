import React from "react";
import ReactApexChart from "react-apexcharts";
import "./ChartDashboardPie.scss";

// import { convertNumber } from "../../../../assets/js";

function ChartNilaiAsset({ data }) {
  let dataChart = {
    series: [],
    label: [],
  };
  data.forEach((el) => {
    if (el.balance) {
      let balance = el.balance.toFixed(4);
      dataChart.series.push(Number(balance));
      dataChart.label.push(el.type);
    }
  });
  const StateNilaiAsset = {
    series: dataChart.series,
    options: {
      chart: {
        type: "donut",
        height: 200,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
      },
      labels: dataChart.label,
      title: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={StateNilaiAsset.options}
        series={StateNilaiAsset.series}
        type="donut"
        height={200}
      />
    </div>
  );
}

export default ChartNilaiAsset;
