import React from 'react'

function UsdTabsForm() {
    return (
        <div className="container-fluid">
            <div className="row no-gutters mb-2">
                <div className="col-12 col-md-6">
                    <p className="text-white font-roboto font-16 mb-0">Buy</p>
                </div>
                <div className="col-12 col-md-6 text-left text-sm-right">
                    <label className="text-gold font-roboto font-14 mb-0">Balance</label>
                    <p className="text-white font-roboto font-16 mb-0">0.000010121 USDT</p>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="input-group ci-inputDefault-border">
                        <div className="ci-inputDefault-border-appendL">
                            <label className="text-gold font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">Price</label>
                        </div>
                        <input type="number" className="form-control ci-inputDefault-border-input" placeholder="Input Price" aria-label="Username" aria-describedby="basic-addon1" style={{paddingLeft: "62px"}}/>
                        <div className="ci-inputDefault-border-appendR">
                            <label className="text-gold font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">USDT</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4 my-3">
                <div className="col-12 col-md-3">
                    <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white',
                    }} className="font-roboto w-100 font-12 mr-2 p-2">25%</button>
                </div>
                <div className="col-12 col-md-3">
                    <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white',
                    }} className="font-roboto w-100 font-12 p-2">50%</button>
                </div>
                <div className="col-12 col-md-3">
                    <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white',
                    }} className="font-roboto w-100 font-12 p-2">75%</button>
                </div>
                <div className="col-12 col-md-3">
                    <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white',
                    }} className="font-roboto w-100 font-12 p-2">100%</button>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="input-group ci-inputDefault-border">
                        <div className="ci-inputDefault-border-appendL">
                            <label className="text-gold font-roboto font-12 mb-0 ci-inputDefault-border-appendL-icon">Amount</label>
                        </div>
                        <input type="number" className="form-control ci-inputDefault-border-input" placeholder="Input Amount" aria-label="Username" aria-describedby="basic-addon1" style={{paddingLeft: "62px"}}/>
                        <div className="ci-inputDefault-border-appendR">
                            <label className="text-gold font-roboto font-12 mb-0 ci-inputDefault-border-appendL-icon">MICIN</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="input-group ci-inputDefault-border">
                        <div className="ci-inputDefault-border-appendL">
                            <label className="text-gold font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">Total</label>
                        </div>
                        <input type="number" className="form-control ci-inputDefault-border-input" placeholder="Input Total" aria-label="Username" aria-describedby="basic-addon1" style={{paddingLeft: "62px"}}/>
                        <div className="ci-inputDefault-border-appendR">
                            <label className="text-gold font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">USDT</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="card ci-customCard-1">
                        <div className="card-body py-3" style={{background: "#2C355A", borderRadius: "6px"}}>
                            <label className="text-white font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">You Recive: <span className="text-gold font-roboto font-14 mb-0 mx-2">20</span> WAVES</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="form-group mb-0">
                        <div className="custom-control custom-switch switch-secondary">
                            <input type="checkbox" className="custom-control-input" id="customSwitchSuccess"/>
                            <label className="font-12 custom-control-label text-muted text-white" for="customSwitchSuccess">
                                I agree to the Terms Of Use (including purchaser's citizenship and/or residency restrictions) and Privacy Policy
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="form-group mb-0">
                        <div className="custom-control custom-switch switch-secondary">
                            <input type="checkbox" className="custom-control-input" id="customSwitchSuccess"/>
                            <label className="font-12 custom-control-label text-muted text-white" for="customSwitchSuccess">
                                I am not a citizen and/or resident of FATF blacklist countries and/or countries not recognized by the Estonia/EU.
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <button className="ci-btn-warning ci-md w-100 font-weight-bold" style={{background: "#f9ba42", borderRadius: "8px"}} disabled>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default UsdTabsForm
