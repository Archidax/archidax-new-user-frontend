const initialState = {
    legal: []
};

const dynamicPageReducer = ((state = initialState, action) => {
    let { type, data } = action;

    switch (type) {
        case "SET_DYNAMICPAGES":
            return data
        default:
            return state;
    }
})

export default dynamicPageReducer;