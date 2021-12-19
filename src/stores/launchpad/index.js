const initialState = {
    allIEOProjects: [],
    myIEOPortfolio: null,
    IEODetails: null,
    userBalance: 0,
    myIEOPortfoliodDetails: null
}

const launchpadReducer = ((state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "ALL_IEO_PROJECTS":
            return {
                ...state,
                allIEOProjects: data
            }
        case "MY_IEO_PORTFOLIO":
            return {
                ...state,
                myIEOPortfolio: data
            }
        case "MY_IEO_PORTFOLIO_DETAILS":
            return {
                ...state,
                myIEOPortfoliodDetails: data
            }
        case "IEO_DETAILS":
            return {
                ...state,
                IEODetails: data
            }
        case "IEO_USER_BALANCE":
            return {
                ...state,
                userBalance: data
            }
        default:
            return state;
    }
})

export default launchpadReducer;
