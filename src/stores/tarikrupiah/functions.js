import { baseAxios } from '../index'
import Popup from '../../components/popUps'
import errorHandler from '../errorHandler'

export const getBank = (dispatch) => {
    baseAxios.get('/requisition/daftar/bank',{
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then(response => {
        dispatch({type: "SET_AKUN", data:response.data.acc})
    })
    .catch(errorHandler)
}

export const getTarikHistory = (dispatch) => {
    baseAxios.get('requisition/tarik/riwayat', {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then(response => {
        dispatch({type: 'SET_HISTORY', data: response.data.tarik})
    })
    .catch(errorHandler)
}

export const createTarik = (dispatch, data, cb) => {
    Popup.showLoading()
    baseAxios.post('/requisition/tarik/rupiah', data,{
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then(response => {
        getTarikHistory(dispatch)
        cb()
        Popup.fire({
            title: "Berhasil!",
            text: response.data.message
        })
    })
    .catch(errorHandler)
}

export const tambahBank = (dispatch, data) => {
    baseAxios.post('/requisition/tambah/bank', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then(response => {
        dispatch({type: "ADD_AKUN", data})
    })
    .catch(errorHandler)
}