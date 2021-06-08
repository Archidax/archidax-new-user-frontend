import { baseUrlTrade, baseUrlTradeVersion, baseAxiosTrading } from '../index'
import errorHandler from '../errorHandler'
import axios from 'axios'
import Popup from '../../components/popUps'

// Setters
export function setPasarTrading (data) {
    return {
        type: "SET_PASAR_TRADING",
        data: data
    }
}
export function setMyFav(data) {
    return {
        type: "SET_MYFAV",
        data: data     
    }
}
export function setLoading (data) {
    return {
        type: "SET_LOADING",
        data: data
    }
}
export function SET_RX_LISTING_EXCHANGE (data) {
    return {
        type: "SET_LISTINGLIST",
        data: data
    }
}
export function SET_RX_PAIR({currencyFrom,currencyTo,pairFrom,pairTo,icon}) {
    return {
        type:"RX_PAIR",
        data: {currencyFrom, currencyTo, pairFrom, pairTo, icon}
    };
}
export function SET_RX_ORDER_PENDING(OrderPending){
    return {
        type:"SET_ORDER_PENDING",
        data: OrderPending
    };
}
export function ADD_RX_ORDER_PENDING(OrderPending){
    return {
        type:"ADD_ORDER_PENDING",
        data: OrderPending,
    };
}
export function DELETE_RX_ORDER_PENDING(id){
    return {
        type:"DELETE_ORDER_PENDING",
        data: id,
    };
}
export function DELETE_ALL_RX_ORDER_PENDING(){
    return {
        type:"DELETE_ALL_ORDER_PENDING"
    };
}
export function SET_RX_FORM_DATASELL({price,amount}) {
    return {
        type:"SET_FORMDATASELL",
        data: {price,amount}
    };
}
export function SET_RX_FORM_DATABUY({price,amount}) {
    return {
        type:"SET_FORMDATABUY",
        data: {price,amount}
    };
}

// Actions MongoDB
// GET
// get all order
export function GetOrderBuyAndSell ({dispatch,PairSymbol,side,limit}) {
    axios({
        url:`${baseUrlTrade}${baseUrlTradeVersion}/TradeOrder`,
        method:"GET",
        headers:{
            jwttoken:localStorage.getItem("token")
        },
        params:{
            pair:PairSymbol,
            side,
            limit
        },
    }).then(({data})=>{
        dispatch(data.market);
    }).catch((err)=>{
        dispatch([]);
        let Message="";
        if(!err.response){
            Message=err.message;
        }else{
            Message=err.response.data.message;
        }
        Popup.fire({text:Message, title: "error 404"})
    });
}
// get all order pending user
export function GetOrderPending ({pair}) {
    return async function (dispatch) {
        try {
            const {data} = await axios({
                url:`${baseUrlTrade}${baseUrlTradeVersion}/Order`,
                method:"GET",
                headers:{
                    jwttoken:localStorage.getItem("token")
                },
                params:{
                    pair,
                },
            })
            dispatch(SET_RX_ORDER_PENDING(data.Order));
        } catch (err) {
            dispatch(SET_RX_ORDER_PENDING([]));
            let Message="";
            if(!err.response){
                Message=err.message;
            }else{
                Message=err.response.data.message;
            }
            Popup.fire({text:Message, title: "error 404"})
        }
    }
}
// get all history order user
export function GetHistoryOrder ({dispatch,pair}) {
    axios({
        url:`${baseUrlTrade}${baseUrlTradeVersion}/HistoryOrder`,
        method:"GET",
        headers:{
            jwttoken:localStorage.getItem("token")
        },
        params:{
            pair,
        },
    }).then(({data})=>{
        dispatch(data.History);
    }).catch((err)=>{
        dispatch([]);
        let Message="";
        if(!err.response){
            Message=err.message;
        }else{
            Message=err.response.data.message;
        }
        Popup.fire({text:Message, title: "error 404"})
    });
}
// get order live market
export function GetOrderLiveMarket ({dispatch,pair}) {
    axios({
        url:`${baseUrlTrade}${baseUrlTradeVersion}/LiveMarket`,
        method:"GET",
        headers:{
            jwttoken:localStorage.getItem("token")
        },
        params:{
            pair
        },
    }).then(({data})=>{
        dispatch(data.market)
    }).catch((err)=>{
        dispatch([]);
        let Message="";
        if(!err.response){
            Message=err.message;
        }else{
            Message=err.response.data.message;
        }
        Popup.fire({text:Message, title: "error 404"})
    });
}
// get all chat data
export function getChatData ({dispatch}) {
    axios({
        url:`${baseUrlTrade}${baseUrlTradeVersion}/chatting/all`,
        method:"GET",
        headers:{
            jwttoken:localStorage.getItem("token")
        }
    }).then(({data})=>{
        dispatch(data?.Message)
    }).catch((err)=>{
        dispatch([]);
        let Message="";
        if(!err.response){
            Message=err.message;
        }else{
            Message=err.response.data.message;
        }
        Popup.fire({text:Message, title: "error 404"})
    });
};

