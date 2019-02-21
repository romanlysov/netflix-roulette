import { actions } from '../actionNames'

const setMainView = status => {
    return {
        type: actions.mainViewSwitchAction,
        payload: status
    }
}

const setFilmsLoadingStatus = status => {
    return {
        type: actions.loadingStatusUpdate,
        payload: status
    }
}

const getFilmsData = data => {
    return {
        type: actions.filmsDataAction,
        payload: data
    }
}

const getSearchData = data => {
    return {
        type: actions.searchDataAction,
        payload: data
    }
}

const setSearchByFilter = filter => {
    return {
        type: actions.searchBySwitchAction,
        payload: filter
    }
}

const updateMoviesFoundQuantity = quantity => {
    return {
        type: actions.moviesFoundQuantityUpdate,
        payload: quantity
    }
}
const setFilmKey = key => {
    return {
        type: actions.filmKeyAction,
        payload: key
    }
}

const getMovieInfo = film => {
    return {
        type: actions.showFilmInfoAction,
        payload: film
    }
}

const getSameGenreFilms = data => {
    return {
        type: actions.sameGenreFilmsAction,
        payload: data
    }
}

export const  actionCreator = {
    setMainView: setMainView,
    setFilmsLoadingStatus: setFilmsLoadingStatus,
    getFilmsData: getFilmsData,
    getSearchData: getSearchData,
    setSearchByFilter: setSearchByFilter,
    updateMoviesFoundQuantity: updateMoviesFoundQuantity,
    getMovieInfo: getMovieInfo,
    setFilmKey: setFilmKey,
    getSameGenreFilms: getSameGenreFilms
}

