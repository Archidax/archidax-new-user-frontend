const initialState = {
    // harga coin last price
    coinPrice: 0,

    otpTarikCrypto: null
}

const tarikCryptoReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SET_COIN_PRICE":
            return {
                ...state,
                coinPrice: data
            }
        case "SET_OTP_TARIK_CRYPTO":
            return {
                ...state,
                otpTarikCrypto: data
            }
        default:
            return state
    }
}

export default tarikCryptoReducer