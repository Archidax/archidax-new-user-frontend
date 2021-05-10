import React from 'react'

function VerificationStep({step1}) {
    return (
        <div className="d-flex" style={{ height: "50px" }}>
            <div className="h-100 d-inline-block rounded-circle d-flex justify-content-center align-items-center" style={{ width: "50px", backgroundColor: "#f9ba42" }}>
                <i className="far fa-address-card"></i>
            </div>
            <div className="h-50 d-inline-block border-bottom" style={{ width: "120px" }}></div>
            <div className="h-100 d-inline-block rounded-circle d-flex justify-content-center align-items-center" style={{ width: "50px", backgroundColor: !step1 ? "#f9ba42" : "#AEB4CE" }}>
            <i className="far fa-address-card"></i>
            </div>
        </div>
    )
}

export default VerificationStep