// get specific coin price
export function GetOrderLastPrice ({pair}) {
    return async function (dispatch) {
        try {
            const {data} = await axios({
                url:`${baseUrlTrade}${baseUrlTradeVersion}/prices`,
                method:"GET",
                params:{
                    pair
                },
            })
            dispatch(setPasarTrading({
                Open:data.price_24hours.price24h_open,
                High:data.price_24hours.price24h_high,
                Low:data.price_24hours.price24h_low,
                Close:data.price_24hours.price24h_close,
                Change:data.price_24hours.price24h_change,
                Volume:data.price_24hours.price24h_priceVolume,
                VolumeCrypto:data.price_24hours.price24h_volume,
            }));
        } catch (err) {
            dispatch(setPasarTrading({
                Open:0,
                High:0,
                Low:0,
                Close:0,
                Change:0,
                Volume:0,
                VolumeCrypto:0,
            }));
        }
    }
}

// get all data pair
export function GetListingExchange () {
    return async function (dispatch) {
        try {
            const {data} = await axios({
                url:`${baseUrlTrade}${baseUrlTradeVersion}/ListingExchange`,
                method:"GET"
            })
            dispatch(SET_RX_LISTING_EXCHANGE(data?.data));
        }
        catch (err) {
            dispatch(SET_RX_LISTING_EXCHANGE([]));
        }
    }
}

// METHOD POST
export function CancelOrderId ({id,symbol}) {
    return async function (dispatch) {
        Popup.fire({
            text:'Do you want want to cancel your order ?', 
            title: "Order", 
            cancel: true,
            onClickOk: async() => {
                try {
                    const {data} = await axios({
                        url:`${baseUrlTrade}${baseUrlTradeVersion}/Order/${id}`,
                        method:"POST",
                        headers:{
                            jwttoken:localStorage.getItem("token")
                        },
                        data:{
                            symbol
                        }
                    })
                    dispatch(DELETE_RX_ORDER_PENDING(id));
                    Popup.fire({text:data.message, title: "Order"})
                } catch(err) {
                    let Message="";
                    if(!err.response){
                        Message=err.message;
                    }else{
                        Message=err.response.data.message;
                    }
                    Popup.fire({text:Message, title: "Order error"})
                }
            }
        })
    }
};

export function Orders ({FormData}) {
    return async function (dispatch) {
        Popup.fire({
            text: `Do you want to ${FormData.side ? FormData.side.toUpperCase()==="BUY"?"buy":FormData.side.toUpperCase()==="SELL"?"sell":null: null} ${FormData.symbol} with ${FormData.price ? 'the price of '+FormData.price : ' for  '+FormData.amount} ?`, 
            title: "Order", 
            cancel: true,
            onClickOk: async() => {
                try {
                    const {data} = await axios({
                        url:`${baseUrlTrade}${baseUrlTradeVersion}/Orders`,
                        method:"POST",
                        headers:{
                            jwttoken:localStorage.getItem("token")
                        },
                        data:{
                            ...FormData
                        }
                    })
                    if(data && data.status === 201&&data.Order) {
                        dispatch(ADD_RX_ORDER_PENDING(data.Order));
                        Popup.fire({text:data.message, title: "Order"})
                    }
                } catch(err) {
                    let Message="";
                    if(!err.response){
                        Message=err.message;
                    }else{
                        Message=err.response.data.message;
                    }
                    Popup.fire({text:Message, title: "Order error"})
                }
            }
        })
    }
}

export function CancelAllOrderPending (pair) {
    return async function (dispatch) {
        try {
            const { data } = await axios({
                url:`${baseUrlTrade}${baseUrlTradeVersion}/CancelOrderAll`,
                method:"DELETE",
                headers:{
                    jwttoken:localStorage.getItem("token")
                },
                data:{
                    symbol: pair
                },
            });
            dispatch(DELETE_ALL_RX_ORDER_PENDING());
            Popup.fire({text:data.message, title: "Order"});
        } catch (err) {
            let Message="";
            if(!err.response){
                Message=err.message;
            }else{
                Message=err.response.data.message;
            }
            Popup.fire({text:Message, title: "Order error"})
        }
    }
}
