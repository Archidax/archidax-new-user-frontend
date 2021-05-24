const initialState = {
    allProjects: []

}

const launchpadReducer = ((state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "ALL_PROJECTS_LAUNCHED":
            return {
                ...state,
                allProjects: data
            }
        default:
            return state;
    }
})

export default launchpadReducer;
