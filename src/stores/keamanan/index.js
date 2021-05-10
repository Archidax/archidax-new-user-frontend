const initialState = {
    // Login History
    loginHistory: [],

    // 2FA
    gCode: null,

    // Check GAuth Status
    isGAuth: false,

    // Check GAuth Login
    isGAuthLogin: false
}

const keamananReducer = ((state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "LOGIN_HISTORY":
            return {
                ...state,
                loginHistory: data
            }
        case "DELETE_LOG_ITEM":
            return {
                ...state,
                loginHistory: state.loginHistory.filter(el => el._id !== data)
            }
        case "SET_GCODE":
            return {
                ...state,
                gCode: data
            }
        case "GAUTH_STATUS":
            return {
                ...state,
                isGAuth: data
            }
        case "LOGIN_GAUTH":
            return {
                ...state,
                isGAuthLogin: data
            }
        default:
            return state;
    }
})

export default keamananReducer;
