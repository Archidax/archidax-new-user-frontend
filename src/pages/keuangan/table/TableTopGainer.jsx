import React from 'react';
import panahGain from '../../../assets/img/feelogo/panah_gain.svg';
import {convertNumber} from '../../../assets/js'
import ReactLoading from 'react-loading';

function TableTopGainer({MarketData}) {

    const tableHeader = [ "Nama Koin", "Harga", "Persentase" ];

    return (
        <div>
            <h3 className="font-14 text-gold"><img src={panahGain} alt="" width={10}/> Top Gainer</h3>
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
                        MarketData.length&&MarketData.sort((a, b) => b.price24h_change - a.price24h_change)
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

export default TableTopGainer
