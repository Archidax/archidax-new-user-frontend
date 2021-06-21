const initialState = {
    myLaunchpad: [],
    myLaunchpadDetail: null,

    myLaunchpadSubscription: null

}

const partnerLaunchpadReducer = ((state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SET_ALL_MY_LAUNCHPAD":
            return {
                ...state,
                myLaunchpad: data
            }
        case "SET_MY_LAUNCHPAD_DETAIL":
            return {
                ...state,
                myLaunchpadDetail: data
            }
        case "SET_MY_LAUNCHPAD_SUBSCRIPTION":
            return {
                ...state,
                myLaunchpadSubscription: data
            }
        default:
            return state;
    }
})

export default partnerLaunchpadReducer;
