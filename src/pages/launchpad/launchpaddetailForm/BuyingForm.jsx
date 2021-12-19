import React from 'react'
import { useSelector } from 'react-redux'

function BuyingForm({ status, coin, buy, coinPair, balance, amount, setAmount, total, setTotal, price }) {
    const userBalance = useSelector(state => state.launchpadReducer.userBalance)

    const setByAmount = (e) => {
        setAmount(e.target.value)
        setTotal(e.target.value * price)
    }

    const setByTotal = (e) => {
        setTotal(e.target.value)
        setAmount(e.target.value / price)
    }

    const setAmountByPercentage = (percent) => {
        const decimal = percent / 100
        setTotal(userBalance.baseBalance.balance * decimal)
        setAmount(userBalance.baseBalance.balance * decimal / price)
    }

    return (
        <div className="container-fluid">
            <div className="row no-gutters mb-2">
                <div className="col-12 col-md-6">
                    <p className="text-white font-roboto font-16 mb-0">Buy</p>
                </div>
                <div className="col-12 col-md-6 text-left text-sm-right">
                    <label className="text-gold font-roboto font-14 mb-0">Balance</label>
                    <p className="text-white font-roboto font-16 mb-0">{userBalance.baseBalance ? userBalance.baseBalance.balance : 0 } {coinPair}</p>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="input-group ci-inputDefault-border">
                        <div className="ci-inputDefault-border-appendL">
                            <label className="text-gold font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">Price</label>
                        </div>
                        <input
                            type="number"
                            className="form-control ci-inputDefault-border-input"
                            placeholder="Input Price" aria-label="Username" aria-describedby="basic-addon1"
                            style={{ paddingLeft: "62px" }}
                            value={price}
                        />
                        <div className="ci-inputDefault-border-appendR">
                            <label className="text-gold font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">{coinPair}</label>
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
                    }} className="font-roboto w-100 font-12 mr-2 p-2"
                        onClick={(e) => setAmountByPercentage(25)}
                    >25%</button>
                </div>
                <div className="col-12 col-md-3">
                    <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white',
                    }} className="font-roboto w-100 font-12 p-2"
                        onClick={(e) => setAmountByPercentage(50)}
                    >50%</button>
                </div>
                <div className="col-12 col-md-3">
                    <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white',
                    }} className="font-roboto w-100 font-12 p-2"
                        onClick={(e) => setAmountByPercentage(75)}
                    >75%</button>
                </div>
                <div className="col-12 col-md-3">
                    <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white',
                    }} className="font-roboto w-100 font-12 p-2"
                        onClick={(e) => setAmountByPercentage(100)}
                    >100%</button>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="input-group ci-inputDefault-border">
                        <div className="ci-inputDefault-border-appendL">
                            <label className="text-gold font-roboto font-12 mb-0 ci-inputDefault-border-appendL-icon">Amount</label>
                        </div>
                        <input
                            type="number"
                            className="form-control ci-inputDefault-border-input"
                            placeholder="Input Amount" aria-label="Username" aria-describedby="basic-addon1"
                            style={{ paddingLeft: "62px" }}
                            onChange={(e) => setByAmount(e)}
                            value={amount}
                        />
                        <div className="ci-inputDefault-border-appendR">
                            <label className="text-gold font-roboto font-12 mb-0 ci-inputDefault-border-appendL-icon">{coin}</label>
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
                        <input
                            type="number"
                            className="form-control ci-inputDefault-border-input"
                            placeholder="Input Total" aria-label="Username" aria-describedby="basic-addon1" style={{ paddingLeft: "62px" }}
                            onChange={(e) => setByTotal(e)}
                            value={total}
                        />
                        <div className="ci-inputDefault-border-appendR">
                            <label className="text-gold font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">{coinPair}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="card ci-customCard-1">
                        <div className="card-body py-3" style={{ background: "#2C355A", borderRadius: "6px" }}>
                            <label className="text-white font-roboto font-14 mb-0 ci-inputDefault-border-appendL-icon">You will receive: <span className="text-gold font-roboto font-14 mb-0 mx-2">{amount}</span> {coin}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <div className="form-group mb-0">
                        <div className="custom-control custom-switch switch-secondary">
                            <input type="checkbox" className="custom-control-input" id="customSwitch_1" />
                            <label className="font-12 custom-control-label text-muted text-white" for="customSwitch_1">
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
                            <input type="checkbox" className="custom-control-input" id="customSwitch_2" />
                            <label className="font-12 custom-control-label text-muted text-white" for="customSwitch_2">
                                I am not a citizen and/or resident of FATF blacklist countries and/or countries not recognized by BVI.
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row no-gutters my-3">
                <div className="col-12 col-md-12">
                    <button className={`${status.toUpperCase() === "ACTIVE" ? "ci-btn-success" : "btn-secondary"}  ci-md w-100 font-weight-bold`} disabled={status.toUpperCase() !== "ACTIVE" ? true : false} style={{borderRadius: "8px" }} onClick={() => buy()}>{status.toUpperCase() !== "ACTIVE" ? status.toUpperCase() : "BUY"}</button>
                </div>
            </div>
        </div>
    )
}

export default BuyingForm
