import React, {useEffect , useRef } from "react";
import { useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

export default function DepthChart({ depthData }) {
  const { PairSymbol, price24H } = useSelector(
    (state) => state.pasarTradingReducer,
  );
  
  // useEffect(() => {
  //   if(depthData){
  //     console.log(depthData, "1213")
  //   }
  // }, [depthData])
  // const chart = useRef(null);

  // useLayoutEffect(() => {
  //   var coba = am4core.create("chartdiv", am4charts.XYChart);
  //   coba.data = depthData.data;
    
  //   // Set up precision for numbers
  //   coba.numberFormatter.numberFormat = "#,###.####";

  //   // Create axes
  //   var xAxis = coba.xAxes.push(new am4charts.CategoryAxis());
  //   xAxis.dataFields.category = "value";
  //   xAxis.color= "#0f0";
  //   // xAxis.renderer.minGridDistance = 50;
  //   // xAxis.title.text = "Price (BTC/ETH)";

  //   var yAxis = coba.yAxes.push(new am4charts.ValueAxis());
  //   yAxis.color= "#0f0";

  //   // Create series
  //   var series = coba.series.push(new am4charts.StepLineSeries());
  //   series.dataFields.categoryX = "value";
  //   series.dataFields.valueY = "bidstotalvolume";
  //   series.strokeWidth = 2;
  //   series.stroke = am4core.color("#0f0");
  //   series.fill = series.stroke;
  //   series.fillOpacity = 0.1;
  //   series.tooltipText = "Bids: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]"

  //   var series2 = coba.series.push(new am4charts.StepLineSeries());
  //   series2.dataFields.categoryX = "value";
  //   series2.dataFields.valueY = "askstotalvolume";
  //   series2.strokeWidth = 2;
  //   series2.stroke = am4core.color("#f00");
  //   series2.fill = series2.stroke;
  //   series2.fillOpacity = 0.1;
  //   series2.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]"

  //   var series3 = coba.series.push(new am4charts.ColumnSeries());
  //   series3.dataFields.categoryX = "value";
  //   series3.dataFields.valueY = "bidsvolume";
  //   series3.strokeWidth = 0;
  //   series3.fill = am4core.color("#000");
  //   series3.fillOpacity = 0.2;

  //   var series4 = coba.series.push(new am4charts.ColumnSeries());
  //   series4.dataFields.categoryX = "value";
  //   series4.dataFields.valueY = "asksvolume";
  //   series4.strokeWidth = 0;
  //   series4.fill = am4core.color("#000");
  //   series4.fillOpacity = 0.2;

  //   // Add cursor
  //   coba.cursor = new am4charts.XYCursor();
    
  //   chart.current = coba;

  //   return () => {
  //     coba.dispose();
  //   };
  // }, [PairSymbol, depthData]);


  const apexOptions = {
    chart: {
      height: "100%",
      width: "100%",
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#00b52a', '#c20013'],
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'numeric',
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      decimalsInFloat: 9,
      tooltip: {
        x: {
          formatter: function(val) {
            return val.toFixed(9);
          }
        }
      }
    },
    yaxis: {
      show: false,
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.45,
        opacityTo: 0
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
    tooltip: {
      theme: 'dark',
      // custom: function({ series, seriesIndex, dataPointIndex, w }) {
      //   console.log(series)
      //   console.log(seriesIndex)
      //   console.log(w)
      //   console.log(dataPointIndex)
      //   return (
      //     '<div class="container">' +
      //       '<h1>coba</h1>' +
      //       '<h1>coba</h1>' +
      //       "<div>" +
      //       w.config.series[0].categories[dataPointIndex] +
      //       "</div>" +
      //       '<div class="group1">Views: ' +
      //       series[0][dataPointIndex] +
      //       "</div>" +
      //       "</div>" +
      //       '<div class="group">' +
      //       "<div>" +
      //       w.config.series[1].categories[dataPointIndex] +
      //       "</div>" +
      //       '<div class="group2">Views: ' +
      //       series[1][dataPointIndex] +
      //       "</div>" +
      //       "</div>" +
      //     "</div>"
      //   );
      // }
    },
  };

  return (
    <>
      {depthData&&
        <ReactApexChart
          options={apexOptions}
          series={[
            {
              name: "Bids",
              data: depthData.bids?depthData.bids:[]
            },
            {
              name: "Asks",
              data: depthData.asks?depthData.asks:[]
            }
          ]}
          type="area"
        />
      }
    </>
    // <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
  );
}
