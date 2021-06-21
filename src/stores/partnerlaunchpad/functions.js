import { baseUrlTrade } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'
import axios from 'axios'

const fileDownload = require('js-file-download')

export const getAllMyLaunchpad = (status, dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/mylaunchpad?status=${status}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "SET_ALL_MY_LAUNCHPAD", data: data.data })
        })
        .catch(err => errorHandler(err))
}

export const getMyLaunchpadDetail = (id, dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/project/detail?id=${id}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data.data, "<<my")
            dispatch({ type: "SET_MY_LAUNCHPAD_DETAIL", data: data.data })
        })
        .catch(err => errorHandler(err))
}


export const getPartnerLaunchpadStats = (idCoin, dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/dashboard?idCoin=${idCoin}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data, "<<db")
            dispatch({ type: "SET_MY_LAUNCHPAD_DETAIL", data: data.data })
        })
        .catch(err => errorHandler(err))
}

export const getPartnerLaunchpadSubs = (id, limit, page, dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/subscription?page=${page}&limit=${limit}&id=${id}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data, "<<subs")
            dispatch({ type: "SET_MY_LAUNCHPAD_SUBSCRIPTION", data: data })
        })
        .catch(err => errorHandler(err))

}

export const downloadMyLaunchpadSubcsription= (id) => {
    Popup.showLoading()
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/subscription/export?id=${id}`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            Popup.close()
            fileDownload(data, 'my_launchpad.xlsx')
        })
        .catch(err => {
            console.log(err)
            Popup.close()
        })

}