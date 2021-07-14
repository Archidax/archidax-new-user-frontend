import axios from 'axios'
import { baseUrl, baseAxios } from '../index'
import { errHandler } from '../../helpers'
import Popups from '../../components/popUps'
import errorHandler from '../errorHandler'

export const getLoginHistory = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrl}/users/historyactive`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "LOGIN_HISTORY", data: data.data })
        })
        .catch(err => console.log(err))
}

export const deleteLogItem = (id, dispatch, setLoading) => {
    axios({
        method: "DELETE",
        url: `${baseUrl}/users/removeHistoryActive`,
        data: { id: id },
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(data => {
            console.log(data)
            dispatch({ type: "DELETE_LOG_ITEM", data: id })
        })
        .catch(err => console.log(err))
        .finally(() => {
            if (setLoading) {
                setLoading(false)
            }
        })
}

export const requestPasswordChange = (data, setDisableSend, toggleModal, clearData) => {
    baseAxios({
        url: '/users/changePassword',
        method: "post",
        data: {
            ...data
        },
        headers: {
            jwttoken: localStorage.token
        }
    }).then(({ data }) => {
        Popups.fire({
            title: "Ganti Password",
            text: data.message
        })
        if (clearData) {
            clearData()
        }
    }).catch((err) => {
        errHandler(err)
    }).finally(() => {
        if (setDisableSend) {
            setDisableSend(false)
        }
        if (toggleModal) {
            toggleModal('#ubahPassword')
        }
    })
}

export const get2FA = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrl}/users/generate/2fa`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            // console.log(data, "<<<<<<<<<<<<<<<<<<<<")
            dispatch({ type: "SET_GCODE", data: data.url })
        })
        .catch(err => console.log(err))
}

export const verifyGAuth = (data, dispatch) => {
    console.log("Login GAuth...", data)
    axios({
        method: "POST",
        url: `${baseUrl}/security/cryptoGuard`,
        data: data,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(data => {
            
            dispatch({ type: "GAUTH_STATUS", data: data.verified })
            console.log(data, "<<<<<<<<<<<<<verifygauth")
        })
        .catch(err => errorHandler(err))
}


export const loginGAuth = (data, dispatch, history) => {
    // console.log("login", data)
    axios({
        method: "POST",
        url: `${baseUrl}/security/cryptoGuard`,
        data: data,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then((data) => {
            dispatch({ type: "LOGIN_GAUTH", data: true })
            history.replace('/')
        })
        .catch(err => errorHandler(err))
}

export const deactivateGauth = (data, history) => {
    // console.log("masuk", data)
    axios({
        method: "POST",
        url: `${baseUrl}/security/cryptoGuard/deactivate`,
        data,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then((data) => {
            console.log(data, "<<<<<<deactivate")
            history.push('/')
        })
        .catch(err => errorHandler(err))
}

export const resetGauth = () => {
    axios({
        method: "POST",
        url: `${baseUrl}/security/cryptoGuard/deactivate`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then((data) => {
            console.log(data, "<<<<<<deactivate")
        })
        .catch(err => errorHandler(err))
}


export const getAndSaveIP = (dispatch) => {
    const key = "a97edd71da8b92"
    axios({
        method: "GET",
        url: `https://ipinfo.io/?&token=${key}`
    })
        .then(dataIp => {
            // console.log(dataIp.data, "<<<<<<IPuser")
            dispatch({
                type: "USER_IP", data: {
                    ip: dataIp.data.ip,
                    country: dataIp.data.country,
                    city: dataIp.data.city,
                    timezone: dataIp.data.timezone,
                }
            })
            axios({
                method: "PUT",
                url: `${baseUrl}/users/saveIp`,
                data: dataIp.data,
                headers: { jwttoken: localStorage.getItem('token') }
            })
                .then(saveIp => {
                    // console.log(saveIp, "<<<<<<<auto save ip")
                    
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}