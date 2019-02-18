import { MAIN_VIEW_SWITCH, NO_RESULTS } from '../actions'
import {FILMS_ARE_LOADED, FILMS_ARRAY} from '../action_names'

const initialState = {
    MAIN_VIEW_SWITCH: NO_RESULTS,
    FILMS_ARE_LOADED: false,
    FILMS_ARRAY: 'NO_DATA'
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case MAIN_VIEW_SWITCH :
            return {
                ...state,
                MAIN_VIEW_SWITCH: action.payload
            }
        case FILMS_ARRAY :
            return {
                ...state,
                FILMS_ARRAY: action.payload
            }
        case FILMS_ARE_LOADED :
            return {
                ...state,
                FILMS_ARE_LOADED: action.payload
            }
        default:
            return state
    }
}
