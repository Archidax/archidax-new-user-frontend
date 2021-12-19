import React from 'react'
import { useSelector } from 'react-redux';

// Import Components
import TraficTradeDerivative from './components/TraficTradeDerivative';
import MainContentTradeDerivative from './components/MainContentTradeDerivative';

function TradeDeverativeContent() {
    const { mode } = useSelector((state) => state.daynightReducer);

    return (
        <div className={`bodyTradeDerivative ${mode ? "body-trade2-dark" : "body-trade2"}`}>
            <div className="container-tradeDerivative">
                    
                <TraficTradeDerivative mode={mode} />

                <MainContentTradeDerivative />
                
            </div>
        </div>
    )
}

export default TradeDeverativeContent
