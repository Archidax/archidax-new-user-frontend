import { baseAxios, baseUrlTrade } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'
import axios from 'axios'

export const launchNewProject = (data) => {
    console.log("msuk", data)
    // Display the key/value pairs
    for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
    axios({
        url: `${baseUrlTrade}/api/v1/launchpad/IEO/create`,
        method: "POST",
        data: data,
        'Content-Type': 'multipart/form-data',
        headers: { jwttoken: localStorage.getItem('token'), contentType: "multipart/form-data" }
    })
        .then(data => {
            console.log(data, "<<<<DATA")
        })
        .catch(err => errorHandler(err))
}