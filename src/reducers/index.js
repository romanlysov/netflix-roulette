import { Map, fromJS } from 'immutable'
import { SearchStatus } from '../constants'
import { actions } from '../actionNames'

export const initialState = {
  SkipRouting: false,
  ScreenType: SearchStatus.notFound,
  FilmsInfo: {
    AreLoaded: false,
    Array: 'NO_DATA'
  },
  SearchRequest: {
    SearchBy: 'title',
    SortBy: 'vote_average'
  },
  SameGenreFilms: {
    Array: [],
    AreLoaded: false
  },
  ChosenFilm: {}
}

export function reducer(state = initialState, action) {
  state = Map(state)
  switch (action.type) {
    case actions.mainViewSwitchAction:
      return state.setIn(['ScreenType'], fromJS(action.payload))

    case actions.filmsDataAction:
      return state.get('FilmsInfo').setIn(['Array'], fromJS(action.payload))

    case actions.loadingStatusUpdate:
      return state.setIn(['FilmsInfo', 'AreLoaded'], fromJS(action.payload))

    case actions.search.DataAction:
      return state
        .setIn(['ScreenType'], SearchStatus.showRequested)
        .setIn(['SearchRequest', 'Text'], fromJS(action.payload))

    case actions.search.BySwitchAction:
      return state.setIn(['SearchRequest', 'SearchBy'], fromJS(action.payload))

    case actions.sortBySwitchAction:
      return state.setIn(['SearchRequest', 'SortBy'], fromJS(action.payload))

    case actions.moviesFoundQuantityUpdate:
      return state.setIn(['FilmsInfo', 'Quantity'], fromJS(action.payload))

    case actions.showFilmInfoAction:
      return state
        .setIn(['SameGenreFilms', 'filmInfo'], fromJS(action.payload))
        .setIn(['SameGenreFilms', 'Array'], [])
        .setIn(['SameGenreFilms', 'AreLoaded'], false)

    case actions.filmKeyAction:
      return state.setIn(['FilmsInfo', 'filmKey'], fromJS(action.payload))

    case actions.sameGenreFilmsAction:
      return state
        .setIn(['SameGenreFilms', 'Array'], fromJS(action.payload))
        .setIn(['SameGenreFilms', 'AreLoaded'], true)

    case actions.clickedFilm:
      return state.setIn(['ChosenFilm', 'Film'], fromJS(action.payload))

    case actions.filmObject:
      return state
        .setIn(['IsInitialized'], true)
        .setIn(['ScreenType'], fromJS(action.status))
        .setIn(['ChosenFilm', 'Film'], fromJS(action.film))
        .setIn(['ChosenFilm', 'Title'], fromJS(action.title))
        .setIn(['ChosenFilm', 'Genre'], fromJS(action.genre))

    case actions.filmsDataAllInfo:
      return state
        .setIn(['ScreenType'], fromJS(action.mainScreen))
        .setIn(['FilmsInfo', 'AreLoaded'], true)
        .setIn(['FilmsInfo', 'Array'], fromJS(action.films))
        .setIn(['FilmsInfo', 'Quantity'], fromJS(action.quantity))

    case actions.moreFilmsByIdAction:
      return state
        .setIn(['SameGenreFilms', 'Array'], fromJS(action.payload))
        .setIn(['SameGenreFilms', 'AreLoaded'], true)

    case actions.routing:
      return state.setIn(['SkipRouting'], fromJS(action.payload))

    case actions.dataFromQueryUrlAction:
      return state
        .setIn(['SearchRequest', 'Text'], fromJS(action.value))
        .setIn(['SearchRequest', 'SearchBy'], fromJS(action.searchBy))

    case actions.clearFilmInfoAction:
      return state
        .setIn(['ScreenType'], SearchStatus.showRequested)
        .setIn(['SearchRequest', 'Text'], fromJS(action.payload))

    default:
      return state
  }
}
