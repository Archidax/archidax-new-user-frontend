import { baseAxios, baseUrlTrade, baseUrlTradeVersion } from '../index'
import Popup from '../../components/popUps'
import errorHandler from '../errorHandler'
import axios from 'axios'

export const changeTelpNotOwn = (dispatch, data) => {
    Popup.showLoading()
    baseAxios.post('/edit/phoneNumberNoActive', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.close()
        dispatch({type: "SET_TELEFONVERIFICATION", data: true})
    })
    .catch(err => {
        errorHandler(err)
    }) 
    
}
export const changeTelpOwn = (dispatch, data) => {
    Popup.showLoading()
    baseAxios.post('/edit/phoneNumberActive', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.fire({
            title: "Berhasil!",
            text: "Nomor telefon anda berhasil dirubah."
        })
        dispatch({type: "CHANGE_PHONE", data: "+62"+data.newTlp})
    })
    .catch(err => {
        errorHandler(err)
    }) 
}

export const postLimit1 = (dispatch, data, history) => {
    
    Popup.showLoading()
    baseAxios.post('/edit/limit/stepOne', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.close()
        history.replace('/profile/limit-akun/step2')
    })
    .catch(err => {
        errorHandler(err)
    })
}

export const postLimit2 = (dispatch, data, history) => {

    Popup.showLoading()
    baseAxios.post('/edit/limit/stepTwo', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.fire({
            title: "Berhasil!",
            text: "Permintaan kenaikan limit anda sedang kami proses, kami akan melakukan moderasi dalam 1-48 jam ke depan."
        })
        dispatch({type: "SET_LIMITVERIFICATION", data: {
            review: true,
            isFinish: true
        }})
    })
    .catch(err => {
        errorHandler(err)
    })
}
export const getStatus = (dispatch) => {

    baseAxios.get('/edit/readstatus', {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.close()
        if(response.data.changeEmail){
            dispatch({type: "SET_EMAILVERIFICATION", data: response.data.changeEmail.review})
        }
        if(response.data.changePhoneNumber){
            dispatch({type: "SET_TELEFONVERIFICATION", data: response.data.changePhoneNumber.review})
        }
        if(response.data.Limit) {
            dispatch({type: "SET_LIMITVERIFICATION", data: response.data.Limit})
        }

    })
    .catch(errorHandler) 
}

export const postFoto = (dispatch, data) => {
    Popup.showLoading()
    baseAxios.post('/users/uploadImage', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.close()
        dispatch({type: "SET_FOTO", data: response.data.imageLink})
    })
    .catch(err => {
        errorHandler(err)
    }) 
}

export const postAddress = (dispatch, data) => {
    Popup.showLoading()
    baseAxios.post('/edit/address', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then(({response}) => {
        Popup.fire({
            title: "Berhasil!",
            text: "Alamat anda berhasil dirubah."
        })
        dispatch({type: "CHANGE_ADDRESS", data})
    })
    .catch(err => {
        errorHandler(err)
    }) 
}

export const postEmail = (dispatch, formData) => {
    Popup.showLoading()
    baseAxios.post('/edit/email', formData, {
        headers: {
            jwttoken: localStorage.getItem('token'),
        }
    })
    .then((response) => {
        Popup.fire({
            title: "Berhasil!",
            text: "Permintaan ganti email anda sedang kami proses, kami akan melakukan moderasi dalam 1-48 jam ke depan."
        })
        dispatch({type: "SET_EMAILVERIFICATION", data: true})
    })
    .catch(err => {
        errorHandler(err)
    }) 
}

export const createPin = (dispatch, data) => {
    Popup.showLoading()
    baseAxios.post('/users/edit/pin', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.fire({
            title: "Berhasil!",
            text: "Pin berhasil diaktifkan"
        })
        dispatch({type: "SET_PIN", data: response.data.userpin.nomor_pin})
    })
    .catch(err => {
        errorHandler(err)
    }) 
}
export const disablePin = (dispatch, data) => {
    Popup.showLoading()
    baseAxios.post('/users/remove/pin', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.fire({
            title: "Berhasil!",
            text: "Pin berhasil di non-aktifkan"
        })
        dispatch({type: "SET_PIN", data: ""})
    })
    .catch(err => {
        errorHandler(err)
    }) 
}

export const changeGMT = (dispatch, data) => {
    baseAxios.post('/users/settingTimeZone', data,{
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response)
    })
}
export const changeSubs = (dispatch, data) => {
    baseAxios.post('/users/settingSubscribe', data,{
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response)
    })
}
export const changeBahasa = (dispatch, data) => {
    baseAxios.post('/users/settingLanguage', data,{
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response)
    })
}
export const postInfoLaunchpad = (dispatch, data) => {
    Popup.approve(
        {
            title: "Pengajuan Koin",
            text: "Apakah Data Pengajuan Sudah Benar ?",
            textBtn: "Ya",
            onClickOk: () => {
                axios.post(`${baseUrlTrade}${baseUrlTradeVersion}/createInfoLaunchpad`, data, {
                    headers: {
                        jwttoken: localStorage.getItem('token')
                    }
                })
                .then((response) => {
                    Popup.fire({
                        title: "Pengajuan Diterima",
                        text: "Pengajuan projek anda telah kami terima. Kami akan menghubungi anda secepatnya setelah kami melakukan moderasi bersama tim internal kami."
                    })
                })
                .catch(errorHandler)
            }
        }
    )
}