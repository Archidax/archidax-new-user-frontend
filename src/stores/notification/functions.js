import errorHandler from '../errorHandler'
import { baseAxios } from '../index'

export const getNotifications = (dispatch) => {
    return baseAxios.get("/users/notification/get", {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
        .then(({data}) => {
            dispatch({
                type: "SET_NOTIFICATIONS", 
                data: data
            })
        })
        // .catch(errorHandler)
}
export const setReadNotifications = async (dispatch, data, history) => {
    if(!data.read){
        await baseAxios.get(`/users/notification/read/${data._id}`, {
            headers: {
                jwttoken: localStorage.getItem('token')
            }
        }).then(({data}) => {
            dispatch({
                type: "SET_UNREAD",
                data: data
            })
        })
        .catch(errorHandler)
    }
    dispatch({
        type: "SET_READ_NOTIFICATION", 
        data: data
    })
    switch (data.status){
        case 'trade':
            history.push('/pasar')
            break
        case 'transfer':
            history.push('/wallet')
            break
        default:
            break
    }
}

export const getMoreNotifications = (dispatch, skip, setLoading) => {
    return baseAxios.post("/users/notification/getmore", {
        skip
    },{
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
        .then(({data}) => {
            if(data.notifications.length){
                dispatch({
                    type: "MORE_NOTIFICATIONS", 
                    data: data
                })
            }
            if(setLoading){
                setLoading(false)
            }
        })
        .catch(errorHandler)
}

export const getAllNotifications = (dispatch) => {
    return baseAxios.get("/users/notification/getall", {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
        .then(({data}) => {
            dispatch({
                type: "SET_NOTIFICATIONS", 
                data: data
            })
        })
        .catch(errorHandler)
}

export const readAllNotifications = (dispatch) => {
    dispatch({
        type: "SET_ALL_READ_NOTIFICATIONS",
    })
    return baseAxios.get("/users/notification/readall", {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    }).catch(errorHandler)
}