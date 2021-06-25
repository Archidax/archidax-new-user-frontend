import React, {useLayoutEffect,useRef} from "react";
import { useSelector } from "react-redux";
// import "zingchart/es6";
// import ZingChart from "zingchart-react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function DepthChart({ depthData }) {
  const { PairSymbol, price24H } = useSelector(
    (state) => state.pasarTradingReducer,
  );
  const chart = useRef(null);

  useLayoutEffect(() => {
    var coba = am4core.create("chartdiv", am4charts.XYChart);
    coba.data = depthData.data;
    
    // Set up precision for numbers
    coba.numberFormatter.numberFormat = "#,###.####";

    // Create axes
    var xAxis = coba.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "value";
    xAxis.color= "#0f0";
    // xAxis.renderer.minGridDistance = 50;
    // xAxis.title.text = "Price (BTC/ETH)";

    var yAxis = coba.yAxes.push(new am4charts.ValueAxis());
    yAxis.color= "#0f0";

    // Create series
    var series = coba.series.push(new am4charts.StepLineSeries());
    series.dataFields.categoryX = "value";
    series.dataFields.valueY = "bidstotalvolume";
    series.strokeWidth = 2;
    series.stroke = am4core.color("#0f0");
    series.fill = series.stroke;
    series.fillOpacity = 0.1;
    series.tooltipText = "Bids: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]"

    var series2 = coba.series.push(new am4charts.StepLineSeries());
    series2.dataFields.categoryX = "value";
    series2.dataFields.valueY = "askstotalvolume";
    series2.strokeWidth = 2;
    series2.stroke = am4core.color("#f00");
    series2.fill = series2.stroke;
    series2.fillOpacity = 0.1;
    series2.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]"

    var series3 = coba.series.push(new am4charts.ColumnSeries());
    series3.dataFields.categoryX = "value";
    series3.dataFields.valueY = "bidsvolume";
    series3.strokeWidth = 0;
    series3.fill = am4core.color("#000");
    series3.fillOpacity = 0.2;

    var series4 = coba.series.push(new am4charts.ColumnSeries());
    series4.dataFields.categoryX = "value";
    series4.dataFields.valueY = "asksvolume";
    series4.strokeWidth = 0;
    series4.fill = am4core.color("#000");
    series4.fillOpacity = 0.2;

    // Add cursor
    coba.cursor = new am4charts.XYCursor();
    
    chart.current = coba;
    console.log(coba)

    return () => {
      coba.dispose();
    };
  }, [PairSymbol, depthData]);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
  );
}
