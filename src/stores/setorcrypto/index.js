const initialState = {
    // Coin
    coinDetails: {
        type: "",
        balance: 0,
        frozen_balance: 0,
        address: null
    },

    depoCoinHistory: []
}

const setorCryptoReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SET_COIN_DETAILS":
            return {
                ...state,
                coinDetails: data
            }
        case "DEPO_COIN_HISTORY":
            return {
                ...state,
                depoCoinHistory: data
            }
        default:
            return state;
    }
}

export default setorCryptoReducer