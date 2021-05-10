import { baseAxios } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'


export const readMe = (dispatch, history) => {
    baseAxios.get("/users/user", {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        
        if(response.data.kyc){
            dispatch({type: "SET_KYCSTATUS", data: response.data.kyc})
        }else{
            dispatch({type: "CLEAN_KYC"})
        }
        
        // if(response.data.user.active2fa) {
            //     dispatch({type: "GAUTH_STATUS", data: response.data.user.active2fa})
            // }
            // if(response.data.passed2fa) {
                //     dispatch({type: "LOGIN_GAUTH", data: response.data.active2fa})
                // }
                // console.log(response.data,"<<<><><><><><><><><><< readMea")
        if(response.data.ip) {
            dispatch({type: "SET_STAT", data: {
                ip: response.data.ip.ip,
                lastLoggin: new Date(response.data.ip.lastLoginAt)
            }})
        }
        
        dispatch({type: "SET_LIMIT", data: response.data.user.limitPenarikan})
        dispatch({type: "SET_README", data: response.data.user})
        dispatch({type: "SET_READMELOADING", data: false})
        // setTimeout(() => {
        //     console.log("<<<<<,asdada")
        // }, 600);

    })
    .catch(errorHandler)
}

export const sendStepOne = (dispatch, data, history) => {
    Popup.showLoading()

    baseAxios.post('/kyc/stepone', {
        id_number: data.nomorIdentitas,
        id_ex: data.berlakuHingga,
        job: data.pekerjaan,
        familyName: data.namaKerabat,
        familyRelation: data.hubunganKerabat,
        familyNumber: data.nomorTeleponDarurat,
        nation: data.wargaNegara,
        name: data.namaLengkap,
        placeOfBirth: data.tempatLahir,
        dateOfBirth: data.tanggalLahir,
        gender: data.jenisKelamin,
        street: data.jalan,
        provinces: data.provinsi,
        districtOrCity: data.kota,
        zipcode: data.kodePos
    }, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.close()
        history.push('/verification/step2')
    })
    .catch(errorHandler)
}

export const verifyStepTwo = (dispatch, data, history) => {
    const { typeid, files } = data
    let newData = new FormData()
    for (let i = 0; i < files.length; i++) {
        newData.append('files', files[i]);
    }
    newData.append('typeid', typeid)
    Popup.showLoading()
    baseAxios.post('/kyc/steptwo', newData, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then(response => {
        console.log(response, "<<< result data")
        Popup.fire({
            title: "Berhasil!",
            text: "Verifikasi anda sedang kami proses, kami akan melakukan moderasi dalam 1-48 jam ke depan."
        })
        dispatch({type: "CHANGE_KYCV2", data: {
            kycStatus: "2",
            isFinish: true,
            approved_status: false,
        }})
        history.replace('/')
        // if(response) {
            
        // }
    })
    .catch(errorHandler)
}

export const putEmergency = (dispatch, data) => {
    Popup.showLoading()
    baseAxios.put('/kyc/editEmergencyContact', data, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        Popup.fire({
            title: "Berhasil!",
            text: "Kontak darurat anda berhasil dirubah."
        })
        dispatch({type: "CHANGE_EMERGENCY", data})
    })
    .catch(err => {
        Popup.close()
        errorHandler(err)
    }) 
}

export const sendOTP = (dispatch, nomer, cb, handleData) => {
    
    Popup.showLoading()
    baseAxios.post('/otp/send', {}, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
    .then((response) => {
        console.log(response, "<<<<rotp")
        cb(300)
        if(handleData){
            handleData(response.data.request_id, 'request_id')
        }
        dispatch({type:"SET_OTP", data: response.data.request_id})
        Popup.fire({
            title: "Permintaan dalam proses",
            text: `Kami telah mengirimkan kode OTP ke nomer ********${nomer.slice(8,nomer.length)}`
        })
    })
    .catch(err => {
        if(err.response){
            cb(Math.ceil(err.response.data.expIn))
        }
        if(err.response && handleData){
            console.log(err.response)
            handleData(err.response.data.request_id, 'request_id')
        }
        errorHandler(err)
    }) 
    
}

