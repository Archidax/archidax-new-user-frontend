import React from 'react'
import NoData from '../datas/NoData'

function TabsConditionalOrderTradeHistory() {
    return (
        <>
            <div className="tableResponsive">
                <table className="table mb-0">
                    <thead>
                        <tr>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Contract</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Leverage</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Trade Type</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Order Size(Cont)</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Trigger Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Strike Price</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Order Time</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Status</th>
                            <th className="border-0 py-2 font-12 align-middle ax-text-blueLight font-weight-normal">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NoData colspan="9" />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TabsConditionalOrderTradeHistory
