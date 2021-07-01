import React from 'react'
import OpenShortConditional from './tabsorderopenshort/OpenShortConditional'
import OpenShortLimit from './tabsorderopenshort/OpenShortLimit'
import OpenShortMarket from './tabsorderopenshort/OpenShortMarket'

function TabsOpenOrderShort() {
    return (
        <React.Fragment>
            <div className="tabNav-orderOpenLongShort nav" id="myTab" role="tablist">
                <button className="nav-itemOrderOpenLongShort active" id="tradeDerivativeOrderOpenShortLimit-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenShortLimit" role="tab" aria-controls="tradeDerivativeOrderOpenShortLimit" aria-selected="true">
                    Limit
                </button>
                <button className="nav-itemOrderOpenLongShort" id="tradeDerivativeOrderOpenShortMarket-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenShortMarket" role="tab" aria-controls="tradeDerivativeOrderOpenShortMarket" aria-selected="false">
                    Market
                </button>
                <button className="nav-itemOrderOpenLongShort" id="tradeDerivativeOrderOpenShortConditional-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenShortConditional" role="tab" aria-controls="tradeDerivativeOrderOpenShortConditional" aria-selected="false">
                    Contitional
                </button>
            </div>
            <div className="tab-content tabContent-orderOpenLongShort mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeOrderOpenShortLimit" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenShortLimit-tab">
                    <OpenShortLimit />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderOpenShortMarket" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenShortMarket-tab">
                    <OpenShortMarket />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderOpenShortConditional" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenShortConditional-tab">
                    <OpenShortConditional />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsOpenOrderShort
