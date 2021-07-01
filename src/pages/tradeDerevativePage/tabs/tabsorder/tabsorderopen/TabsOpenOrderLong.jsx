import React from 'react'
import OpenLongConditional from './tabsorderopenlong/OpenLongConditional'

// Import Tabs
import OpenLongLimit from './tabsorderopenlong/OpenLongLimit'
import OpenLongMarket from './tabsorderopenlong/OpenLongMarket'

function TabsOpenOrderLong() {
    return (
        <React.Fragment>
            <div className="tabNav-orderOpenLongShort nav" id="myTab" role="tablist">
                <button className="nav-itemOrderOpenLongShort active" id="tradeDerivativeOrderOpenLongLimit-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenLongLimit" role="tab" aria-controls="tradeDerivativeOrderOpenLongLimit" aria-selected="true">
                    Limit
                </button>
                <button className="nav-itemOrderOpenLongShort" id="tradeDerivativeOrderOpenLongMarket-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenLongMarket" role="tab" aria-controls="tradeDerivativeOrderOpenLongMarket" aria-selected="false">
                    Market
                </button>
                <button className="nav-itemOrderOpenLongShort" id="tradeDerivativeOrderOpenLongConditional-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenLongConditional" role="tab" aria-controls="tradeDerivativeOrderOpenLongConditional" aria-selected="false">
                    Contitional
                </button>
            </div>
            <div className="tab-content tabContent-orderOpenLongShort mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeOrderOpenLongLimit" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenLongLimit-tab">
                    <OpenLongLimit />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderOpenLongMarket" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenLongMarket-tab">
                    <OpenLongMarket />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderOpenLongConditional" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenLongConditional-tab">
                    <OpenLongConditional />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsOpenOrderLong
