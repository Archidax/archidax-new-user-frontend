import React from 'react'
import { getPaymentIcon } from '../../../../assets/payments'
function PickPayment() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("Transfer Bank")} className="w-100" alt="" srcset="" /></div>
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("Alfamart")} className="w-100" alt="" srcset="" /></div>
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("GoPay")} className="w-100" alt="" srcset="" /></div>
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("DANA")} className="w-100" alt="" srcset="" /></div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("ShopeePay")} className="w-100" alt="" srcset="" /></div>
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("LinkAja")} className="w-100" alt="" srcset="" /></div>
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("OVO")} className="w-100" alt="" srcset="" /></div>
                <div style={{ cursor: "pointer" }} className="col-2 p-0 m-2 bg-white"><img src={getPaymentIcon("QRIS")} className="w-100" alt="" srcset="" /></div>
            </div>
        </div>
    )
}

export default PickPayment
