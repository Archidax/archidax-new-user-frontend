import React from "react";
import { useSelector} from "react-redux";
import { getLanguageFromURL } from "../../../stores/chart/functions";

export default function TradeChartCard(props) {
  const {mode} = useSelector(state => state.daynightReducer);
  console.log(props, "sdasdwasdw")
  
  React.useEffect(() => {
    const widgetOptions = {
      symbol: props.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed(props.datafeedUrl),
      interval: props.interval,
      container_id: props.containerId,
      library_path: props.libraryPath,
      locale: getLanguageFromURL() || "en",
      charts_storage_url: props.chartsStorageUrl,
      charts_storage_api_version: props.chartsStorageApiVersion,
      client_id: props.clientId,
      user_id: props.userId,
      watermark: {
        visible: true,
        fontSize: 24,
        horzAlign: 'center',
        vertAlign: 'center',
        color: 'rgba(171, 71, 188, 0.5)',
        text: 'Watermark Example',
      },
      disabled_features: [
        "use_localstorage_for_settings",
        "header_interval_dialog_button",
        "header_compare",
        "widget_logo",
        "header_symbol_search",
        // "go_to_date",
        // "mouse_wheel_scale",
        // "left_toolbar"
      ],
      // enabled_features: [
      //   // "study_templates",
      //   // 'hide_left_toolbar_by_default',
      // ],
      toolbar_bg: mode ? '#140f0f': '#ffffff',
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      theme: props.theme,
      style: props.style,
      time_frames: [
        { text: "1d", resolution: "1D", description: "1 Day", title: "1d" },
        { text: "1d", resolution: "1W", description: "1 Week", title: "1w" },
        // { text: "50y", resolution: "6M", description: "50 Years" },
        // { text: "3d", resolution: "5", description: "3 Days" },
        { text: "1000y", resolution: "1W", description: "All", title: "All" },
      ],
      studies_overrides: props.studiesOverrides,
      overrides: {
        // "mainSeriesProperties.showCountdown": true,
        "paneProperties.background": mode ? 'black':"#ffffff",
        "paneProperties.vertGridProperties.color": "black",
        // "paneProperties.horzGridProperties.color": "black",
        "symbolWatermarkProperties.transparency": 90,
        "scalesProperties.textColor": "#AAA",
        "mainSeriesProperties.candleStyle.wickUpColor": "#336854",
        "mainSeriesProperties.candleStyle.wickDownColor": "#7f323f",
      },
      timezone: props.timezone
    };

    let tvWidget = (window.tvWidget = new window.TradingView.widget(
      widgetOptions,
    ));

    // const tvWidget = new widget(widgetOptions);
    // this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {

      // dihidden
      // tvWidget.headerReady().then(() => {
      //   const button = tvWidget.createButton();
      //   button.setAttribute("title", "Click to show a notification popup");
      //   button.classList.add("apply-common-tooltip");
      //   button.addEventListener("click", () =>
      //     tvWidget.showNoticeDialog({
      //       title: "Notification",
      //       body: "TradingView Charting Library API works correctly",
      //       callback: () => {
      //         console.log("Noticed!");
      //       },
      //     }),
      //   );

      //   button.innerHTML = "Check API";
      // });
      // di hidden

      tvWidget
        .chart()
        .onIntervalChanged()
        .subscribe(null, function (interval, obj) {
          if (interval === 15) obj.timeframe = "1D";
          if (interval === 30) obj.timeframe = "7D";
          if (interval === 180) obj.timeframe = "30D";
          if (interval === "1D") obj.timeframe = "6M";
          if (interval === "7D") obj.timeframe = "5Y";
        });
    });
    return () => {
      if (tvWidget !== null) {
        tvWidget.remove();
        tvWidget = null;
      }
    };
  }, [props]);

  return <div id={props.containerId} className={"TVChartContainer h-100"} />;
}
