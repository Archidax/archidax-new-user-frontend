import { baseUrlTrade, baseUrlTradeVersion, baseUrl, baseAxiosTrading } from '../index'
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
  }).then(({data})=>{
    if(data && data.data) {
      cb(data.data);
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

export function getChartDepth (market_pair, depth, setDepthData) {
	baseAxiosTrading({
    url:`/depthChart?market_pair=${market_pair}&depth=${depth}`,
    method:"GET",
  }).then(({data})=>{
    if(data) {
      setDepthData(data)
    } else {
      setDepthData({
        bids: [],
        asks: []
      })
    }
  }).catch((err) => {
    setDepthData(null)
  })
}


export function getVolumeChart (market_pair, depth, setVolumeChart, setIsLoading) {
	baseAxiosTrading({
    url:`/volumeChart?symbol=${market_pair}&depth=${depth}`,
    method:"GET",
  }).then(({data})=>{
    if(data) {
      setVolumeChart(data.volumeChart)
    }
  }).catch((err) => {
    console.log(err.response, 'error get chart volume data')
  })
}
