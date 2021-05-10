import React from 'react';
import bitcoinLogo from '../../../assets/img/feelogo/Bitcoin_BTC.svg';
import panahLose from '../../../assets/img/feelogo/panah_lose.svg';
import {convertNumber} from '../../../assets/js'

function TableTopLoser({MarketData}) {

    const tableHeader = [
        "Nama Koin", "Harga", "Persentase",
    ];

    return (
        <div>
            <h3 className="font-14 text-gold"><img src={panahLose} alt="" width={10}/> Top Loser</h3>
            <div className="table-responsive table-keuangan">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        {
                        tableHeader.map((head, index) => {
                            return (
                            <th scope="col" key={index} className="table-header font-12">{head}</th>
                            )
                        })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        MarketData&&MarketData.length&&MarketData.sort((a, b) => a.price24h_change - b.price24h_change)
                        .map((item, index) => {
                        return (
                            <tr key={index} className="table-row-custom">
                                <td className="font-12 d-flex align-items-center">
                                    <img src={item.icon} alt="" className="mr-2"/>
                                    {item.assetName}
                                </td>
                                <td className="font-12">{convertNumber.toMoney(item.price24h_close)}</td>
                                <td className={`font-12 ${convertNumber.tradeUpDownChange(item.price24h_change, 2)}`}>{convertNumber.tradeChange(item.price24h_change, 2)}</td>
                            </tr>
                        )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTopLoser
