import React from 'react'

function TabsCloseOrderLong() {
    return (
        <React.Fragment>
            <div className="tabNav-orderCloseLongShort nav" id="myTab" role="tablist">
                <button className="nav-itemOrderCloseLongShort active" id="tradeDerivativeOrderCloseLongLimit-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseLongLimit" role="tab" aria-controls="tradeDerivativeOrderCloseLongLimit" aria-selected="true">
                    Limit
                </button>
                <button className="nav-itemOrderCloseLongShort" id="tradeDerivativeOrderCloseLongMarket-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseLongMarket" role="tab" aria-controls="tradeDerivativeOrderCloseLongMarket" aria-selected="false">
                    Market
                </button>
                <button className="nav-itemOrderCloseLongShort" id="tradeDerivativeOrderCloseLongConditional-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseLongConditional" role="tab" aria-controls="tradeDerivativeOrderCloseLongConditional" aria-selected="false">
                    Contitional
                </button>
            </div>
            <div className="tab-content tabContent-orderCloseLongShort mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeOrderCloseLongLimit" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseLongLimit-tab">
                    Close Long Limit
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderCloseLongMarket" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseLongMarket-tab">
                    Close Long Market
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderCloseLongConditional" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseLongConditional-tab">
                    Close Long Conditional
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsCloseOrderLong
