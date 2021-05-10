import { baseUrlTrade, baseUrlTradeVersion, baseUrl } from '../index'
import axios from 'axios'
// import Popup from '../../components/popUps'
import errorHandler from '../errorHandler'
// import index from '../../pages/voucherpage'

export const getLanguageFromURL = () => {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function HomeMarket (cb) {
	axios({
    url:`${baseUrlTrade}${baseUrlTradeVersion}/Home/Market`,
    method:"GET",
    headers:{
      jwttoken:localStorage.getItem("token")
    },
  }).then((response)=>{
    if(response.data && response.data.chartData) {
      cb(response.data.chartData);
    }
  })
}

export function ChartWallet (cb) {
	axios({
    url:`${baseUrl}/account/estimation/chart`,
    method:"GET",
    headers:{
      jwttoken:localStorage.getItem("token")
    },
  }).then(({data})=>{
    if(data) {
      cb(data.tradeData);
    }
  }).catch(errorHandler)
}
