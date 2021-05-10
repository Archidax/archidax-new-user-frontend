const initialState = {
    listAkun: [],
    tarikHistory: []
}

const tarikReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SET_AKUN": 
            return {
                ...state,
                listAkun: data
            }
        case "ADD_AKUN": 
            return {
                ...state,
                listAkun: [...state.listAkun, data]
            }
        case "SET_HISTORY": 
            return {
                ...state,
                tarikHistory: data
            }
        case "ADD_HISTORY": 
            return {
                ...state,
                tarikHistory: [...state.tarikHistory, data]
            }
        default:
            return state
    }
}

export default tarikReducer