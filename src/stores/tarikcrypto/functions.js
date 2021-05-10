import axios from "axios"
import { baseUrl } from ".."
import popUps from "../../components/popUps"
import errorHandler from "../errorHandler"

export const transferCrypto = (coin, data, history) => {
    console.log(`Transfering: ${coin}...`)
    console.log(data, "<<<")
    axios({
        method: "POST",
        url: `${baseUrl}/account/kripto/transfer/${coin.toLowerCase()}`,
        data: data,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data)
            popUps.fire({
                title: "Berhasil",
                text: data.message,
                onClickOk: history.push('/')
            })
            
        })
        .catch(err => {
            console.log(err, "<<<err")
            errorHandler(err)
        })
}

export const getPriceEstimation = (coinname, dispatch) => {
    dispatch({ type: "SET_COIN_PRICE", data: 0 })
    axios({
        method: "GET",
        url: `https://api.coingecko.com/api/v3/simple/price?ids=${coinname.toLowerCase()}&vs_currencies=idr`,
    })
        .then(({ data }) => {
            console.log(data, "<<<<<<<<<<<price")
            if (coinname === "bitcoin") {
                dispatch({ type: "SET_COIN_PRICE", data: data.bitcoin.idr })
            } else if (coinname === "ethereum") {
                dispatch({ type: "SET_COIN_PRICE", data: data.ethereum.idr })
            } else if (coinname === "stellar") {
                dispatch({ type: "SET_COIN_PRICE", data: data.stellar.idr })
            } else if (coinname === "litecoin") {
                dispatch({ type: "SET_COIN_PRICE", data: data.litecoin.idr })
            } else if (coinname === "cardano") {
                dispatch({ type: "SET_COIN_PRICE", data: data.cardano.idr })
            } else if (coinname === "binancecoin") {
                dispatch({ type: "SET_COIN_PRICE", data: data.binancecoin.idr })
            } else if (coinname === "tron") {
                dispatch({ type: "SET_COIN_PRICE", data: data.tron.idr })
            } else if (coinname === "waves") {
                dispatch({ type: "SET_COIN_PRICE", data: data.waves.idr })
            }

        })
        .catch(err => console.log(err))
}

export const sendOTPTarikCrypto = () => {
    console.log("Sending OTP...")
    axios({
        method: "POST",
        url: `${baseUrl}/otp/send`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(data => {
            console.log(data, "<<otp")
            // SET_OTP_TARIK_CRYPTO
        })
        .catch(err => errorHandler(err))
}

export const verifyOTPTarikCrypto = (data) => {
    console.log("Sending OTP...")
    axios({
        method: "POST",
        url: `${baseUrl}/otp/send`,
        body: { requestId: data.requestId, code: data.code },
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(data => {
            console.log(data, "<<verifyotp")
        })
        .catch(err => errorHandler(err))
}