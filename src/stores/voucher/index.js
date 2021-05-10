const initialState = {
    history: [],
    historyHasNext: false,
    redeemed: [],
    redeemedHasNext: false,
}

const voucherReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SET_VOUCHER_HISTORY":
            return {
                ...state,
                history: [...data],
                historyHasNext: data.length < 10 ? false : true
            }
        case "UNSHIFT_VOUCHER_HISTORY": 
            return {
                ...state,
                history: [data, ...state.history]
            }
        case "ADD_VOUCHER_HISTORY": 
            console.log(data)
            return {
                ...state,
                history: [...state.history, ...data],
                historyHasNext: data.length < 10 ? false : true
            }
        case "SET_REDEEMED_VOUCHER_HISTORY":
            return {
                ...state,
                redeemed: [...data]
            }
        case "ADD_REDEEMED_VOUCHER_HISTORY": 
            return {
                ...state,
                redeemed: [...state.redeemed, ...data],
                redeemedHasNext: data.length < 10 ? false : true
            }
        default:
            return state
    }
}

export default voucherReducer