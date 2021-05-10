import React from 'react'

function VerificationWaiting() {
    return (
        <div className="container-fluid p-4 text-center" style={{ height: "92vh" }}>
            <div className="text-white font-12 p-3 d-flex align-items-center flex-column justify-content-center h-100" style={{ backgroundColor: "#151933", border: "none" }}>
                <div><i className="far fa-address-card fa-10x"></i></div>
                <div className="font-20 font-bold font-roboto mt-3">Sedang Diproses</div>
                <div className="font-16 font-bold font-roboto">Verifikasi KYC anda sedang kami tinjau. Proses verifikasi berlangsung selama 2-3 jam pada hari kerja. </div>      
            </div>
        </div>

    )
}

export default VerificationWaiting
