import { actions } from '../actionNames'
import { reducer, initialState } from './index'
import { SearchStatus } from '../constants'

test(('mainViewSwitchAction'), () => {
    const action = {
        type: actions.mainViewSwitchAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        ScreenType: action.payload
    })
})

test(('filmsDataAction'), () => {
    const action = {
        type: actions.filmsDataAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        FilmsInfo: {
            ...initialState.FilmsInfo,
            Array: action.payload
        }
    })
})

test(('loadingStatusUpdate'), () => {
    const action = {
        type: actions.loadingStatusUpdate
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        FilmsInfo: {
            ...initialState.FilmsInfo,
            AreLoaded: action.payload
        }
    })
})

test(('searchDataAction'), () => {
    const action = {
        type: actions.searchDataAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
      ScreenType: SearchStatus.showRequested,
        SearchRequest:{
            ...initialState.SearchRequest,
            Text: action.payload
        }
    })
})

test(('searchBySwitchAction'), () => {
    const action = {
        type: actions.searchBySwitchAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        SearchRequest: {
            ...initialState.SearchRequest,
            SearchBy: action.payload
        }
    })
})

test(('sortBySwitchAction'), () => {
    const action = {
        type: actions.sortBySwitchAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        SearchRequest: {
            ...initialState.SearchRequest,
            SortBy: action.payload
        }
    })
})

test(('moviesFoundQuantityUpdate'), () => {
    const action = {
        type: actions.moviesFoundQuantityUpdate
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        FilmsInfo: {
            ...initialState.FilmsInfo,
            Quantity: action.payload
        }
    })
})

test(('showFilmInfoAction'), () => {
    const action = {
        type: actions.showFilmInfoAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        SameGenreFilms: {
            ...initialState.SameGenreFilms,
            filmInfo: action.payload,
            Array: [],
            AreLoaded: false
        }
    })
})

test(('filmKeyAction'), () => {
    const action = {
        type: actions.filmKeyAction
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        FilmsInfo: {
            ...initialState.FilmsInfo,
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
        SameGenreFilms: {
            ...initialState.SameGenreFilms,
            Array: action.payload,
            AreLoaded: true,
        }
    })
})

test(('clickedFilm'), () => {
    const action = {
        type: actions.clickedFilm
    }
    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        ChosenFilm: {
            ...initialState.ChosenFilm,
            Film: action.payload
        }
    })
})


