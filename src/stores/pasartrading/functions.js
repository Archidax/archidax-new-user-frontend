import { baseAxios } from '../index'
import { baseUrlTrade, baseUrlTradeVersion } from '../index'
import Swal from 'sweetalert2'
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
        type: "LISTING_EXCHANGE",
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

// Actions
// GET
export function GetOrderBuyAndSell ({dispatch,pair,side,limit}) {
    axios({
        url:`${baseUrlTrade}${baseUrlTradeVersion}/TradeOrder`,
        method:"GET",
        headers:{
            jwttoken:localStorage.getItem("token")
        },
        params:{
            pair,
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

export function getPasarTrading (dispatch) {
    Swal.fire({
        title: 'Loading !',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        onBeforeOpen: () => {
            Swal.showLoading()
        },
    });
    baseAxios.get("/pasartading", {
        headers: {
            jwttoken: localStorage.getItem('token')
        }
    })
        .then(async ({ data }) => {
            Swal.close()
            try {
                dispatch(setPasarTrading(data))
            } catch (err) {
                console.log(err)
            }
        })
        .catch(err => {
            if(err.response){
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: err.response.data.message,
                })
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: "SERVER MATI!!!! HOSEA!!",
                })
            }
        })
};

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

export function GetOrderLiveMarket ({dispatch,pair}) {
    axios({
        url:`${baseUrlTrade}${baseUrlTradeVersion}/LiveMarket`,
        method:"GET",
        headers:{
            jwttoken:localStorage.getItem("token")
        },
        params:{
            pair,
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
                Open:data.open,
                High:data.high,
                Low:data.low,
                Close:data.close,
                Change:data.change,
                Volume:data.volumePrice,
                VolumeCrypto:data.volumeCoin,
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

export function GetListingExchange () {
    return async function (dispatch) {
        try {
            const {data} = await axios({
                url:`${baseUrlTrade}${baseUrlTradeVersion}/ListingExchange`,
                method:"GET"
            })
            console.log(data, ",,,,,,,,,,,,,,,,,,sdadsadw")
            // dispatch(SET_RX_LISTING_EXCHANGE(data?.data));
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
            text:'apakah anda yakin ingin membatalkan ?', 
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
            text: `Apakah anda yakin ingin ${FormData.side ? FormData.side.toUpperCase()==="BUY"?"membeli":FormData.side.toUpperCase()==="SELL"?"menjual":null: null} ${FormData.symbol} dengan ${FormData.price ? 'harga '+FormData.price : 'total '+FormData.amount} ?`, 
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
