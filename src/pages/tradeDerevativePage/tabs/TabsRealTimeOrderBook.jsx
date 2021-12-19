import React from 'react'

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function TabsRealTimeOrderBook() {
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
                    Time
                </div>
            </div>
            <div className="bodyTableRealTimeOrder">
                <div className="tableRealTimeOrder">
                    {
                        dummy.map((item, index) => {
                            return(
                                <div className="bodyTrTable" key={index}>
                                    <div className={`bodyTdTable d-flex flex-column justify-content-center font-14 ${Math.floor(Math.random() * 10) % 2 === 0 ? `ax-text-bullish` : `ax-text-danger`}`}>
                                        {Math.floor(Math.random() * 100000)}
                                    </div>
                                    <div className="bodyTdTable d-flex flex-column justify-content-center font-14 text-white text-right">
                                        {Math.floor(Math.random() * 100)}
                                    </div>
                                    <div className="bodyTdTable d-flex flex-column justify-content-center font-14 text-white text-right">
                                        11:14:20
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

export default TabsRealTimeOrderBook
