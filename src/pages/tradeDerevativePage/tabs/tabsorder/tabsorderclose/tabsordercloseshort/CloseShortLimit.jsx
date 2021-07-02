import React from 'react'
import Popup from '../../../../../../components/popUps'

function CloseShortLimit() {
    return (
        <React.Fragment>
            <form className="mt-3">
                <div className="rowLable my-2">
                    <label className="text-white mb-0">Price</label>
                </div>
                <div className="rowFormGroupTradeDerivative">
                    <div className="formGroupTradeDerivative-left">
                        <div className="input-group groupInputTradeDerivative">
                            <input type="text" className="groupInputTradeDerivative-input px-2 py-2 w-100 pr-5 ci-pd" placeholder="" disabled/>
                            <div className="groupInputTradeDerivative-appendR" style={{cursor: "pointer"}}>
                                <span className="groupInputTradeDerivative-appendR-icon font-16 text-white pr-3">USDT</span>
                            </div>
                        </div>
                    </div>
                    <div className="formGroupTradeDerivative-right">
                        <select name="cars" id="cars" className="selectTradeDerivative">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>

                <div className="rowLable my-2 d-flex justify-content-between">
                    <label className="text-white mb-0">Buy Price</label>
                    <label className="text-white mb-0">Available : -- (Count)</label>
                </div>

                <div className="form-group">
                    <div className="formGroupTradeDerivative-left">
                        <div className="input-group groupInputTradeDerivative">
                            <input type="text" className="groupInputTradeDerivative-input px-2 py-2 w-100 pr-5 ci-pd" placeholder="(Cont)" disabled/>
                            <div className="groupInputTradeDerivative-appendR" style={{cursor: "pointer"}}>
                                <span className="groupInputTradeDerivative-appendR-icon font-16 text-white pr-3">BTC</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SLIDER RANGE */}
                <div className="slider-range">
                    <input type="range" className="slider-rangeCustom" min="1" max="5" id="slider-range1"/>
                    <div className="text-range" style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}>
                        <div className="text-left">
                            <p className="text-14 ax-text-gray">0%</p>
                        </div>
                        <div className="text-center" style={{paddingRight: "30px"}}>
                            <p className="text-14 ax-text-gray">25%</p>
                        </div>
                        <div className="text-center">
                            <p className="text-14 ax-text-gray">50%</p>
                        </div>
                        <div className="text-center" style={{paddingLeft: "30px"}}>
                            <p className="text-14 ax-text-gray">75%</p>
                        </div>
                        <div className="text-right">
                            <p className="text-14 ax-text-gray">100%</p>
                        </div>
                    </div>
                </div>
                {/* END SLIDER RANGE */}

                {/* TAKE PROFIT & STOP LOSS */}
                <div className="form-group d-flex justify-content-between">
                    <label for="customSwitchTakeProfit" className="font-14 mb-0 ax-text-gray" style={{cursor: "pointer"}}>Take Profit</label>
                    <div className="custom-control custom-switch switch-secondary">
                        <input type="checkbox" className="custom-control-input" id="customSwitchTakeProfit"/>
                        <label className="custom-control-label text-muted text-white" for="customSwitchTakeProfit"></label>
                    </div>
                </div>

                <div className="form-group d-flex justify-content-between">
                    <label for="customSwitchStopLoss" className="font-14 mb-0 ax-text-gray" style={{cursor: "pointer"}}>Stop Loss</label>
                    <div className="custom-control custom-switch switch-secondary">
                        <input type="checkbox" className="custom-control-input" id="customSwitchStopLoss"/>
                        <label className="custom-control-label text-muted text-white" for="customSwitchStopLoss"></label>
                    </div>
                </div>
                {/* END TAKE PROFIT & STOP LOSS */}

                {/* Button  */}
                <div className="form-group">
                    <div className="btn ax-bg-danger ci-btn-danger w-100" style={{borderRadius: "2px"}} onClick={() => Popup.fire({
                        title: "COMING SOON!!!",
                        text: "Coming soon to Archidax."
                    })}>
                        Sell
                    </div>
                </div>
            </form>

            <div className="containerContractDetail">
                <div className="containerContractDetail-title">
                    <h3 className="font-18 text-white mb-0">Contract Details BTC/USDT</h3>
                </div>
                <div className="containerContractDetail-content">
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Latest Traded Price</p>
                        <p className="mb-2 text-white">373883.0</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Mark Price</p>
                        <p className="mb-2 text-white">373883.0</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Index Price</p>
                        <p className="mb-2 text-white">373883.0</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Contract Face Value</p>
                        <p className="mb-2 text-white">100 USDT</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Funding Rate</p>
                        <p className="mb-2 text-white">-0.05%</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Estimated Rate</p>
                        <p className="mb-2 text-white">-0.05%</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Settlement Time</p>
                        <p className="mb-2 text-white">07:05:31</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Minimum Order Amount</p>
                        <p className="mb-2 text-white">1</p>
                    </div>
                    <div className="rowContent d-flex justify-content-between">
                        <p className="mb-2 ax-text-gray">Maximum Order Amount</p>
                        <p className="mb-2 text-white">1000000</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CloseShortLimit
