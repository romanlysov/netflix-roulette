import { mainViewSwitch, noResults } from '../actions'
import {filmsAreLoaded, filmsArray, getSearchRequest} from '../actionNames'

const initialState = {
    mainViewsSwitch: noResults,
    filmsAreLoaded: false,
    filmsArray: 'NO_DATA'
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case mainViewSwitch :
            return {
                ...state,
                mainViewsSwitch: action.payload
            }
        case filmsArray :
            return {
                ...state,
                filmsArray: action.payload
            }
        case filmsAreLoaded :
            return {
                ...state,
                filmsAreLoaded: action.payload
            }
        case getSearchRequest :
            return {
                ...state,
                getSearchRequest: action.payload
            }
        default:
            return state
    }
}
