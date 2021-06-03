const initialState = {
    allIEOProjects: []

}

const launchpadReducer = ((state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "ALL_IEO_PROJECTS":
            return {
                ...state,
                allProjects: data
            }
        default:
            return state;
    }
})

export default launchpadReducer;
