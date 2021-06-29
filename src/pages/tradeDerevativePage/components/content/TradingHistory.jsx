import React from 'react'
import TabsConditionalOrderTradeHistory from '../../tabs/TabsConditionalOrderTradeHistory'
import TabsLimitOrderTradeHistory from '../../tabs/TabsLimitOrderTradeHistory'
import TabsOrderHistoryTradeHistory from '../../tabs/TabsOrderHistoryTradeHistory'
import TabsPositionTradeHistory from '../../tabs/TabsPositionTradeHistory'
import TabsTradingHistoryTradeHistory from '../../tabs/TabsTradingHistoryTradeHistory'

function TradingHistory() {
    return (
        <React.Fragment>
            <div className="tabNav-tradeHistory nav" id="myTab" role="tablist">
                <button className="nav-itemTradeHistory active" id="tradeDerivativePosition-tab" data-toggle="tab" href="#tradeDerivativePosition" role="tab" aria-controls="tradeDerivativePosition" aria-selected="true">
                    Position
                </button>
                <button className="nav-itemTradeHistory" id="tradeDerivativeLimitOrder-tab" data-toggle="tab" href="#tradeDerivativeLimitOrder" role="tab" aria-controls="tradeDerivativeLimitOrder" aria-selected="false">
                    Limit Order
                </button>
                <button className="nav-itemTradeHistory" id="tradeDerivativeConditionalOrder-tab" data-toggle="tab" href="#tradeDerivativeConditionalOrder" role="tab" aria-controls="tradeDerivativeConditionalOrder" aria-selected="false">
                    Conditional Order
                </button>
                <button className="nav-itemTradeHistory" id="tradeDerivativeOrderHistory-tab" data-toggle="tab" href="#tradeDerivativeOrderHistory" role="tab" aria-controls="tradeDerivativeOrderHistory" aria-selected="false">
                    Order History
                </button>
                <button className="nav-itemTradeHistory" id="tradeDerivativeTradingHistory-tab" data-toggle="tab" href="#tradeDerivativeTradingHistory" role="tab" aria-controls="tradeDerivativeTradingHistory" aria-selected="false">
                    Trading History
                </button>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativePosition" role="tabpanel" aria-labelledby="tradeDerivativePosition-tab">
                    <div className="contentTradeDerivative-tHistory">
                        <TabsPositionTradeHistory />
                    </div>
                </div>
                <div className="tab-pane fade" id="tradeDerivativeLimitOrder" role="tabpanel" aria-labelledby="tradeDerivativeLimitOrder-tab">
                    <div className="contentTradeDerivative-tHistory">
                        <TabsLimitOrderTradeHistory />
                    </div>
                </div>
                <div className="tab-pane fade" id="tradeDerivativeConditionalOrder" role="tabpanel" aria-labelledby="tradeDerivativeConditionalOrder-tab">
                    <div className="contentTradeDerivative-tHistory">
                        <TabsConditionalOrderTradeHistory />
                    </div>
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderHistory" role="tabpanel" aria-labelledby="tradeDerivativeOrderHistory-tab">
                    <div className="contentTradeDerivative-tHistory">
                        <TabsOrderHistoryTradeHistory />
                    </div>
                </div>
                <div className="tab-pane fade" id="tradeDerivativeTradingHistory" role="tabpanel" aria-labelledby="tradeDerivativeTradingHistory-tab">
                    <div className="contentTradeDerivative-tHistory">
                        <TabsTradingHistoryTradeHistory />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TradingHistory
