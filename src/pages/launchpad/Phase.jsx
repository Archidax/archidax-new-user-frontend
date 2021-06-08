import React, { useEffect, useRef, useState } from 'react'
import Dropdown from '../../components/dropdown'

function Phase({ key, removeFunc, phaseDetails, data, index, setPhaseDetails }) {
    const [coin, setCoin] = useState("")

    useEffect(() => {
        var tmp = [...phaseDetails]
        tmp[index].coin = coin
        setPhaseDetails(tmp)
    }, [coin])

    return (
        <div className="col-12 col-xl-12 mb-2">
            <form enctype="multipart/form-data">
                <div className="row no-gutters p-2 border rounded">
                    <div className="col-12 pr-2">
                        <h3 className="my-3 font-15 font-bold text-gold">Phase <span>{index+1}</span></h3>
                    </div>
                    <div className="col-12 col-lg-6 pr-2">
                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">Start Date</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group ci-inputDefault-bg">
                                    <input type="datetime-local"
                                        className="form-control ci-inputDefault-bg-input ci-pd"
                                        onChange={(e) => {
                                            var tmp = [...phaseDetails]
                                            tmp[index].startDate = e.target.value
                                            setPhaseDetails(tmp)
                                        }}
                                        value={data.startDate}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">Amount</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group ci-inputDefault-bg">
                                    <input type="number"
                                        className="form-control ci-inputDefault-bg-input ci-pd"
                                        onChange={(e) => {
                                            var tmp = [...phaseDetails]
                                            tmp[index].amount = e.target.value
                                            setPhaseDetails(tmp)
                                        }}
                                        value={data.amount}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">Price</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group ci-inputDefault-bg">
                                    <input type="number"
                                        className="form-control ci-inputDefault-bg-input ci-pd"
                                        onChange={(e) => {
                                            var tmp = [...phaseDetails]
                                            tmp[index].price = e.target.value
                                            setPhaseDetails(tmp)
                                        }}
                                        value={data.price}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 pl-2">
                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">End Date</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group ci-inputDefault-bg">
                                    <input type="datetime-local"
                                        className="form-control ci-inputDefault-bg-input ci-pd"
                                        onChange={(e) => {
                                            var tmp = [...phaseDetails]
                                            tmp[index].endDate = e.target.value
                                            setPhaseDetails(tmp)
                                        }}
                                        value={data.endDate}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">Minimum Buy</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group ci-inputDefault-bg">
                                    <input type="number"
                                        className="form-control ci-inputDefault-bg-input ci-pd"
                                        onChange={(e) => {
                                            var tmp = [...phaseDetails]
                                            tmp[index].minimumBuy = e.target.value
                                            setPhaseDetails(tmp)
                                        }}
                                        value={data.minimumBuy}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">Coin</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group ci-inputDefault-bg ">
                                    <Dropdown
                                        searchBar={false}
                                        dataOptions={["ETH", "WAVES", "USD", "USDT"]}
                                        value={coin}
                                        onChange={setCoin}
                                        classDropdown="text-white w-100"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="col-12 d-flex align-items-end flex-column justify-content-end py-3 px-0" >
                            <button className="ci-btn-custom-1 py-1"
                                disabled={phaseDetails.length === 1 ? true : false}
                                onClick={() => removeFunc(key)}
                            >
                                Remove Phase <i className="fas fa-trash-alt ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Phase
