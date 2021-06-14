import React from 'react';
import ReactApexChart from "react-apexcharts";
import {convertNumber} from '../../../assets/js'


function ChartKeuangan(props) {
    const data = {
        series: [{
            name: 'series1',
            data: props.dataChart?props.dataChart.volumePrice:[]
          }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar:false,
                width:'100%',
                sparkline: {
                    enabled: true
                }
            },
            grid : {
                show : false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width:0,
            },
            xaxis: {
                labels : {
                    show:false,
                },
                type: 'datetime',
                categories: props.dataChart?props.dataChart.date:[]
            },
            yaxis : {
                labels : {
                    show:false,
                },
            },
            fill : {
                // colors : ['#00FF19']
                colors : convertNumber.tradeUpDownChangeDinamic(props.dataChange, 2, ['#00FF19'], ['#ff0905'], ['#ffffff']) 
            },
            tooltip :{
                enabled: false
            }
        },
    }

    return (
        <div className="chart-keuangan">
            <ReactApexChart options={data.options} series={data.series} type="area" height={props.height} />
        </div>
    )
}

export default ChartKeuangan
