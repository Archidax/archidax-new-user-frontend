
const initialState = {
    notifications : [],
    unreads: 0,
    hasNext: false
};

const notificationReducer = ((state = initialState, action) => {
    let { type, data } = action;

    switch (type) {
        case "SET_NOTIFICATIONS":
            return {
                ...state,
                notifications: data.notifications,
                unreads: data.unreads,
                hasNext: data.hasNext
            }
        case "SET_UNREAD":
            return {
                ...state,
                unreads: data.unreads,
            }
        case "SET_READ_NOTIFICATION":
            let filterRead = state.notifications
            filterRead[filterRead.indexOf(data)].read = true
            return {
                ...state,
                notifications: filterRead,
            }
        case "SET_ALL_READ_NOTIFICATIONS":
            let filterReadAll = state.notifications
            filterReadAll.forEach((filtered, indexFiltered) => {
                filterReadAll[indexFiltered].read = true
            })
            return {
                ...state,
                notifications: filterReadAll,
                unreads: 0,
            }
        case "NEW_NOTIFICATION":
            return {
                ...state,
                notifications: [
                    data,
                    ...state.notifications
                ],
                unreads: state.unreads + 1
            }
        case "MORE_NOTIFICATIONS":
            console.log(data)
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    ...data.notifications,
                ],
                unreads: data.unreads,
                hasNext: data.hasNext
            }
        default:
            return state;
    }
})

export default notificationReducer;