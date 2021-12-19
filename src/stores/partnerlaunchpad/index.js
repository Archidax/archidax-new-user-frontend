const initialState = {
    myLaunchpad: [],
    myLaunchpadDetail: null,

    myLaunchpadSubscription: null,
    myLaunchpadStats: null,

    roundPrefered: null

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
        case "SET_MY_LAUNCHPAD_STATS":
            return {
                ...state,
                myLaunchpadStats: data
            }

        case "SET_COIN_ROUND":
            console.log("here")
            return {
                ...state,
                roundPrefered : data
            }
        default:
            return state;
    }
})

export default partnerLaunchpadReducer;
