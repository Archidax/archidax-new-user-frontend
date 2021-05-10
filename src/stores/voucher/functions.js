import { baseAxios } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'
import popUps from '../../components/popUps'

const fileDownload = require('js-file-download')

export const otpRequest = (setDisableSend, editInputData, setResendTimeout) => {
    if(setDisableSend){
        setDisableSend(true)
    }
    baseAxios({
        method: "POST",
        url: '/otp/send',
        headers: {
            jwttoken: localStorage.token
        }
    }).then(({data}) => {
        if(editInputData){
            editInputData(data.request_id, 'request_id')
        }
        if(setDisableSend){
            setDisableSend(false)
        }
        setResendTimeout(data.expIn? data.expIn : 500)
    })
    .catch((err) => {
        Popup.fire({
            title: "Terjadi Kesalahan",
            text: err.response && err.response.data ? err.response.data.message : err.message
        })
        if(err.response && err.response.data){
            setResendTimeout(Math.ceil(err.response.data.expIn))
        } else {
            setResendTimeout(10)
        }
    })
}

export const getVoucherHistories = (dispatch) => {
    baseAxios.get('/voucher/histories',{
        headers: {
            jwttoken: localStorage.token
        }
    })
    .then(({data}) => {
        if(data.voucher.length){
            dispatch({type: "SET_VOUCHER_HISTORY", data: data.voucher})
        }
    })
    // .catch((err) => {
    //     console.log(err.message)
    // })
    .catch(errorHandler)
}

export const getMoreVoucherHistories = (dispatch, skip) => {
    baseAxios.get(`/voucher/histories/${skip}`, {
        headers: {
            jwttoken: localStorage.token
        }
    })
    .then(({data}) => {
        dispatch({type: "ADD_VOUCHER_HISTORY", data: data.voucher})
    })
    .catch(errorHandler)
}

export const getRedeemHistories = (dispatch) => {
    baseAxios.get('/voucher/redeemhistories',{
        headers: {
            jwttoken: localStorage.token
        }
    })
    .then(({data}) => {
        if(data.voucher.length){
            dispatch({type: "SET_REDEEMED_VOUCHER_HISTORY", data: data.voucher})
        }
    })
    .catch(errorHandler)
}

export const getMoreRedeemHistories = (dispatch, skip) => {
    baseAxios.get(`/voucher/redeemhistories/${skip}`, {
        headers: {
            jwttoken: localStorage.token
        }
    })
    .then(({data}) => {
        if(data.voucher.length){
            dispatch({type: "ADD_REDEEMED_VOUCHER_HISTORY", data: data.voucher})
        }
    })
    .catch(errorHandler)
}

export const downloadCreateVoucherHistory = () => {
    popUps.showLoading()
    baseAxios.get(`/voucher/histories/download`, {
        headers: {
            jwttoken: localStorage.token
        },
        responseType: 'blob'
    })
    .then(({data}) => {
        fileDownload(data, 'riwayat_pembuatan_voucher.xlsx')
        popUps.close()
    })
    .catch(errorHandler)
}

export const downloadRedeemVoucherHistory = () => {
    popUps.showLoading()
    baseAxios.get(`/voucher/histories/download`, {
        headers: {
            jwttoken: localStorage.token
        },
        responseType: 'blob'
    })
    .then(({data}) => {
        fileDownload(data, 'riwayat_pencairan_voucher.xlsx')
        popUps.close()
    })
    .catch(errorHandler)
}