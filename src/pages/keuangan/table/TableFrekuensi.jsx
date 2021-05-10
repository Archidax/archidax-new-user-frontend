import React from 'react';

function TableFrekuensi({MarketData}) {
    const tableHeader = [
        "Nama Koin", "Freq Beli", "Freq Jual", "Total"
      ];
    
    const data = [
        { nama_koin:'BTC', freq_beli:'100.000', freq_jual:'100.000', total:'200.000',},
        { nama_koin:'BTC', freq_beli:'100.000', freq_jual:'100.000', total:'200.000',},
        { nama_koin:'BTC', freq_beli:'100.000', freq_jual:'100.000', total:'200.000',},
    ]
    return (
        <div>
            <h3 className="font-14 text-gold">Frekuensi</h3>
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
                        MarketData&&MarketData.length&&MarketData.sort((a, b) => (b.frequency_buy+b.frequency_sell) - (a.frequency_buy+a.frequency_sell))
                        .map((item, index) => {
                        return (
                            <tr key={index} className="table-row-custom">
                                <td className="font-12 d-flex align-items-center">
                                    <img src={item.icon} alt="" className="mr-2"/>
                                    {item.assetName}
                                </td>
                                <td className="font-12">{item.frequency_buy}</td>
                                <td className="font-12">{item.frequency_sell}</td>
                                <td className="font-12">{item.frequency_buy+item.frequency_sell}</td>
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

export default TableFrekuensi
