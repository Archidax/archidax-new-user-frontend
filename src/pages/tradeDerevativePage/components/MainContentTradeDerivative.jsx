import React from 'react'

// Import Content
import ChartTrade from '../../../components/tradeComponents/chart'
import Order from './content/Order'
import OrderBook from './content/OrderBook'
import TradingHistory from './content/TradingHistory'

function MainContentTradeDerivative() {
    return (
        <div className="mainContentTradeDerivative">
            <div className="contentTradeDerivative-left">
                <div className="contentTradeDerivative-leftTop">
                    <div className="contentTradeDerivative-chart">
                        <ChartTrade />
                    </div>
                    
                    <div className="contentTradeDerivative-orderBook">
                        <OrderBook />
                    </div>
                </div>
                
                <div className="contentTradeDerivative-leftBottom">
                    <div className="contentTradeDerivative-tradeHistory">
                        <TradingHistory />
                    </div>
                </div>
            </div>

            <div className="contentTradeDerivative-right">
                <div className="contentTradeDerivative-order">
                    <Order />
                </div>
            </div>
        </div>
    )
}

export default MainContentTradeDerivative
