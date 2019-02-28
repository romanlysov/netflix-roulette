import { actions } from '../actionNames'
import { SearchStatus } from '../constants'

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

const setSortByFilter = filter => {
    return {
        type: actions.sortBySwitchAction,
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

const setClickFromZoneFlag = zone => {
    return {
        type: actions.defineZoneClick,
        payload: zone
    }
}

const getClickedFilmInStore = film => {
    return {
        type: actions.clickedFilm,
        payload: film
    }
}

const setMainFilmInfo = film => {
    return {
        type: actions.filmObject,
        film: film,
        status: SearchStatus.showMovieInfo,
        title: film.title,
        genre: film.genres[0]
    }
}

const setAllFilmsInfo = films => {
    return {
        type: actions.filmsDataAllInfo,
        films: films,
        mainScreen: SearchStatus.showRequested,
        quantity: films.length

    }
}

export const  actionCreator = {
    setMainView,
    setFilmsLoadingStatus,
    getFilmsData,
    getSearchData,
    setSearchByFilter,
    updateMoviesFoundQuantity,
    getMovieInfo,
    setFilmKey,
    getSameGenreFilms,
    setClickFromZoneFlag,
    getClickedFilmInStore,
    setSortByFilter,
    setMainFilmInfo,
    setAllFilmsInfo
}

