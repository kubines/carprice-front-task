import data from 'data.json'

function reducer(state = data, action) {
    switch (action.type) {
        case 'ITEM_CREATE':
            return {
                ...state,
                data: [...state.data, action.item],
            }
        case 'ITEM_FIRST_COPY':
            return {
                ...state,
                data: [...state.data, state.data[0]],
            }
        case 'ITEM_FIRST_DELETE':
            return {
                ...state,
                data: state.data.slice(1),
            }
        case 'ITEM_LAST_COPY':
            return {
                ...state,
                data: [state.data[state.data.length - 1], ...state.data],
            }
        case 'ITEM_LAST_DELETE':
            return {
                ...state,
                data: state.data.slice(0, -1),
            }
        default:
            return state
    }
}

export default reducer