import React from 'react'

function HelpNav({className}) {
    return (
        <div className={`col-12 col-md-12 mt-4 ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-white">Apakah anda mengalami kesulitan?</h4>
                        <span className="text-gray2">Tanyakan pada tim cryptoindex</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <button className="ci-btn-success w-100 py-1 font-14">Unduh Media Kit</button>
                    </div>
                </div>
                <div className="row mt-2 no-gutters">
                    <div className="col-12 my-2">
                        <button className="ci-btn-primary text-left d-flex align-items-center justify-content-center w-100 py-1">
                            <i className="fas fa-headset mr-2 font-13"></i>
                            <span className="font-13">Live Chat</span>
                        </button>
                    </div>
                    <div className="col-12 my-2">
                        <button className="ci-btn-primary text-left d-flex align-items-center justify-content-center w-100 py-1">
                            <i className="fas fa-envelope mr-2 font-13"></i>
                            <span className="font-13">helpdesk@cryptoindex.id</span>
                        </button>
                    </div>
                    <div className="col-12 my-2">
                        <button className="ci-btn-primary text-left d-flex align-items-center justify-content-center w-100 py-1">
                            <i className="fas fa-phone mr-2 font-13"></i>
                            <span className="font-13">+62 811 9041 234</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpNav
