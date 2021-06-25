import React from 'react'
import NoData from '../datas/NoData'

function TabsOrderHistoryTradeHistory() {
    return (
        <>
            <div className="tableResponsive">
                <table className="table mb-0">
                    <thead>
                        <tr>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Contract</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Leverage</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Trade Type</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Filled Position</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Order Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Average Traded Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Profit/Loss</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Fee(BTC)</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Order Type</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Order Time</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Status</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NoData colspan="12" />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TabsOrderHistoryTradeHistory
