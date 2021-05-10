import { baseUrl } from '../index'
import axios from 'axios'
import Popup from '../../components/popUps'
import popUps from '../../components/popUps'
import errorHandler from '../errorHandler'
import { getMyAssets } from '../'

export const createSetorRupiah = (metode, data, dispatch, next) => {
    Popup.showLoading()
    axios({
        method: "POST",
        url: baseUrl + '/requisition/setor/rupiah',
        data: { amount: data.amount, metode_pembayaran: metode },
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "SET_METODE_PENYETORAN", data: metode })
            dispatch({
                type: "CREATE_SETOR_RUPIAH", data: {
                    amount: data.requestDepo.amount,
                    fee: data.requestDepo.fee,
                    createdAt: data.requestDepo.createdAt,
                    metode: data.requestDepo.metode_pembayaran,
                    idPendingTransaction: data.requestDepo._id
                }
            })
            next()
            Popup.close()
        })
        .catch(err => {
            errorHandler(err)
            Popup.close()
        })
}

export const createPenyetoranQRIS = (amount, method, dispatch, next) => {
    console.log("qriss")
    dispatch({
        type: "SET_QRIS_DATA", data: {
            amount: "",
            depositId: "",
            qris_content: "",
            qris_invoiceid: "",
            qris_nmid: "",
            qris_request_date: ""
        }
    })
    dispatch({
        type: "CREATE_SETOR_RUPIAH", data: {
            idPendingTransaction: "",
            amount: "",
            fee: "",
            createdAt: "",
            metode: ""
        }
    })
    Popup.showLoading()
    axios({
        method: "GET",
        url: baseUrl + `/requisition/setor/rupiah/qris/createInvoice?amount=${amount}&payment_method=${method}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data, "<<<<<<<<<<<<<QRIS")
            dispatch({
                type: "CREATE_SETOR_RUPIAH", data: {
                    idPendingTransaction: data.data._id,
                    amount: data.data.amount,
                    fee: data.data.fee,
                    createdAt: data.data.createdAt,
                    metode: data.data.metode_pembayaran
                }
            })
            dispatch({
                type: "SET_QRIS_DATA", data: {
                    amount: data.data.amount,
                    depositId: data.data.qris.depositId,
                    qris_content: data.data.qris.qris_content,
                    qris_invoiceid: data.data.qris.qris_invoiceid,
                    qris_nmid: data.data.qris.qris_nmid,
                    qris_request_date: data.data.qris.qris_request_date
                }
            })
            next()
            Popup.close()
        })
        .catch(err => {
            errorHandler(err)
            Popup.close()
        })
}

let sukses = 0
export const checkStatusQRIS = (data, history) => {
    console.log(data, "masuk")
    axios({
        method: "GET",
        url: baseUrl + `/requisition/setor/rupiah/qris/checkStatus?depositId=${data.depositId}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data, "<<<<<<<<<<<<<QRIS STATUS")
            if (data.statusTrx === "paid") {
                sukses = sukses + 1
                if (sukses === 1) {
                    Popup.fire({
                        title: "Berhasil",
                        text: "Penyetoran rupiah melalui QRIS Anda telah berhasil.",
                        onClickOk: history.push('/')
                    })
                }
            }
        })
        .catch(err => {
            // errorHandler(err)
        })
}

