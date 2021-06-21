import { baseUrlTrade } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'
import axios from 'axios'

export const launchNewProject = (data) => {
    Popup.showLoading()
    console.log("msuk", data)
    // Display the key/value pairs
    for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

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

export const getAllIEOProjects = (filter, dispatch) => {
    let url
    if (!filter) {
        url = `${baseUrlTrade}/api/v1/launchpad/IEO/readAll`
    } else {
        url = `${baseUrlTrade}/api/v1/launchpad/IEO/readAll?filter=${filter.toUpperCase()}`
    }
    axios({
        method: "GET",
        url: url,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            // console.log(data.data, "<<")
            dispatch({ type: "ALL_IEO_PROJECTS", data: data.data })
        })
        .catch(err => errorHandler(err))
}

export const getMyIEOPortfolio = (dispatch, search) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/portofolio?page=1&limit=10&search=${search ? search.toUpperCase() : ""}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "MY_IEO_PORTFOLIO", data: data })
        })
        .catch(err => errorHandler(err))
}

export const getMyIEOPortfolioDetails = (idCoin, dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/portofolio/history?page=1&limit=10&idCoin=${idCoin}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data)
            dispatch({ type: "MY_IEO_PORTFOLIO_DETAILS", data: data })
        })
        .catch(err => errorHandler(err))
}

export const getIEOProjectByPhaseId = (idPhase, dispatch, history) => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/detail?idPhase=${idPhase}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            dispatch({ type: "IEO_DETAILS", data: data.data[0] })
            axios({
                method: "GET",
                url: `${baseUrlTrade}/api/v1/launchpad/IEO/getbalance?base=${data.data[0].currency_base.toUpperCase()}&quote=${data.data[0].currency_quote.toUpperCase()}`,
                headers: { jwttoken: localStorage.getItem('token') }
            })
                .then(({ data }) => {
                    dispatch({ type: "IEO_USER_BALANCE", data: data })
                })
                .catch(err => console.log(err))

        })
        .catch(err => history.push('/launchpad'))
}


export const getUserBalance = () => {
    axios({
        method: "GET",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/detail?id`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            console.log(data.data, ">>")
        })
        .catch(err => errorHandler(err))
}

export const buyIEOCoin = (id, data, dispatch) => {
    console.log(data)
    axios({
        method: "POST",
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/buycoin/${id}`,
        headers: { jwttoken: localStorage.getItem('token') },
        data: data
    })
        .then(({ data }) => {
            Popup.fire({
                title: "Success!",
                text: data.message
            })
        })
        .catch(err => errorHandler(err))
}





