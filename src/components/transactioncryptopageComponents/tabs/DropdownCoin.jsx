import React from 'react'
import { useHistory } from 'react-router-dom'
import USDTCoin from '../../../assets/img/trade/cryptologo/Tether_USDT.svg'

function DropdownCoin({ data, action }) {
    const history = useHistory()
    const toCoin = (url) => {
        history.push(url)
    }
    return (
        <div className="dropdown ci-dropdown">
            <button className="ci-dropdown-btn dropdown-toggle ci-md w-100 rounded-0" type="button" id="dropdownRiwayatTarikCrypto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ overflow: "hidden" }}>

            </button>
            <div className="ci-dropdown-menu dropdown-menu w-100" aria-labelledby="dropdownRiwayatTarikCrypto">
                <div className="container-fluid ci-dropdown-menu-content px-0 pb-0">
                    <button className="dropdown-item py-1" type="button" onClick={() => toCoin(`/crypto/${action}/USDT`)} value="USDT">
                        <div className="row">
                            <div className="col-4">
                                <img src={USDTCoin} alt="coin" className="img-fluid" width={34} />
                            </div>
                            <div className="col-8 text-left">
                                <div className="font-bold font-14">USDT</div>
                                <div className="font-13">USD TETHER</div>
                            </div>
                        </div>
                    </button>
                    {data&&Array.isArray(data)&&data.map(el => {
                        if (el.base === "USDT") {
                            return (
                                <button className="dropdown-item py-1" type="button" onClick={() => toCoin(`/crypto/${action}/${el.initialSymbol}`)} value={el.initialSymbol}>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={el.icon} alt="coin" className="img-fluid" width={34} />
                                        </div>
                                        <div className="col-8 text-left">
                                            <div className="font-bold font-14">{el.initialSymbol}</div>
                                            <div className="font-13">{el.assetName}</div>
                                        </div>
                                    </div>
                                </button>
                            )
                        }
                        return (null);
                    })}
                </div>
            </div>
        </div>
    )
}

export default DropdownCoin