export const checkInProgressSetor = (dispatch) => {
    dispatch({
        type: "SET_QRIS_DATA", data: {
            amount: "",
            depositId: "",
            qris_content: "",
            qris_invoiceid: "",
            qris_nmid: "",
            qris_request_date: ""
        }
    })
    dispatch({
        type: "CREATE_SETOR_RUPIAH", data: {
            idPendingTransaction: "",
            amount: "",
            fee: "",
            createdAt: "",
            metode: ""
        }
    })
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/cek/setor/spesifik`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data.reqs, "<<<<<<<<<<<<<<<<<exist")
            if (data.reqs === null) {
                dispatch({ type: "IS_EXIST", data: false })
            } else {
                dispatch({ type: "IS_EXIST", data: true })
                dispatch({
                    type: "CREATE_SETOR_RUPIAH", data: {
                        idPendingTransaction: data.reqs._id,
                        amount: data.reqs.amount,
                        fee: data.reqs.fee,
                        createdAt: data.reqs.createdAt,
                        metode: data.reqs.metode_pembayaran
                    }
                })
                if (data.reqs.metode_pembayaran.includes("QRIS_")) {
                    dispatch({
                        type: "SET_QRIS_DATA", data: {
                            amount: data.reqs.amount,
                            depositId: data.reqs.qris.depositId,
                            qris_content: data.reqs.qris.qris_content,
                            qris_invoiceid: data.reqs.qris.qris_invoiceid,
                            qris_nmid: data.reqs.qris.qris_nmid,
                            qris_request_date: data.reqs.qris.qris_request_date
                        }
                    })

                }
            }
            popUps.close()
        })
        .catch(err => {
            console.log(err)
        })
}

export const cancelPenyetoran = (id, dispatch, history) => {
    console.log("bakal cancel")
    popUps.showLoading()
    axios({
        method: "POST",
        url: `${baseUrl}/requisition/setor/rupiah/cancel/${id}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "IS_EXIST", data: false })
            popUps.close()
            history.replace("/wallet")
        })
        .catch(err => {
            errorHandler(err)
        })
}

export const konfirmasiPenyetoran = (data, dispatch, next) => {
    axios({
        method: "POST",
        url: `${baseUrl}/requisition/konfirmasi/create`,
        data: data,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "KONFIRMASI_BANK", data: data.konfirmasi })
            // next()
        })
        .catch(err => {
            errorHandler(err)
        })
}

export const getMyConfirmationRequests = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/konfirmasi/my`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "CONFIRMATION_REQUESTS", data: data.konfirmasi })
        })
        .catch(err => {
            console.log(err)
        })
}

export const getSetorHistory = () => {
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/setor/riwayat`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(data => {
        })
        .catch(err => console.log(err))
}


export const checkExistingDepoAndStatus = () => {
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/cek/setor/spesifik`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            if (data.reqs.metode_pembayaran === "QRIS") {
                const trxvalue = data.reqs.amount
                const depositId = data.reqs.qris.depositId
                const invid = data.reqs.qris.qris_invoiceid
                let trxdateraw = data.reqs.qris.qris_request_date

                let trxdate
                let tmp = ''
                for (let i = 0; i < trxdateraw.length; i++) {
                    if (trxdateraw[i] === " ") {
                        trxdate = tmp
                    } else {
                        tmp = tmp + trxdateraw[i]
                    }
                }
                axios({
                    method: "GET",
                    url: baseUrl + `/requisition/setor/rupiah/qris/checkStatus?invid=${invid}&trxvalue=${trxvalue}&trxdate=${trxdate}&depositId=${depositId}`,
                    headers: { jwttoken: localStorage.getItem('token') }
                })
                    .then(data => {
                        console.log(data, "<<<<<<<<<<<<<QRIS STATUS")
                        if (data.statusTrx === "paid") {
                            Popup.fire({
                                title: "Berhasil",
                                text: "Penyetoran rupiah melalui QRIS Anda telah berhasil."
                            })
                        }
                    })
                    .catch(err => {
                        errorHandler(err)
                    })
            }
            popUps.close()
        })
        .catch(err => {
            console.log(err)
        })
}

export const paypalSuccess = (withdrawId, paypalId, dispatch, history) => {
    axios({
        method: "POST",
        url: `${baseUrl}/requisition/setor/paypal/success`,
        data: {
            withdrawId,
            paypalId
        },
        headers: { jwttoken: localStorage.getItem('token') }
    })
    .then(({data}) => {
        if(data.status==='COMPLETED'){
            getMyAssets(dispatch)
            dispatch({ type: "CLEAR_SETOR_REDUCER" })
            Popup.fire({
                title: "Berhasil",
                text: "Penyetoran rupiah melalui Paypal Anda telah berhasil.",
                onClickOk: () => history.push('/wallet')
            })
        }
    })
    .catch(err => console.log(err))
}