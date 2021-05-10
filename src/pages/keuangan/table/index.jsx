import React from 'react'
import Table24Jam from './Table24Jam'
import TableFrekuensi from './TableFrekuensi'
import TableTopGainer from './TableTopGainer'
import TableTopLoser from './TableTopLoser'

function TableKeuangan({MarketData}) {
    return (
        <div className="row my-4">
            <div className="col col-md-3">
                <div className="card ci-customCard-1">
                    <div className="card-body">
                        <Table24Jam MarketData={MarketData}/>
                    </div>
                </div>
            </div>
            <div className="col col-md-3">
                <div className="card ci-customCard-1">
                    <div className="card-body">
                        <TableTopLoser MarketData={MarketData}/>
                    </div>
                </div>
            </div>
            <div className="col col-md-3">
                <div className="card ci-customCard-1">
                    <div className="card-body">
                        <TableTopGainer MarketData={MarketData}/>
                    </div>
                </div>
            </div>
            <div className="col col-md-3">
                <div className="card ci-customCard-1">
                    <div className="card-body">
                        <TableFrekuensi MarketData={MarketData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableKeuangan
