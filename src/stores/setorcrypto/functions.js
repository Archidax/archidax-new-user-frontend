import axios from 'axios'
import popUps from '../../components/popUps'
import errorHandler from '../errorHandler'
import {getMyAssets} from '../../stores'
import { baseUrl } from '../index'

// All balance based on coin
export const getMyBalance = (coin, dispatch) => {
    dispatch({
        type: "SET_COIN_DETAILS", data: {
            type: coin,
            balance: 0,
            frozen_balance: 0,
            address: null
        }
    })
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/account/kripto/balance/${coin.toLowerCase()}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data, `<<< ${coin} balance`)
            if (coin === "BTC") {
                if (data.user === null) {
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: 0,
                            frozen_balance: 0,
                            address: null
                        }
                    })
                } else {
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: data.user.balance,
                            frozen_balance: data.user.frozen_balance,
                            address: data.user.Address
                        }
                    })
                }
            } else if (coin === "XLM") {
                if (data.accs === null) {
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: 0,
                            frozen_balance: 0,
                            address: null
                        }
                    })
                } else {
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: data.accs.balance,
                            frozen_balance: data.accs.frozen_balance,
                            address: data.accs.Address
                        }
                    })
                }

            } else if (coin === "LTC") {
                console.log("LTC.....")
                if (data.account === null) {
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: 0,
                            frozen_balance: 0,
                            address: null
                        }
                    })
                } else {
                    console.log(data.account_data, "<<<<")
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: data.account_data.myAccount.balance,
                            frozen_balance: data.account_data.myAccount.frozen_balance,
                            address: data.account_data.myAccount.Address
                        }
                    })
                }
            } else {
                if (data.account === null) {
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: 0,
                            frozen_balance: 0,
                            address: null
                        }
                    })
                } else {
                    dispatch({
                        type: "SET_COIN_DETAILS", data: {
                            type: coin,
                            balance: data.user.balance,
                            frozen_balance: data.user.frozen_balance,
                            address: data.user.Address
                        }
                    })
                }
            }

            // // ETH, TRX, WAVES, BNB, CGOLD, BAT, COTI, USDT, AOA, AAVE, UNI, SUSHI
            // if (coin === "ETH" ||
            //     coin === "TRX" ||
            //     coin === "WAVES" ||
            //     coin === "BNB" ||
            //     coin === "CGOLD" ||
            //     coin === "BAT" ||
            //     coin === "COTI" ||
            //     coin === "USDT" ||
            //     coin === "AOA" ||
            //     coin === "AAVE" ||
            //     coin === "UNI" ||
            //     coin === "SUSHI" ||

            //     // need checking!
            //     coin === "OMG" ||
            //     coin === "ZRX" ||
            //     coin === "WTC" ||
            //     coin === "PPT" ||
            //     coin === "MITH" ||
            //     coin === "DGD" ||
            //     coin === "ELF" ||
            //     coin === "SUN" ||
            //     coin === "JST" ||
            //     coin === "WIN"

            // ) {
            //     if (data.account === null) {
            //         dispatch({
            //             type: "SET_COIN_DETAILS", data: {
            //                 type: coin,
            //                 balance: 0,
            //                 frozen_balance: 0,
            //                 address: null
            //             }
            //         })
            //     } else {
            //         dispatch({
            //             type: "SET_COIN_DETAILS", data: {
            //                 type: coin,
            //                 balance: data.user.balance,
            //                 frozen_balance: data.user.frozen_balance,
            //                 address: data.user.Address
            //             }
            //         })
            //     }
            // }



            popUps.close()
        })
        .catch(err => {
            errorHandler(err)
            popUps.close()
        })
}

export const generateAddress = (coin, dispatch) => {
    console.log("generating address for:", coin)
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/account/kripto/generate/${coin.toLowerCase()}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(data => {
            getMyAssets(dispatch)
            popUps.close()
        })
        .catch(err => {
            errorHandler(err)
            popUps.close()
        })
}

export const getCryptoDepositHistory = (data, dispatch) => {
    const { limit, page, month, year, symbol } = data
    console.log("generating history for:", symbol)
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/setorKripto/riwayat?limit=${limit}&page=${page}&month=${month}&year=${year}&symbol=${symbol.toLowerCase()}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data, `<<<${symbol} history`)
            dispatch({ type: "DEPO_COIN_HISTORY", data: data.data })
            popUps.close()
        })
        .catch(err => {
            errorHandler(err)
            popUps.close()
        })
}


export const selectCryptoToDepo = (coin, dispatch) => {
    dispatch({ type: "SELECT_SETOR_CRYPTO", data: coin })
    dispatch({
        type: "SET_COIN_DETAILS", data: {
            type: coin,
            balance: 0,
            frozen_balance: 0,
            address: null
        }
    })
}

