import errorHandler from '../errorHandler'
import { baseAxios } from '../index'

export const getAllDynamicPages = (dispatch,language) => {
    baseAxios.get(`pages/category?language=${language}`, {
        }).then(({data}) => {
            dispatch({
                type: "SET_DYNAMICPAGES", 
                data: data.pages
            })
        }).catch(errorHandler)
}