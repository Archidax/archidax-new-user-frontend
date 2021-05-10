import React from 'react';
import CardKeuangan from './CardKeuangan';
import SliderKeuangan from './SliderKeuangan';
import TableKeuangan from './table';

import { HomeMarket } from "../../stores/chart/functions";

function ContentKeuangan() {
    let [MarketData, setMarketData] = React.useState([]);
    React.useEffect(() => {
        HomeMarket((Market) => {
            Market.length&&setMarketData(Market.filter(el => {return el.symbol.split("/")[1] === "IDR"}));
        });
    }, [setMarketData]);
    
    return (
        <div className="container-fluid keuangan pt-4">
            <CardKeuangan MarketData={MarketData}/>
            <div className="row no-gutters pt-4">
                <div className="col-2  col-md-1 d-flex justify-content-center align-items-center button-slider-keuangan">
                    <h3 className="font-14 mb-0 text-white">Coin Ticker</h3>
                </div>
                <div className="col-12 col-md-11">
                    <SliderKeuangan MarketData={MarketData}/>
                </div>
            </div>
            
            <TableKeuangan MarketData={MarketData}/>
        </div>
    )
}

export default ContentKeuangan
