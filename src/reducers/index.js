import { SearchStatus } from '../constants'
import { actions } from '../actionNames'

export const initialState = {
    mainViewsSwitch: SearchStatus.noResults,
    loadedFilmsInfo: {
        filmsAreLoaded: false,
        filmsArray: 'NO_DATA',
    },
    searchRequest: {
        searchByFilter: 'title',
        sortByFilter: 'vote_average'
    },
    sameGenreFilms: {
        sameGenreFilmsData: [],
        isSameGenreFilmLoaded: false
    },
    chosenFilm: {
        film: {}
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
                    ...state.loadedFilmsInfo,
                    filmsArray: action.payload
                }
            }
        case actions.loadingStatusUpdate :
            return {
                ...state,
                loadedFilmsInfo: {
                    ...state.loadedFilmsInfo,
                    filmsAreLoaded: action.payload
                }
            }
        case actions.searchDataAction :
            return {
                ...state,
                searchRequest:{
                    ...state.searchRequest,
                    getSearchRequest: action.payload
                }

            }
        case actions.searchBySwitchAction :
            return {
                ...state,
                searchRequest: {
                    ...state.searchRequest,
                    searchByFilter: action.payload
                }
            }
        case actions.sortBySwitchAction :
            return {
                ...state,
                searchRequest: {
                    ...state.searchRequest,
                    sortByFilter: action.payload
                }
             }
        case actions.moviesFoundQuantityUpdate :
            return {
                ...state,
                loadedFilmsInfo: {
                    ...state.loadedFilmsInfo,
                    filmsFoundQuantity: action.payload
                }
            }

        case actions.showFilmInfoAction :
            return {
                ...state,
                sameGenreFilms: {
                    ...state.sameGenreFilms,
                    filmInfo: action.payload,
                    sameGenreFilms: [],
                    isSameGenreFilmLoaded: false
                }
            }
        case actions.filmKeyAction :
            return {
                ...state,
                loadedFilmsInfo: {
                    ...state.loadedFilmsInfo,
                    filmKey: action.payload
                }
            }
        case actions.sameGenreFilmsAction :
            return {
                ...state,
                sameGenreFilms: {
                    ...state.sameGenreFilms,
                    sameGenreFilmsData: action.payload,
                    isSameGenreFilmLoaded: true,
                }
            }
        case actions.defineZoneClick :
            return {
                ...state,
                sameGenreFilms: {
                    ...state.sameGenreFilms,
                    isClickFromSameFilms: action.payload
                }
            }
        case actions.clickedFilm :
            return {
                ...state,
                chosenFilm: {
                    ...state.chosenFilm,
                    film: action.payload
                }
            }
        default:
            return state
    }
}
