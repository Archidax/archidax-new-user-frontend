import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import "zingchart/es6";
import ZingChart from "zingchart-react";

export default function VolumeChart() {
    let [ depthData, setDepthData ]=useState(null);
    const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);

    useEffect(() => {
        setDepthData({
            backgroundColor: "transparent transparent",
            type: "area",
            'scale-x': {
                // step: "30minute",
                transform: {
                  type: "date",
                  all: "%g:%i"
                },
                'items-overlap': true,
                'max-items':14,
                // label: {
                //   text: "Trading Day"
                // },
            },
            utc: true,
            timezone:-5, //EST time
            'scale-y': {
                values: "30:34:1",
                // format: "$%v",
                // label: {
                //   text: "Price"
                // },
            },
            series: [{
                values: [
                    [1457101800000,30.34], //03/04/2016 at 9:30 a.m. EST
                    [1457103600000,31.30], //10:00 a.m.
                    [1457105400000,30.95], //10:30 a.m.
                    [1457107200000,30.99], //11:00 a.m.
                    [1457109000000,32.33], //11:30 a.m.
                    [1457110800000,33.34], //12:00 p.m.
                    [1457112600000,33.01], //12:30 p.m.
                    [1457114400000,34], //1:00 p.m.
                    [1457116200000,33.64], //1:30 p.m.
                    [1457118000000,32.59], //2:00 p.m.
                    [1457119800000,32.60], //2:30 p.m.
                    [1457121600000,31.99], //3:00 p.m.
                    [1457123400000,31.14], //3:30 p.m.
                    [1457125200000,32.34], //4:00 p.m.
                ]
            }],
        });
    }, [setDepthData])

    return (
        <div>
            { depthData &&
                <ZingChart data={depthData} className="mt-3"></ZingChart>
            }
        </div>
    )
}
