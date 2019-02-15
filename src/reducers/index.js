import { VISIBILITY, NO_RESULTS } from '../actions'

const initialState = {
    VISIBILITY: NO_RESULTS
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case VISIBILITY :
            return Object.assign({}, state, {
                VISIBILITY: action.payload
            })
        default:
            return state
    }
}
