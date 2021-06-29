import { baseAxios } from './'

export const initLoad = (coin, dispatch) => {
    baseAxios({
        method: "GET",
        url: `/users/init`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({data}) => {
            console.log(data)
        })
        .catch(err => {
			console.log(err.message ? err.message : 'Error')
        })
}