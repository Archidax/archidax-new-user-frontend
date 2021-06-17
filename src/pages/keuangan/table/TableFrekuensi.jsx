import React from 'react';
import ReactLoading from 'react-loading';

function TableFrekuensi({MarketData}) {
    const tableHeader = [ "Coin Name", "Buy Freq", "Sell Freq", "Total" ];
    return (
        <div>
            <h3 className="font-14 text-gold">Frequence</h3>
            <div className="table-responsive table-keuangan">
                {
                    MarketData?
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
                            MarketData.length&&MarketData.sort((a, b) => (b.frequency_buy+b.frequency_sell) - (a.frequency_buy+a.frequency_sell))
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
                    </table>:
                    <>  
                        <div style={{width: "100%", height: "200px"}} className="d-flex justify-content-center align-items-center">
                            <ReactLoading type={'spin'} color={'#ffffff'} height={'50px'} width={'50px'} />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default TableFrekuensi
