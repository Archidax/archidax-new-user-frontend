
const initialState = {
    isLogin: false,
    userData: false,
    userAccount: false,
    showLoading: false,

    getest: "",
    getestChallenge: "",
    new_captcha: true,
    success: 1,

    //User IP
    userIP: {}
};

const userReducer = ((state = initialState, action) => {
    let { type, data } = action;

    switch (type) {
        case "SET_GETEST":
            return {
                ...state,
                getest: data.id,
                getestChallenge: data.challenge,
                new_captcha: data.new_captcha,
                success: data.success
            }
        case "CLEAN_GETEST":
            return {
                ...state,
                getest: "",
                getestChallenge: "",
                new_captcha: true,
                success: 1
            }
        case "CLEAN_AUTH":
            return {
                isLogin: false,
                userData: false,
                userAccount: false,
                showLoading: false,

                getest: "",
                getestChallenge: "",
                new_captcha: true,
                success: 1
            }
        case "SET_LOADING":
            return { ...state, showLoading: data }
        case "SET_ISLOGIN":
            return { ...state, isLogin: data };
        case "SET_USERDATA":
            return { ...state, userData: data };
        case "SET_USERACCOUNT":
            return { ...state, userAccount: data };
        case "USER_IP":
            return { ...state, userIP: data }
        default:
            return state;
    }
})

export default userReducer;