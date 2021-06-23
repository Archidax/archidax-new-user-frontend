import { baseUrl, baseUrlTrade, baseUrlTradeVersion } from '../index'
import axios from 'axios'
import errorHandler from '../errorHandler'

export const getMyAssets = (dispatch) => {
    axios({
        method: "GET",
        url: `${baseUrl}/account/wallet/myinfo`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
    .then(({ data }) => {
        dispatch({ type: "SET_ASSETS", data: data })
    })
    .catch(errorHandler);
}

export const getMyProfit = (initialSymbol, dateFrom, dateTo, cb, isLoading) => {
    isLoading(true)
    axios({
        method: "GET",
        url: `${baseUrlTrade}${baseUrlTradeVersion}/wallet/accProfit?initialSymbol=${initialSymbol}&from=${dateFrom}&to=${dateTo}`,
        headers: { jwttoken: localStorage.getItem('token') }
    })
        .then(({ data }) => {
            let {totalProfit, totalVolumeIdr, initialSymbol } = data
            cb({totalProfit, totalVolumeIdr, initialSymbol})
            isLoading(false)
        })
        .catch((err) => {
            isLoading(false)
            errorHandler(err)
        })
}
