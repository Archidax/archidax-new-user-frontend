import errorHandler from '../errorHandler'
import { baseAxios } from '../index'

export const getAllDynamicPages = (dispatch) => {
    baseAxios.get("pages/category", {
        }).then(({data}) => {
            dispatch({
                type: "SET_DYNAMICPAGES", 
                data: data.pages
            })
        }).catch(errorHandler)
}