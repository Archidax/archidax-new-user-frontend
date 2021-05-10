import { baseAxios } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'
// import store from './index'
import { baseUrl } from '../index'
import axios from 'axios'

export const logout = (dispatch) => {
    dispatch({ type: "CLEAN_KYC" })
    dispatch({ type: "CLEAN_PROFILE" })
    dispatch({ type: "CLEAN_AUTH" })
    dispatch({ type: "GAUTH_STATUS", data: false })
    dispatch({ type: "LOGIN_GAUTH", data: false })
    localStorage.removeItem("token")
//     axios({
//         method: "PATCH",
//         url: `${baseUrl}/users/logout`,
//         headers: { jwttoken: localStorage.getItem('token') }
//     })
//         .then(data => {
//             console.log(data, "<<<<<<<<<<logout")
//             dispatch({ type: "CLEAN_KYC" })
//             dispatch({ type: "CLEAN_PROFILE" })
//             dispatch({ type: "CLEAN_AUTH" })
//             dispatch({ type: "GAUTH_STATUS", data: false })
//             dispatch({ type: "LOGIN_GAUTH", data: false })
//         })
//         .catch(err => console.log(err))
// }


}

export const getIpUser = (dispatch) => {
    axios({
        method: "GET",
        url: `https://ipclient.herokuapp.com/`
    })
        .then(dataIp => {
            console.log(dataIp.data, "<<<<<<IPuser")
            dispatch({
                type: "USER_IP", data: {
                    ip: dataIp.data.ip,
                    country: dataIp.data.country,
                    city: dataIp.data.city,
                    timezone: dataIp.data.timezone,
                }
            })
        })
        .catch(err => console.log(err))
}

export const login = (dispatch, data, remember, history, ip) => {
    Popup.showLoading()
    baseAxios.post('/users/login', data)
        .then(async (response) => {
            console.log(response, "<<<<<<<<<<responselogin")
            try {
                await localStorage.setItem("token", response.data.token)
                if (remember) {
                    await localStorage.setItem("codeouser", data.email)
                } else {
                    await localStorage.removeItem("codeouser")
                }
                dispatch({ type: "SET_ISLOGIN", data: true })
                dispatch({ type: "GAUTH_STATUS", data: response.data.active2fa })

                if (response.data.active2fa) {
                    history.replace("/gauth")
                } else {
                    axios({
                        method: "PUT",
                        url: `${baseUrl}/users/saveIp`,
                        data: ip,
                        headers: { jwttoken: response.data.token }
                    })
                    .then(data => {
                        console.log(data, "<< dont have gauth but ip is saved")
                    })
                    history.replace("/")
                }
            }
            catch (err) {
                console.log(err)
            }
        })
        .catch(err => {
            errorHandler(err)
        })
}


export const register = (dispatch, data, history) => {
    Popup.showLoading()
    baseAxios.post("/users/register", data)
        .then((response) => {
            Popup.fire({
                title: "Berhasil",
                text: response.data.message,
                onClickOk: () => {
                    history.push('/login')
                }
            })

        })
        .catch(err => errorHandler(err))
}

export const generateGeetest = (dispatch) => {
    return baseAxios.get("/users/generate/geetest", {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
        .then((response) => {
            // console.log(response.data.data,"<<<<<<<,>>>>>>>>>>>>>>>>>>")
            return response.data.data;
            // dispatch({
            //     type: "SET_GETEST", data: {
            //         id: response.data.data.gt,
            //         challenge: response.data.data.challenge,
            //         new_captcha: response.data.data.new_captcha,
            //         success: response.data.data.success
            //     }
            // })
        })
        .catch(errorHandler)
}
// export const validateGeetest = (dispatch, data) => {
//     baseAxios.post("/users/verify/geetest", {
//         challenge_id: data.geetest_challenge,
//         validate_id: data.geetest_validate,
//         sec_id: data.geetest_seccode
//     }, {
//         headers: {
//             jwttoken: localStorage.getItem('token')
//         }
//     })
//         .then((response) => {
//             // console.log(response)
//         })
//         .catch(errorHandler)
// }

export const forgetEmail = (dispatch, data, cb) => {
    Popup.showLoading()
    baseAxios.post("/users/forget/password", data)
        .then((response) => {
            cb()
            Popup.fire({
                title: "Permintaan sedang diproses!",
                text: response.data.message
            })
        })
        .catch(errorHandler)
}

export const changePass = (dispatch, data, history) => {
    Popup.showLoading()
    baseAxios.post("/users/fixed/forget/password", data)
        .then((response) => {
            Popup.fire({
                title: "Berhasil!",
                text: response.data.message,
                onClickOk: () => {
                    history.replace('/login')
                }
            })
        })
        .catch(errorHandler)

}

export const deactive = (dispatch) => {
    Popup.showLoading()
    baseAxios.patch("/users/deactivate",null, {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
        .then((response) => {
            Popup.fire({
                title: "Konfirmasi melalui email!",
                text: response.data.message
            })
        })
    .catch(errorHandler)

}

export const deactiveSebenarnya = (dispatch, id, cb) => {
    Popup.showLoading()
    baseAxios.get("/api/auth/deactivate/confirmation/"+id,)
    .then((response) => {
        Popup.close()
        logout(dispatch)
        cb()
    })
    .catch(errorHandler)
}