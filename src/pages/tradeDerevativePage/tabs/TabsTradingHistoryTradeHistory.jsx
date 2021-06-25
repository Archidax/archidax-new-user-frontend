import React from 'react'
import NoData from '../datas/NoData'

function TabsTradingHistoryTradeHistory() {
    return (
        <>
            <div className="tableResponsive">
                <table className="table mb-0">
                    <thead>
                        <tr>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Contract</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Leverage</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Trade Type</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Filled(Cont)</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Vol</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Trade Time</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">P&L(BTC)</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Fee(BTC)</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Margin Change(Bonus)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NoData colspan="10" />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TabsTradingHistoryTradeHistory
