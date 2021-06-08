const initialState = {
    allIEOProjects: [],
    myIEOPortfolio: [],
    IEODetails: null,
    userBalance: 0

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
