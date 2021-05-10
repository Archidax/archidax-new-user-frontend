import React from 'react'
import { getPaymentBanner, getPaymentIcon, getPaymentName } from '../../../../assets/payments'

function DropdownPayment({ data, onChange, value, disabled }) {
    return (
        <div className="dropdown ci-dropdown">
            <div className="ci-dropdown-btn dropdown-toggle ci-md w-100 p-0 py-2" id="dropdownRiwayatTarikCrypto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ overflow: "hidden" }}>
                <div className="mb-1">{!value ? "" : <img src={getPaymentBanner(value)} alt="" srcset="" className="mr-2 font-12 w-100" />}</div>
                {value ? <span className="mx-2">{getPaymentName(value)}</span> : <span className="p-2">Pilih Salah Satu</span>}
            </div>
            <div className="ci-dropdown-menu dropdown-menu w-100" aria-labelledby="dropdownRiwayatTarikCrypto">
                <div className="container-fluid ci-dropdown-menu-content px-0 pb-0 ci-bg-primary">
                    {data.map(el => {
                        return (
                            <button className="dropdown-item py-1" type="button" onClick={() => onChange(el.value)} value={el.value}>
                                <div className="row">
                                    <div className="col-12 text-left py-3" style={{ borderBottom: "1px dashed grey" }}>
                                        <div className="font-bold font-12 " style={{ verticalAlign: "middle" }}><span className="text-white">{el.type}</span></div>
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DropdownPayment
