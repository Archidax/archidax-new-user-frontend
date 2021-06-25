import React from 'react'

// Import Tabs
import TabsOpenOrderLong from './tabsorderopen/TabsOpenOrderLong'
import TabsOpenOrderShort from './tabsorderopen/TabsOpenOrderShort'

function TabsOpenOrder() {
    return (
        <React.Fragment>
            <div className="tabNav-orderOpen nav" id="myTab" role="tablist">
                <button className="nav-itemOrderOpen active" id="tradeDerivativeOrderOpenLong-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenLong" role="tab" aria-controls="tradeDerivativeOrderOpenLong" aria-selected="true">
                    Long
                </button>
                <button className="nav-itemOrderOpen" id="tradeDerivativeOrderOpenShort-tab" data-toggle="tab" href="#tradeDerivativeOrderOpenShort" role="tab" aria-controls="tradeDerivativeOrderOpenShort" aria-selected="false">
                    Short
                </button>
            </div>
            <div className="tab-content tabContent-orderOpen mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeOrderOpenLong" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenLong-tab">
                    <TabsOpenOrderLong />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderOpenShort" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpenShort-tab">
                    <TabsOpenOrderShort />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsOpenOrder
