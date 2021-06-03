const initialState = {
    allIEOProjects: [],
    myIEOPortfolio: [],
    IEODetails: null

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
        default:
            return state;
    }
})

export default launchpadReducer;
