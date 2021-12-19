import React from 'react'

// Import Tabs
import TabsOpenOrder from '../../tabs/tabsorder/TabsOpenOrder'
import TabsCloseOrder from '../../tabs/tabsorder/TabsCloseOrder'

function Order() {
    return (
        <React.Fragment>
            <div className="tabNav-order nav" id="myTab" role="tablist">
                <button className="nav-itemOrder active" id="tradeDerivativeOrderOpen-tab" data-toggle="tab" href="#tradeDerivativeOrderOpen" role="tab" aria-controls="tradeDerivativeOrderOpen" aria-selected="true">
                    Open
                </button>
                <button className="nav-itemOrder" id="tradeDerivativeOrderClose-tab" data-toggle="tab" href="#tradeDerivativeOrderClose" role="tab" aria-controls="tradeDerivativeOrderClose" aria-selected="false">
                    Close
                </button>
            </div>
            <div className="tab-content tabContent-order mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeOrderOpen" role="tabpanel" aria-labelledby="tradeDerivativeOrderOpen-tab">
                    <TabsOpenOrder />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeOrderClose" role="tabpanel" aria-labelledby="tradeDerivativeOrderClose-tab">
                    <TabsCloseOrder />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Order
