const initialState = {
    emailVerification: false,
    telefonVerification: false,
    limitVerification: false,
    readMeLoading: true,
    ip:"",
    lastLoggin: ""
};

const loadingReducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_STAT":
            return { 
                ...state, 
                ip: data.ip,
                lastLoggin: data.lastLoggin
            }
        case "SET_EMAILVERIFICATION":
            return { ...state, emailVerification: data};
        case "SET_LIMITVERIFICATION":
            return { ...state, limitVerification: data};
        case "SET_TELEFONVERIFICATION":
            return { ...state, telefonVerification: data};
        case "SET_READMELOADING":
            return { ...state, readMeLoading: data};
        default : 
            return state;
    }
})

export default loadingReducer;