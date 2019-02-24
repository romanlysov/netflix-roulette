import { actions } from '../actionNames'
import { reducer, initialState } from './index'

test(('mainViewSwitchAction'), () => {
    const action = {
        type: actions.mainViewSwitchAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        mainViewsSwitch: action.payload
    })
})

test(('filmsDataAction'), () => {
    const action = {
        type: actions.filmsDataAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        loadedFilmsInfo: {
            ...initialState.loadedFilmsInfo,
            filmsArray: action.payload
        }
    })
})

test(('loadingStatusUpdate'), () => {
    const action = {
        type: actions.loadingStatusUpdate
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        loadedFilmsInfo: {
            ...initialState.loadedFilmsInfo,
            filmsAreLoaded: action.payload
        }
    })
})

test(('searchDataAction'), () => {
    const action = {
        type: actions.searchDataAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        searchRequest:{
            ...initialState.searchRequest,
            getSearchRequest: action.payload
        }
    })
})

test(('searchBySwitchAction'), () => {
    const action = {
        type: actions.searchBySwitchAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        searchRequest: {
            ...initialState.searchRequest,
            searchByFilter: action.payload
        }
    })
})

test(('sortBySwitchAction'), () => {
    const action = {
        type: actions.sortBySwitchAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        searchRequest: {
            ...initialState.searchRequest,
            sortByFilter: action.payload
        }
    })
})

test(('moviesFoundQuantityUpdate'), () => {
    const action = {
        type: actions.moviesFoundQuantityUpdate
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        loadedFilmsInfo: {
            ...initialState.loadedFilmsInfo,
            filmsFoundQuantity: action.payload
        }
    })
})

test(('showFilmInfoAction'), () => {
    const action = {
        type: actions.showFilmInfoAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        sameGenreFilms: {
            ...initialState.sameGenreFilms,
            filmInfo: action.payload,
            sameGenreFilms: [],
            isSameGenreFilmLoaded: false
        }
    })
})

test(('filmKeyAction'), () => {
    const action = {
        type: actions.filmKeyAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        loadedFilmsInfo: {
            ...initialState.loadedFilmsInfo,
            filmKey: action.payload
        }
    })
})

test(('sameGenreFilmsAction'), () => {
    const action = {
        type: actions.sameGenreFilmsAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        sameGenreFilms: {
            ...initialState.sameGenreFilms,
            sameGenreFilmsData: action.payload,
            isSameGenreFilmLoaded: true,
        }
    })
})

test(('defineZoneClick'), () => {
    const action = {
        type: actions.defineZoneClick
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        sameGenreFilms: {
            ...initialState.sameGenreFilms,
            isClickFromSameFilms: action.payload
        }
    })
})

test(('clickedFilm'), () => {
    const action = {
        type: actions.clickedFilm
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        chosenFilm: {
            ...initialState.chosenFilm,
            film: action.payload
        }
    })
})


