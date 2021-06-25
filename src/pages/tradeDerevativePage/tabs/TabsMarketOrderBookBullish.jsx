import React from 'react'

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function TabsMarketOrderBookBullish() {
    return (
        <React.Fragment>
            <div className="headTable">
                <div className="thTable font-14 ax-text-gray">
                    Price(USDT)
                </div>
                <div className="thTable font-14 ax-text-gray text-right">
                    Amount
                </div>
                <div className="thTable font-14 ax-text-gray text-right">
                    Total
                </div>
            </div>
            <div className="bodyTableBullishBearish">
                <div className="lastPrice">
                    <span className="price">37980</span>
                    <i className="fas fa-flag iconFlag"></i>
                    <span className="priceFlag">37886.4</span>
                </div>
                
                <div className="tableBullish">
                    {
                        dummy.map((item, index) => {
                            return(
                                <div className="bodyTrTable" key={index}>
                                    <div className="bodyTdTable d-flex flex-column justify-content-center font-14 ax-text-bullish">
                                        37908.5
                                    </div>
                                    <div className="bodyTdTable d-flex flex-column justify-content-center font-14 text-white text-right">
                                        1642
                                    </div>
                                    <div className="bodyTdTable d-flex flex-column justify-content-center bullish font-14 text-white text-right">
                                        <div className="bg-progressBullish"></div>
                                        12678
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabsMarketOrderBookBullish
