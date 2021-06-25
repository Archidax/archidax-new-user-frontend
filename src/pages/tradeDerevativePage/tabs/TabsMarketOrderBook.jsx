import React from 'react'

// Import Images
import iconBearishBullish from '../../../assets/img/icons/burgerBearishBullish.svg'
import iconBullish from '../../../assets/img/icons/burgerBullish.svg'
import iconBearish from '../../../assets/img/icons/burgerBearish.svg'

// Import Tabs
import TabsMarketOrderBookBearishBullish from './TabsMarketOrderBookBearishBullish'
import TabsMarketOrderBookBullish from './TabsMarketOrderBookBullish'
import TabsMarketOrderBookBearish from './TabsMarketOrderBookBearish'

function TabsMarketOrderBook() {
    return (
        <React.Fragment>
            <div className="tabNav-marketOrderBook nav" id="myTab" role="tablist">
                <button className="nav-itemMarketOrderBook active" id="tradeDerivativeBearishBullish-tab" data-toggle="tab" href="#tradeDerivativeBearishBullish" role="tab" aria-controls="tradeDerivativeBearishBullish" aria-selected="true">
                    <img src={iconBearishBullish} alt="..." className="img-fluid" width={20}/>
                </button>
                <button className="nav-itemMarketOrderBook" id="tradeDerivativeBullish-tab" data-toggle="tab" href="#tradeDerivativeBullish" role="tab" aria-controls="tradeDerivativeBullish" aria-selected="false">
                    <img src={iconBullish} alt="..." className="img-fluid" width={20}/>
                </button>
                <button className="nav-itemMarketOrderBook" id="tradeDerivativeBearish-tab" data-toggle="tab" href="#tradeDerivativeBearish" role="tab" aria-controls="tradeDerivativeBearish" aria-selected="false">
                    <img src={iconBearish} alt="..." className="img-fluid" width={20}/>
                </button>
            </div>
            <div className="tab-content mt-2" id="myTabContent">
                <div className="tab-pane fade show active" id="tradeDerivativeBearishBullish" role="tabpanel" aria-labelledby="tradeDerivativeBearishBullish-tab">
                    <TabsMarketOrderBookBearishBullish />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeBullish" role="tabpanel" aria-labelledby="tradeDerivativeBullish-tab">
                    <TabsMarketOrderBookBullish />
                </div>
                <div className="tab-pane fade" id="tradeDerivativeBearish" role="tabpanel" aria-labelledby="tradeDerivativeBearish-tab">
                    <TabsMarketOrderBookBearish />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsMarketOrderBook
