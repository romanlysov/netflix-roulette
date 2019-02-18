import { FILMS_ARRAY, FILMS_ARE_LOADED } from '../action_names'

export const MAIN_VIEW_SWITCH = 'MAIN_VIEW_SWITCH'
export const NO_RESULTS = 'NO_RESULTS'
export const SHOW_REQUESTED = 'SHOW_REQUESTED'

// testing action creators

export function setMainView(status) {
    return {
        type: MAIN_VIEW_SWITCH,
        payload: status
    }
}

// search-form action creators

export const setFilmsLoadingStatus = status => {
    return {
        type: FILMS_ARE_LOADED,
        payload: status
    }
}

export const getFilmsData = data => {
    return {
        type: FILMS_ARRAY,
        payload: data
    }
}

