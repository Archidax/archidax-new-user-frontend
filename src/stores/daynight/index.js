const initialState = {
    // Login History
    mode: true
}

const daynightReducer = ((state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SETNIGHT":
            return {
                ...state,
                mode: true
            }
        case "SETDAY":
            return {
                ...state,
                mode: false
            }
        
        default:
            return state;
    }
})

export default daynightReducer;
