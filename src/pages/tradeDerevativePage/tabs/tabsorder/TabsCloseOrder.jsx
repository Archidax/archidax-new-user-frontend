import React from 'react'

// Import Tabs
import TabsCloseOrderLong from './tabsorderclose/TabsCloseOrderLong'
import TabsCloseOrderShort from './tabsorderclose/TabsCloseOrderShort'

function TabsCloseOrder() {
    return (
        <React.Fragment>
            <div className="tabNav-orderClose nav" id="myTab" role="tablist">
                <button className="nav-itemOrderClose active" id="tradeDerivativeOrderCloseLong-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseLong" role="tab" aria-controls="tradeDerivativeOrderCloseLong" aria-selected="true">
                    Long
                </button>
                <button className="nav-itemOrderClose" id="tradeDerivativeOrderCloseShort-tab" data-toggle="tab" href="#tradeDerivativeOrderCloseShort" role="tab" aria-controls="tradeDerivativeOrderCloseShort" aria-selected="false">
                    Short
                </button>
            </div>
            <div className="tab-content tabContent-orderClose mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeOrderCloseLong" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseLong-tab">
                    <TabsCloseOrderLong />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderCloseShort" role="tabpanel" aria-labelledby="tradeDerivativeOrderCloseShort-tab">
                    <TabsCloseOrderShort />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsCloseOrder
