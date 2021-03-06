const initialState = {
    loading: false,
    price24H: {
        Open: 0,
        High: 0,
        Low: 0,
        Close: 0,
        Change: 0,
        Volume: 0,
        VolumeCrypto: 0,
    },
    PairSymbol:"",
    currencyFrom:"",
    currencyTo:"",
    pairFrom:"",
    pairTo:"",
    icon:"",
    other:null,
    LISTING_EXCHANGE_ORDER:{
        Exchange:[]    
    },
    OrderPending: [],
    FormDataBuy:{
        price:0,
        amount:0,
    }, 
    FormDataSell:{
        price:0,
        amount:0,
    },
    myFav:[],
    searchCrypto: ''
};

const pasarTradingReducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_LOADING":
            return { ...state, loading: data};
        case "SET_PASAR_TRADING":
            return { ...state, price24H: data };
        case "SET_MYFAV":
            return { ...state, myFav: data };
        case "LISTING_EXCHANGE":
            return {
                ...state,
                LISTING_EXCHANGE_ORDER:{
                    ...state.LISTING_EXCHANGE_ORDER,
                    Exchange:data,
                }
            }
        case "SET_ORDER_PENDING":
            return {
                ...state,
                OrderPending: data
            }
        case "ADD_ORDER_PENDING":
            return {
                ...state,
                OrderPending: [data].concat(state.OrderPending) 
            }
        case "DELETE_ORDER_PENDING":
            return {
                ...state,
                OrderPending: state.OrderPending.filter(OrderPending => OrderPending._id !== data)
            }
        case "DELETE_ALL_ORDER_PENDING":
            return {
                ...state,
                OrderPending: []
            }
        case "RX_PAIR":
            return {
                ...state,
                PairSymbol:`${data.pairTo}/${data.pairFrom}`,
                currencyFrom:data.currencyFrom,
                currencyTo:data.currencyTo,
                pairFrom:data.pairFrom,
                pairTo:data.pairTo,
                icon: data.icon
            }
        case "SET_FORMDATASELL":
            return {
                ...state,
                FormDataSell:{
                    ...state.FormDataSell,
                    price:data.price,
                    amount:data.amount,
                }
            }
        case "SET_FORMDATABUY":
            return {
                ...state,
                FormDataBuy:{
                    ...state.FormDataBuy,
                    price:data.price,
                    amount:data.amount,
                },
            }
        case "SET_SEARCH_CRYPTO":
            return {
                ...state,
                searchCrypto: data
            }
        default : 
            return state;
    }
})

export default pasarTradingReducer;