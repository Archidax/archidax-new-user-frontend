import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {ChartWallet} from '../../../stores/chart/functions'
import {convertNumber} from '../../../assets/js'

function ChartNilaiAsset() {
  const [ChartData, setChartData] = useState([])
  
  useEffect(() => {
    ChartWallet((val) => {
      setChartData(val)
    })
  }, [])

  const StateNilaiAsset = {
    series: [
      {
        name: "Total Aset",
        data: ChartData,
      },
    ],
    options: {
      chart: {
        type: 'area',
        width: '100%',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        show: false,
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: '#78909C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: false,
        },
        labels: {
          show: true,
          style: {
            colors: '#78909C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          },
          formatter: function(val, index) {
            return convertNumber.toBillion(val, 1)
          }
        }
      },
      noData: {
        text: "no data",
        align: 'center',
        verticalAlign: 'middle',
        style: {
          fontSize: '14px'
        }
      },
      tooltip: {
        enabled: true,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        fillSeriesColor: false,
        theme: "dark",
        style: {
          fontSize: '12px',
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },
        z: {
          title: 'Size: '
        },
        marker: {
          show: true,
        },
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
      }
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={StateNilaiAsset.options}
        series={StateNilaiAsset.series}
        type="area"
        height={300}
      />
    </div>
  );
}

export default ChartNilaiAsset;
