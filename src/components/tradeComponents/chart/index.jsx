import React from "react";
import { useParams } from "react-router-dom";
import Chart from "./chart";
import { useSelector } from 'react-redux'
import { baseUrlTrade, baseUrlTradeVersion } from "../../../stores/index";
// import { useParamsAsState } from "../../../../helpers/routetostate";

export default function TradeChart() {
  const {mode} = useSelector(state => state.daynightReducer)
  const {symbol}=useParams();

  const chartProp = {
    symbol: symbol?symbol.toString().replace("_","/"):undefined,
    datafeedUrl: `${baseUrlTrade}${baseUrlTradeVersion}`,
    // symbol: `${currencyTo}/${currencyFrom}`,
    // datafeedUrl:'http://localhost:3007/api',
    // symbol: 'AAPL',
    // datafeedUrl: 'https://demo_feed.tradingview.com',
    // symbol: 'BTCIDR',
    // datafeedUrl:'https://indodax.com/tradingview',
    interval: "60",
    containerId: "tv_chart_container",
    libraryPath: "/charting_library/",
    chartsStorageUrl: "https://saveload.tradingview.com",
    chartsStorageApiVersion: "1.1",
    clientId: "tradingview.com",
    userId: "CryptoIndex",
    fullscreen: false,
    autosize: true,
    studiesOverrides: {},
    timezone: "Asia/Jakarta",
    theme: mode ? 'DARK':"LIGHT",
  };

  return (
    <div className="col-lg-12 p-0 h-100">
      <div className="card border-0 shadow-sm overflow-hidden w-100 h-100">
        <Chart {...chartProp} />
      </div>
    </div>
  );
}