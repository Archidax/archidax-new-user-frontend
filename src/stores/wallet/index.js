
const initialState = {
    assets : [],
    est: 0,
    saldo: 0
    
};

const walletReducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_ASSETS":
            return {
                ...state, 
                assets : data.acc, 
                est: data.asset_est, 
                saldo: data.saldo}
        default:
            return state;
    }
})

export default walletReducer;