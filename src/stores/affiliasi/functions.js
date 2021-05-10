import { baseUrl } from '../index'
import axios from 'axios'
import errorHandler from '../errorHandler'

export const getMyAffiliation = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrl}/afiliasi/general`,
        headers: { jwttoken: localStorage.getItem('token') }  
    })
        .then(({data}) => {
            console.log(data, "<<<myaff")
            dispatch({type: "SET_MY_AFFILIATION", data: data.dataref})
        })
        .catch(err => {
            errorHandler(err)
        })
}

export const getAffiliationList = (dispatch, month, year) => {
    axios({
        method: "GET",
        url: `${baseUrl}/afiliasi/userdata?year=${year}&month=${month}`,
        headers: { jwttoken: localStorage.getItem('token') }  
    })
        .then(({data}) => {
            console.log(data, "<<<afflist")
            dispatch({type: "SET_DAFTAR_AFFILIASI", data: data.data})
        })
        .catch(err => {
            errorHandler(err)
        })
}