import React from 'react'

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
                    Close Short Limit
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderCloseShortMarket" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseShortMarket-tab">
                    Close Short Market
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderCloseShortConditional" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseShortConditional-tab">
                    Close Short Conditional
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsCloseOrderShort
