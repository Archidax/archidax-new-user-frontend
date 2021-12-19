import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChartDepth, getVolumeChart } from "../../stores";
import DepthChart from "./chart/DepthChart";
import VolumeChart from "./chart/VolumeChart";
import { IoWebSocketCronjob } from "../../configuration/IoWebSocket";

export default function TabsChartTrade() {
  
  const [depthData, setDepthData] = useState(null);
  const [volumeData, setVolumeData] = useState(null);

  const { PairSymbol, price24H } = useSelector((state) => state.pasarTradingReducer);

  useEffect(() => {
    getChartDepth(PairSymbol, 50, (e) => {
      setDepthData(e);
    });
    getVolumeChart(PairSymbol, 48, (e) => {
      setVolumeData(e);
    });
  }, [PairSymbol]);

  useEffect(() => {
    if (PairSymbol && IoWebSocketCronjob && price24H.Close) {
      IoWebSocketCronjob.removeEventListener(`DepthChart-${PairSymbol}`);
      IoWebSocketCronjob.on(`DepthChart-${PairSymbol}`, (data) => {
        if (data&&price24H.Close) {
          console.log(data, "sdawd")
          setDepthData(data);
        }
      });
    }
    return () =>
      IoWebSocketCronjob.removeEventListener(`DepthChart-${PairSymbol}`);
  }, [PairSymbol]);

  useEffect(() => {
    if (PairSymbol && IoWebSocketCronjob) {
      IoWebSocketCronjob.removeEventListener(`VolumeChart-${PairSymbol}`);
      IoWebSocketCronjob.on(`VolumeChart-${PairSymbol}`, (data) => {
        if (data) {
          setVolumeData(data);
        }
      });
    }
    return () => {
      IoWebSocketCronjob.removeEventListener(`VolumeChart-${PairSymbol}`);
    };
  }, [PairSymbol]);

  return (
    <div className="mt-2">
      <div className="tabs-volume-tab">
        <ul class="nav nav-pills mb-3 px-4" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Volume
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Depth 
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            {volumeData && volumeData.length && <VolumeChart volumeData={volumeData} />}
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {depthData && <DepthChart depthData={depthData} />}
          </div>
        </div>
      </div>
    </div>
  );
}
