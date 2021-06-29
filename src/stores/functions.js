import { baseAxios } from './'
import errorHandler from './errorHandler'

export const initLoad = (dispatch) => {
    baseAxios({
        method: "GET",
        url: `/users/init`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({data}) => {
            dispatch({
                type: "SET_NOTIFICATIONS", 
                data: data.notification
            })
            ///////////////////////////////
            if(data.status.changeEmail){
                dispatch({type: "SET_EMAILVERIFICATION", data: data.status.changeEmail.review})
            }
            if(data.status.changePhoneNumber){
                dispatch({type: "SET_TELEFONVERIFICATION", data: data.status.changePhoneNumber.review})
            }
            if(data.status.Limit) {
                dispatch({type: "SET_LIMITVERIFICATION", data: data.status.Limit})
            }
            ///////////////////////////////
            dispatch({ type: "SET_ASSETS", data: data.myWallet })
            ///////////////////////////////
            if(data.user.kyc){
                dispatch({type: "SET_KYCSTATUS", data: data.user.kyc})
            }else{
                dispatch({type: "CLEAN_KYC"})
            }
            if(data.user.ip) {
                dispatch({type: "SET_STAT", data: {
                    ip: data.user.ip.ip,
                    lastLoggin: new Date(data.user.ip.lastLoginAt)
                }})
            }
            
            dispatch({type: "SET_LIMIT", data: data.user.user.limitPenarikan})
            dispatch({type: "SET_README", data: data.user.user})
            dispatch({type: "SET_READMELOADING", data: false})
            ///////////////////////////////
        })
        .catch(err => {
			console.log(err.message ? err.message : 'Error')
            errorHandler(err)
        })
}