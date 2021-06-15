import React from 'react';
// import logoBitcoin from '../../assets/img/iconCoin.png';
import ChartKeuangan from './charts/ChartKeuangan';
import logoBitcoin from '../../assets/img/feelogo/Bitcoin_BTC.svg';
import logoEth from '../../assets/img/feelogo/Ethereum_ETH.svg';
import logoLtc from '../../assets/img/feelogo/Litecoin_LTC.svg';
import logoCodeo from '../../assets/img/feelogo/Cgold_CGOLD.svg';
import logoWaves from '../../assets/img/feelogo/Waves_WAVES.svg'
import { convertNumber } from '../../assets/js'


function CardKeuangan({MarketData}) {
    let bitCoin = MarketData?MarketData.find(el => { return el.initialSymbol === "BTC" }):null
    let ethereum = MarketData?MarketData.find(el => { return el.initialSymbol === "ETH" }):null
    let Bnb = MarketData?MarketData.find(el => { return el.initialSymbol === "BNB" }):null
    let cgold = MarketData?MarketData.find(el => { return el.initialSymbol === "CGOLD" }):null
    let waves = MarketData?MarketData.find(el => { return el.initialSymbol === "WAVES" }):null
    return (
        <div className="row">
            <div className="col-12 col-md-3">
                <div className="card ci-customCard-1 h-100">
                    <div className="card-body py-0 px-0 card-keuangan">
                        <ChartKeuangan height={315} dataChart={bitCoin?bitCoin.chart:null} dataChange={bitCoin&&bitCoin.price24h_change||0}/>                        
                        <div className="px-3 card-text-keuangan">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    {bitCoin&&<img src={bitCoin?.icon} alt="..." width={32}/>}
                                    <h3 className="font-16 ci-text-white ml-2">{bitCoin?bitCoin.assetName:"-"}</h3>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <i class={`fas ${bitCoin?convertNumber.tradeUpDownChangeDinamic(bitCoin.price24h_change, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")
                                        :convertNumber.tradeUpDownChangeDinamic(0, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")} font-30 mr-2`}></i>
                                    <div>
                                        <h6 className="ci-text-white font-12 font-bolder3">{bitCoin?convertNumber.toRupiah(bitCoin.price24h_close):"-"}</h6>
                                        <h6 className={`font-12 font-bolder3 ${bitCoin?convertNumber.tradeUpDownChange(bitCoin.price24h_change, 2)
                                            :convertNumber.tradeUpDownChange(0, 2)}`}>({bitCoin?convertNumber.tradeChange(bitCoin.price24h_change, 2):"-"})</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Volume 24</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {bitCoin?convertNumber.toRupiah(bitCoin.price24h_priceVolume):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Terendah</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {bitCoin?convertNumber.toRupiah(bitCoin.price24h_low):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Tertinggi</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {bitCoin?convertNumber.toRupiah(bitCoin.price24h_high):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 h-100">
                <div className="row h-100">
                    <div className="col-12 pb-2">
                        <div className="card ci-customCard-1 h-100">
                            <div className="card-body py-0 px-0 card-keuangan">
                                <ChartKeuangan height={150} dataChart={ethereum?ethereum.chart:null} dataChange={ethereum&&ethereum.price24h_change||0}/>
                                <div className="px-3 card-text-keuangan" >
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            {ethereum&&<img src={ethereum?.icon} alt="..." width={32}/>}
                                            <h3 className="font-16 ci-text-white ml-2">{ethereum?ethereum.assetName:"-"}</h3>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <i class={`fas ${ethereum?convertNumber.tradeUpDownChangeDinamic(ethereum.price24h_change, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")
                                                :convertNumber.tradeUpDownChangeDinamic(0, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")} font-30 mr-2`}></i>
                                            <div>
                                                <h6 className="ci-text-white font-12 font-bolder3">{ethereum?convertNumber.toRupiah(ethereum.price24h_close):"-"}</h6>
                                                <h6 className={`font-12 font-bolder3 ${ethereum?convertNumber.tradeUpDownChange(ethereum.price24h_change, 2)
                                                    :convertNumber.tradeUpDownChange(0, 2)}`}>({ethereum?convertNumber.tradeChange(ethereum.price24h_change, 2):"-"})</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col col-md-4">
                                                    <h6 className="ci-text-white font-12 ">Volume 24</h6>
                                                </div>
                                                <div className="col">
                                                    <h6 className="ci-text-white font-12 ">: {ethereum?convertNumber.toRupiah(ethereum.price24h_priceVolume):"-"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col col-md-4">
                                                    <h6 className="ci-text-white font-12 ">Terendah</h6>
                                                </div>
                                                <div className="col">
                                                    <h6 className="ci-text-white font-12 ">: {ethereum?convertNumber.toRupiah(ethereum.price24h_low):"-"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col col-md-4">
                                                    <h6 className="ci-text-white font-12 ">Tertinggi</h6>
                                                </div>
                                                <div className="col">
                                                    <h6 className="ci-text-white font-12 ">: {ethereum?convertNumber.toRupiah(ethereum.price24h_high):"-"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pt-2">
                        <div className="card ci-customCard-1 h-100">
                            <div className="card-body py-0 px-0 card-keuangan">
                                <ChartKeuangan height={150} dataChart={Bnb?Bnb.chart:null} dataChange={Bnb&&Bnb.price24h_change||0}/>
                                <div className="px-3 card-text-keuangan" >
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            {Bnb&&<img src={Bnb?.icon} alt="..." width={32}/>}
                                            <h3 className="font-16 ci-text-white ml-2">{Bnb?Bnb.assetName:"-"}</h3>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <i class={`fas ${Bnb?convertNumber.tradeUpDownChangeDinamic(Bnb.price24h_change, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")
                                                :convertNumber.tradeUpDownChangeDinamic(0, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")} font-30 mr-2`}></i>
                                            <div>
                                                <h6 className="ci-text-white font-12 font-bolder3">{Bnb?convertNumber.toRupiah(Bnb.price24h_close):"-"}</h6>
                                                <h6 className={`font-12 font-bolder3 ${Bnb?convertNumber.tradeUpDownChange(Bnb.price24h_change, 2)
                                                    :convertNumber.tradeUpDownChange(0, 2)}`}>({Bnb?convertNumber.tradeChange(Bnb.price24h_change, 2):"-"})</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-12">
                                            <div className="row">
                                                <div className="col col-md-4">
                                                    <h6 className="ci-text-white font-12 ">Volume 24</h6>
                                                </div>
                                                <div className="col">
                                                    <h6 className="ci-text-white font-12 ">: {Bnb?convertNumber.toRupiah(Bnb.price24h_priceVolume):"-"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col col-md-4">
                                                    <h6 className="ci-text-white font-12 ">Terendah</h6>
                                                </div>
                                                <div className="col">
                                                    <h6 className="ci-text-white font-12 ">: {Bnb?convertNumber.toRupiah(Bnb.price24h_low):"-"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col col-md-4">
                                                    <h6 className="ci-text-white font-12 ">Tertinggi</h6>
                                                </div>
                                                <div className="col">
                                                    <h6 className="ci-text-white font-12 ">: {Bnb?convertNumber.toRupiah(Bnb.price24h_high):"-"}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3">
                <div className="card ci-customCard-1 h-100">
                    <div className="card-body  py-0 px-0 card-keuangan">
                        <ChartKeuangan height={315} dataChart={cgold?cgold.chart:null} dataChange={cgold&&cgold.price24h_change||0}/>
                        <div className="px-3 card-text-keuangan" >
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    {cgold&&<img src={cgold?.icon} alt="..." width={32}/>}
                                    <h3 className="font-16 ci-text-white ml-2">{cgold?cgold.assetName:"-"}</h3>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <i class={`fas ${cgold?convertNumber.tradeUpDownChangeDinamic(cgold.price24h_change, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")
                                        :convertNumber.tradeUpDownChangeDinamic(0, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")} font-30 mr-2`}></i>
                                    <div>
                                        <h6 className="ci-text-white font-12 font-bolder3">{cgold?convertNumber.toRupiah(cgold.price24h_close):"-"}</h6>
                                        <h6 className={`font-12 font-bolder3 ${cgold?convertNumber.tradeUpDownChange(cgold.price24h_change, 2)
                                            :convertNumber.tradeUpDownChange(0, 2)}`}>({cgold?convertNumber.tradeChange(cgold.price24h_change, 2):"-"})</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Volume 24</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {cgold?convertNumber.toRupiah(cgold.price24h_priceVolume):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Terendah</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {cgold?convertNumber.toRupiah(cgold.price24h_low):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Tertinggi</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {cgold?convertNumber.toRupiah(cgold.price24h_high):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col col-md-3">
                <div className="card ci-customCard-1 h-100">
                    <div className="card-body  py-0 px-0 card-keuangan" >
                        <ChartKeuangan height={315} dataChart={waves?waves.chart:null} dataChange={waves&&waves.price24h_change||0}/>
                        <div className="px-3 card-text-keuangan" >
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    {waves&&<img src={waves?.icon} alt="..." width={32}/>}
                                    <h3 className="font-16 ci-text-white ml-2">{waves?waves.assetName:"-"}</h3>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <i class={`fas ${waves?convertNumber.tradeUpDownChangeDinamic(waves.price24h_change, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")
                                        :convertNumber.tradeUpDownChangeDinamic(0, 2, "fa-sort-up ci-text-up", "fa-sort-down ci-text-down", "")} font-30 mr-2`}></i>
                                    <div>
                                        <h6 className="ci-text-white font-12 font-bolder3">{waves?convertNumber.toRupiah(waves.price24h_close):"-"}</h6>
                                        <h6 className={`font-12 font-bolder3 ${waves?convertNumber.tradeUpDownChange(waves.price24h_change, 2)
                                            :convertNumber.tradeUpDownChange(0, 2)}`}>({waves?convertNumber.tradeChange(waves.price24h_change, 2):"-"})</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Volume 24</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {waves?convertNumber.toRupiah(waves.price24h_priceVolume):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Terendah</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {waves?convertNumber.toRupiah(waves.price24h_low):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <h6 className="ci-text-white font-12 ">Tertinggi</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className="ci-text-white font-12 ">: {waves?convertNumber.toRupiah(waves.price24h_high):"-"}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardKeuangan
