import React from 'react'
import NoData from '../datas/NoData'

function TabsPositionTradeHistory() {
    return (
        <>
            <div className="tableResponsive">
                <table className="table mb-0">
                    <thead>
                        <tr>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Contract</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Leverage</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Close/Position</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Average Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Liquidation Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Mark Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Margin(BTC)</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Unrealized P&L(BTC)</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Estimated Profit%</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Take Profit/Stop Loss</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NoData colspan="11" />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TabsPositionTradeHistory
