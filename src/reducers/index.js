import { SearchStatus } from '../constants'
import { actions } from '../actionNames'

const initialState = {
    mainViewsSwitch: SearchStatus.noResults,
    loadedFilmsInfo: {
        filmsAreLoaded: false,
        filmsArray: 'NO_DATA',
    },
    searchRequest: {
        searchByFilter: 'searchBy=title'
    },
    sameGenreFilms: {
        sameGenreFilmsData: [],
        isSameGenreFilmLoaded: false
    }
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
                loadedFilmsInfo: {
                    filmsArray: action.payload
                }
            }
        case actions.loadingStatusUpdate :
            return {
                ...state,
                loadedFilmsInfo: {
                    filmsAreLoaded: action.payload
                }
            }
        case actions.searchDataAction :
            return {
                ...state,
                searchRequest:{
                    getSearchRequest: action.payload
                }

            }
        case actions.searchBySwitchAction :
            return {
                ...state,
                loadedFilmsInfo: {
                    searchByFilter: action.payload
                }
            }
        case actions.moviesFoundQuantityUpdate :
            return {
                ...state,
                loadedFilmsInfo: {
                    filmsFoundQuantity: action.payload
                }
            }

        case actions.showFilmInfoAction :
            return {
                ...state,
                sameGenreFilms: {
                    filmInfo: action.payload,
                    sameGenreFilms: [],
                    isSameGenreFilmLoaded: false
                }
            }
        case actions.filmKeyAction :
            return {
                ...state,
                loadedFilmsInfo: {
                    filmKey: action.payload
                }
            }
        case actions.sameGenreFilmsAction :
            return {
                ...state,
                sameGenreFilms: {
                    sameGenreFilmsData: action.payload,
                    isSameGenreFilmLoaded: true
                }
            }
        default:
            return state
    }
}
