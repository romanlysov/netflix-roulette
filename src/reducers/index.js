import { noResults } from '../actions'
import { actions } from '../actionNames'

const initialState = {
    mainViewsSwitch: noResults,
    filmsAreLoaded: false,
    filmsArray: 'NO_DATA',
    searchByFilter: 'searchBy=title'
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.mainViewSwitchAction :
            return {
                ...state,
                mainViewsSwitch: action.payload
            }
        case actions.filmsDataAction :
            return {
                ...state,
                filmsArray: action.payload
            }
        case actions.loadingStatusUpdate :
            return {
                ...state,
                filmsAreLoaded: action.payload
            }
        case actions.searchDataAction :
            return {
                ...state,
                getSearchRequest: action.payload
            }
        case actions.searchBySwitchAction :
            return {
                ...state,
                searchByFilter: action.payload
            }
        case actions.moviesFoundQuantityUpdate :
            return {
                ...state,
                filmsFoundQuantity: action.payload
            }
        case actions.showFilmInfoAction :
            return {
                ...state,
                filmInfo: action.payload
            }
        default:
            return state
    }
}
