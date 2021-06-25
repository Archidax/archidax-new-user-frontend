import React from 'react'

// Import Tabs
import TabsMarketOrderBook from '../../tabs/TabsMarketOrderBook'
import TabsRealTimeOrderBook from '../../tabs/TabsRealTimeOrderBook'

function OrderBook() {
    return (
        <React.Fragment>
            <div className="tabNav-orderBook nav" id="myTab" role="tablist">
                <button className="nav-itemOrderBook active" id="tradeDerivativeMarket-tab" data-toggle="tab" href="#tradeDerivativeMarket" role="tab" aria-controls="tradeDerivativeMarket" aria-selected="true">
                    Market
                </button>
                <button className="nav-itemOrderBook" id="tradeDerivativeRealTimeTraded-tab" data-toggle="tab" href="#tradeDerivativeRealTimeTraded" role="tab" aria-controls="tradeDerivativeRealTimeTraded" aria-selected="false">
                    Real-time Traded
                </button>
            </div>
            <div className="tab-content mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeMarket" role="tabpanel" aria-labelledby="tradeDerivativeMarket-tab">
                    <TabsMarketOrderBook />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeRealTimeTraded" role="tabpanel" aria-labelledby="tradeDerivativeRealTimeTraded-tab">
                    <TabsRealTimeOrderBook />
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderBook
