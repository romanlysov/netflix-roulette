import { actions } from '../actionNames'
import { SearchStatus } from '../constants'

const getSearchData = data => {
  return {
    type: actions.search.DataAction,
    payload: data
  }
}

const setSearchByFilter = filter => {
  return {
    type: actions.search.BySwitchAction,
    payload: filter
  }
}

const setSortByFilter = filter => {
  return {
    type: actions.sortBySwitchAction,
    payload: filter
  }
}

const getSameGenreFilms = data => {
  return {
    type: actions.sameGenreFilmsAction,
    payload: data
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

const setMoreFilmsByIdInfo = films => {
  return {
    type: actions.moreFilmsByIdAction,
    payload: films
  }
}

const getDataFromQueryUrl = (value, searchBy) => {
  return {
    type: actions.dataFromQueryUrlAction,
    value,
    searchBy
  }
}

const setSkipRouting = data => {
  return {
    type: actions.routing,
    payload: data
  }
}

const clearFilmInfo = action => {
  return {
    type: actions.clearFilmInfoAction,
    payload: action
  }
}

export const actionCreator = {
  getSearchData,
  setSearchByFilter,
  getSameGenreFilms,
  setSortByFilter,
  setMainFilmInfo,
  setAllFilmsInfo,
  setMoreFilmsByIdInfo,
  setSkipRouting,
  getDataFromQueryUrl,
  clearFilmInfo
}
