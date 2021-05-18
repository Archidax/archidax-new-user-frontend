import React from 'react'

function NavListPanduan({className}) {
    return (
        <div className={`col-12 col-md-4 ${className}`}>
            <div className="row">
                <div className="col-12">
                    <div className="form-group position-relative">
                        <div className="input-group ci-inputDefault-border">
                            <input type="text" className="form-control ci-inputDefault-border-input ci-pd" placeholder="Cari" name="search" required=""/>
                            <div className="ci-inputDefault-border-appendR">
                                <i className="fas fa-search ci-inputDefault-border-appendR-icon text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="list-group" id="list-tab" role="tablist" style={{height: "240px", overflowY: "auto"}}>
                        <a className="list-group-item list-group-item-action ci-list-panduan active" id="memahami-crypto" data-toggle="list" href="#memahami-cypto" role="tab">
                            What is Crypto ?
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan" id="keuntungan-atau-benefit-crypto-list" data-toggle="list" href="#keuntungan-atau-benefit-crypto" role="tab">
                            Benefits of Cryptocurrency
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan" id="mari-memulai-list" data-toggle="list" href="#mari-memulai" role="tab">
                            Let's Get Started
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan" id="persiapan-trading-list" data-toggle="list" href="#persiapan-trading" role="tab">
                            Things That Must Be Prepared Before Trading
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan" id="mengaktifkan-google-auth-list" data-toggle="list" href="#mengaktifkan-google-auth" role="tab">
                            Activating Google Authenticator
                        </a>
                        {/* <a className="list-group-item list-group-item-action ci-list-panduan" id="cara-deposit-dan-penarikan-list" data-toggle="list" href="#cara-deposit-dan-penarikan" role="tab">
                            Deposit dan Penarikan Rupiah
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan" id="cara-deposit-dan-penarikan-kripto-list" data-toggle="list" href="#cara-deposit-dan-penarikan-kripto" role="tab">
                            Deposit dan Penarikan Kripto
                        </a> */}
                        <a className="list-group-item list-group-item-action ci-list-panduan" id="metode-instan-limit-list" data-toggle="list" href="#metode-instan-limit" role="tab">
                            Metode Instan dan Metode Limit
                        </a>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <div className="row justify-content-end">
                        <div className="col-8 d-flex justify-content-end">
                            <button className="ci-btn-success">Download Media Kit</button>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-2">
                        <div className="col-10 text-right">
                            <h4 className="text-white">Are you having a trouble?</h4>
                            <span className="text-gray2">Ask the archidax team.</span>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-2">
                        <div className="col-12 col-md-8">
                            <button className="ci-btn-primary text-left d-flex align-items-center w-100 py-1">
                                <i className="fas fa-headset mr-2 font-26"></i>
                                <span className="font-14">Live Chat</span>
                            </button>
                        </div>
                    </div>
                    {/* <div className="row justify-content-end mt-2">
                        <div className="col-12 col-md-8">
                            <button className="ci-btn-primary text-left d-flex align-items-center w-100 py-1">
                                <i className="fas fa-envelope mr-2 font-26"></i>
                                <span className="font-14">helpdesk@cryptoindex.id</span>
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-2">
                        <div className="col-12 col-md-8">
                            <button className="ci-btn-primary text-left d-flex align-items-center w-100 py-1">
                                <i className="fas fa-phone mr-2 font-26"></i>
                                <span className="font-14">+62 811 9041 234</span>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default NavListPanduan
