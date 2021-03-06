import React from 'react';
import {convertNumber} from '../../../assets/js'

function Table24Jam({MarketData}) {

    const tableHeader = [
        "Rank", "Nama Koin", "Harga Terakhir", "Volume",
      ];

    return (
        <div>
            <h3 className="font-14 text-gold">Top coin berdasarkan volume 24 jam terakhir</h3>
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
                        MarketData&&MarketData.length&&MarketData.sort((a, b) => b.price24h_priceVolume - a.price24h_priceVolume)
                        .map((item, index) => {
                        return (
                            <tr key={index} className="table-row-custom">
                                <td className="font-12">#{index+1}</td>
                                <td className="font-12 d-flex align-items-center">
                                    <img src={item.icon} alt="" className="mr-2"/>
                                    {item.assetName}
                                </td>
                                <td className="font-12">{convertNumber.toMoney(item.price24h_close)}</td>
                                <td className={`font-12 ${convertNumber.tradeUpDownChange(item.price24h_change, 2)}`}>
                                    {convertNumber.toRupiah(item.price24h_priceVolume)}
                                </td>
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

export default Table24Jam
