import { baseUrlTrade, baseUrlTradeVersion, baseUrl, baseAxiosTrading } from '../index'
import axios from 'axios'
import errorHandler from '../errorHandler'

export const getLanguageFromURL = () => {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function HomeMarket (cb) {
	axios({
    url:`${baseUrlTrade}${baseUrlTradeVersion}/ListingExchangeChart`,
    method:"GET",
    headers:{
      jwttoken:localStorage.getItem("token")
    },
  }).then(({data})=>{
    if(data && data.chartData) {
      cb(data.chartData);
    } else {
      cb([]);
    }
  }).catch(err=>{
    cb([]);
  })
}

export function HomeTopGainer (cb) {
	axios({
    url:`${baseUrlTrade}${baseUrlTradeVersion}/Home/Market`,
    method:"GET",
    headers:{
      jwttoken:localStorage.getItem("token")
    },
  }).then(({data})=>{
    if(data && data.data) {
      cb(data.data);
    } else {
      cb([]);
    }
  }).catch(err=>{
    cb([]);
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
        pair_symbol: market_pair,
        timestamp: Date.now(),
        bids: [] ,
        asks: []
      })
    }
  }).catch(e => console.log(e))
}


export function getVolumeChart (market_pair, depth, setVolumeChart) {
	baseAxiosTrading({
    url:`/volumeChart?symbol=${market_pair}&depth=${depth}`,
    method:"GET",
  }).then(({data})=>{
    if(data) {
      setVolumeChart(data.volumeChart)
    }else{
      setVolumeChart([])
    }
  }).catch(e => console.log(e))
}
