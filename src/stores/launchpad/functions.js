import { baseUrlTrade } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'
import axios from 'axios'

export const launchNewProject = (data) => {
    Popup.showLoading()
    // console.log("msuk", data)
    // // Display the key/value pairs
    // for (var pair of data.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }
    axios({
        method: "POST",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/create`,
        data: data,
        'Content-Type': 'multipart/form-data',
        headers: { jwttoken: localStorage.getItem('token'), contentType: "multipart/form-data" }
    })
        .then(({ data }) => {
            Popup.close()
            console.log(data, "<<<<DATA")
            Popup.fire({
                title: "Success",
                text: data.message
            })

        })
        .catch(err => {
            Popup.close()
            errorHandler(err)
        })
}

export const getAllIEOProjects = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/readAll`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "ALL_IEO_PROJECTS", data: data.data })
        })
        .catch(err => errorHandler(err))
}

export const getMyIEOPortfolio = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/portofolio`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "MY_IEO_PORTFOLIO", data: data.data })
        })
        .catch(err => errorHandler(err))
}

export const getIEOProjectById = (id, dispatch) => {
    console.log("masuk")
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/detail?id=${id}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data.data)
            dispatch({ type: "IEO_DETAILS", data: data.data })
        })
        .catch(err => errorHandler(err))
}
