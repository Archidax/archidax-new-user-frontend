import React from 'react'

// Import Tabs
import CloseShortConditional from './tabsordercloseshort/CloseShortConditional'
import CloseShortLimit from './tabsordercloseshort/CloseShortLimit'
import CloseShortMarket from './tabsordercloseshort/CloseShortMarket'

function TabsCloseOrderShort() {
    return (
        <React.Fragment>
            <div className="tabNav-orderCloseLongShort nav" id="myTab" role="tablist">
                <button className="nav-itemOrderCloseLongShort active" id="tradeDerivativeOrderCloseShortLimit-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseShortLimit" role="tab" aria-controls="tradeDerivativeOrderCloseShortLimit" aria-selected="true">
                    Limit
                </button>
                <button className="nav-itemOrderCloseLongShort" id="tradeDerivativeOrderCloseShortMarket-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseShortMarket" role="tab" aria-controls="tradeDerivativeOrderCloseShortMarket" aria-selected="false">
                    Market
                </button>
                <button className="nav-itemOrderCloseLongShort" id="tradeDerivativeOrderCloseShortConditional-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseShortConditional" role="tab" aria-controls="tradeDerivativeOrderCloseShortConditional" aria-selected="false">
                    Contitional
                </button>
            </div>
            <div className="tab-content tabContent-orderCloseLongShort mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeOrderCloseShortLimit" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseShortLimit-tab">
                    <CloseShortLimit />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderCloseShortMarket" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseShortMarket-tab">
                    <CloseShortMarket />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderCloseShortConditional" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseShortConditional-tab">
                    <CloseShortConditional />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsCloseOrderShort
