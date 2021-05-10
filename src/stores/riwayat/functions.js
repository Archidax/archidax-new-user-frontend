import axios from "axios"
import { baseUrl } from ".."
import popUps from "../../components/popUps"
import errorHandler from "../errorHandler"

const fileDownload = require('js-file-download')

export const getRiwayatOrder = (dispatch, page, limit, pair, month, year) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/order/riwayat?page=${page}&limit=${limit}&pair=${pair}&month=${month}&year=${year}`,
        headers: { jwttoken: localStorage.getItem("token") }
    })
        .then(({ data }) => {
            console.log(data, "<<<riwayatorder")
            dispatch({ type: "SET_DATA_RIWAYAT_ORDER", data: data.data })
            dispatch({ type: "SET_PAGES_DATA_RIWAYAT_ORDER", data: data.totalPages })
            dispatch({ type: "SET_TOTALDOCS_DATA_RIWAYAT_ORDER", data: data.totalDocs })
            popUps.close()
        })
        .catch(err => {
            popUps.close()
            errorHandler(err)
        })
}

export const getRiwayatTransaksi = (dispatch, page, limit, pair, month, year) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/transaksi/riwayat?page=${page}&limit=${limit}&pair=${pair}&month=${month}&year=${year}`,
        headers: { jwttoken: localStorage.getItem("token") }
    })
        .then(({ data }) => {
            console.log(data, "<<<riwayattransaksi")
            dispatch({ type: "SET_DATA_RIWAYAT_TRANSAKSI", data: data.data })
            dispatch({ type: "SET_PAGES_DATA_RIWAYAT_TRANSAKSI", data: data.totalPages })
            dispatch({ type: "SET_TOTALDOCS_DATA_RIWAYAT_TRANSAKSI", data: data.totalDocs })
            popUps.close()
        })
        .catch(err => {
            popUps.close()
            errorHandler(err)
        })
}

export const getRiwayatSetorCrypto = (dispatch, page, limit, symbol, month, year) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/setorKripto/riwayat?page=${page}&limit=${limit}&symbol=${symbol.toLowerCase()}&month=${month}&year=${year}`,
        headers: { jwttoken: localStorage.getItem("token") }
    })
        .then(({ data }) => {
            console.log(data, "<<<riwayatsetorcrypto")
            dispatch({ type: "SET_DATA_RIWAYAT_SETOR_CRYPTO", data: data.data })
            dispatch({ type: "SET_TOTALDOCS_DATA_RIWAYAT_SETOR_CRYPTO", data: data.totalDocs })
            popUps.close()
        })
        .catch(err => {
            popUps.close()
            errorHandler(err)
        })
}

export const getRiwayatTarikCrypto = (dispatch, page, limit, symbol, month, year) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/tarikKripto/riwayat?page=${page}&limit=${limit}&symbol=${symbol.toLowerCase()}&month=${month}&year=${year}`,
        headers: { jwttoken: localStorage.getItem("token") }
    })
        .then(({ data }) => {
            console.log(data, "<<<riwayattarikcrypto")
            dispatch({ type: "SET_DATA_RIWAYAT_TARIK_CRYPTO", data: data.data })
            dispatch({ type: "SET_TOTALDOCS_DATA_RIWAYAT_TARIK_CRYPTO", data: data.totalDocs })
            popUps.close()
        })
        .catch(err => {
            popUps.close()
            errorHandler(err)
        })

}

export const getRiwayatSetorRupiah = (dispatch, page, limit, month, year) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/setorRupiah/riwayat?page=${page}&limit=${limit}&month=${month}&year=${year}`,
        headers: { jwttoken: localStorage.getItem("token") }
    })
        .then(({ data }) => {
            console.log(data, "<<<riwayatsetorrupiah")
            dispatch({ type: "SET_DATA_RIWAYAT_SETOR_RUPIAH", data: data.data })
            popUps.close()
        })
        .catch(err => {
            popUps.close()
            errorHandler(err)
        })

}

export const getRiwayatTarikRupiah = (dispatch, page, limit, month, year) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/tarikRupiah/riwayat?page=${page}&limit=${limit}&month=${month}&year=${year}`,
        headers: { jwttoken: localStorage.getItem("token") }
    })
        .then(({ data }) => {
            console.log(data, "<<<riwayattarikrupiah")
            dispatch({ type: "SET_DATA_RIWAYAT_TARIK_RUPIAH", data: data.data })
            popUps.close()
        })
        .catch(err => {
            popUps.close()
            errorHandler(err)
        })
}

export const getRiwayatMutasi = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrl}`,
        headers: { jwttoken: localStorage.getItem("token") }
    })
        .then(({ data }) => {
            console.log(data, "<<<riwayatmutasi")
            // dispatch({ type: "SET_DATA_RIWAYAT_MUTASI", data: data })
        })
        .catch(err => console.log(err))

}

// DOWNLOAD /////////////////////////////////////////////////////////////////////////
export const downloadRiwayatOrder = (dispatch) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/order/riwayat/download`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            popUps.close()
            fileDownload(data, 'riwayat_order.xlsx')
        })
        .catch(err => {
            console.log(err)
            popUps.close()
        })
}

export const downloadRiwayatTransaksi = (dispatch) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/transaksi/riwayat/download`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            popUps.close()
            fileDownload(data, 'riwayat_transaksi.xlsx')
        })
        .catch(err => {
            console.log(err)
            popUps.close()
        })
}

export const downloadRiwayatSetorCrypto = (dispatch, code) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/setorKripto/riwayat/download?symbol=${code.toLowerCase()}`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            popUps.close()
            fileDownload(data, 'riwayat_setor_crypto.xlsx')
        })
        .catch(err => {
            console.log(err)
            popUps.close()
        })

}

export const downloadRiwayatTarikCrypto = (dispatch, code) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/tarikKripto/riwayat/download?symbol=${code.toLowerCase()}`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            popUps.close()
            fileDownload(data, 'riwayat_tarik_crypto.xlsx')
        })
        .catch(err => {
            console.log(err)
            popUps.close()
        })

}

export const downloadRiwayatSetorRupiah = (dispatch) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/setorRupiah/riwayat/download`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            popUps.close()
            fileDownload(data, 'riwayat_setor_rupiah.xlsx')
        })
        .catch(err => {
            console.log(err)
            popUps.close()
        })

}

export const downloadRiwayatTarikRupiah = (dispatch) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/tarikRupiah/riwayat/download`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            popUps.close()
            fileDownload(data, 'riwayat_tarik_rupiah.xlsx')
        })
        .catch(err => {
            console.log(err)
            popUps.close()
        })
}

export const downloadRiwayatMutasi = (dispatch) => {
    popUps.showLoading()
    axios({
        method: "GET",
        url: `${baseUrl}/requisition/order/riwayat/download`,
        headers: { jwttoken: localStorage.getItem("token") },
        responseType: 'blob'
    })
        .then(({ data }) => {
            popUps.close()
            fileDownload(data, 'riwayat_order.xlsx')
        })
        .catch(err => {
            console.log(err)
            popUps.close()
        })

}

