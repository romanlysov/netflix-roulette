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
  ChosenFilm: {
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.mainViewSwitchAction:
      return {
        ...state,
        ScreenType: action.payload
      }
    case actions.filmsDataAction:
      return {
        ...state,
        FilmsInfo: {
          ...state.FilmsInfo,
          Array: action.payload
        }
      }
    case actions.loadingStatusUpdate:
      return {
        ...state,
        FilmsInfo: {
          ...state.FilmsInfo,
          AreLoaded: action.payload
        }
      }
    case actions.search.DataAction:
      return {
        ...state,
        ScreenType: SearchStatus.showRequested,
        SearchRequest: {
          ...state.SearchRequest,
          Text: action.payload
        }
      }
    case actions.search.BySwitchAction:
      return {
        ...state,
        SearchRequest: {
          ...state.SearchRequest,
          SearchBy: action.payload
        }
      }
    case actions.sortBySwitchAction:
      return {
        ...state,
        SearchRequest: {
          ...state.SearchRequest,
          SortBy: action.payload
        }
      }
    case actions.moviesFoundQuantityUpdate:
      return {
        ...state,
        FilmsInfo: {
          ...state.FilmsInfo,
          Quantity: action.payload
        }
      }

    case actions.showFilmInfoAction:
      return {
        ...state,
        SameGenreFilms: {
          ...state.SameGenreFilms,
          filmInfo: action.payload,
          Array: [],
          AreLoaded: false
        }
      }
    case actions.filmKeyAction:
      return {
        ...state,
        FilmsInfo: {
          ...state.FilmsInfo,
          filmKey: action.payload
        }
      }
    case actions.sameGenreFilmsAction:
      return {
        ...state,
        SameGenreFilms: {
          ...state.SameGenreFilms,
          Array: action.payload,
          AreLoaded: true
        }
      }
    case actions.clickedFilm:
      return {
        ...state,
        ChosenFilm: {
          ...state.ChosenFilm,
          Film: action.payload
        }
      }
    case actions.filmObject:
      return {
        ...state,
        IsInitialized: true,
        ScreenType: action.status,
        ChosenFilm: {
          ...state.ChosenFilm,
          Film: action.film,
          Title: action.title,
          Genre: action.genre
        }
      }
    case actions.filmsDataAllInfo:
      return {
        ...state,
        ScreenType: action.mainScreen,
        FilmsInfo: {
          ...state.FilmsInfo,
          AreLoaded: true,
          Array: action.films,
          Quantity: action.quantity
        }
      }
    case actions.moreFilmsByIdAction:
      return {
        ...state,
        SameGenreFilms: {
          ...state.SameGenreFilms,
          Array: action.payload,
          AreLoaded: true
        }
      }
    case actions.routing:
      return {
        ...state,
        SkipRouting: action.payload
      }
    case actions.dataFromQueryUrlAction:
      return {
        ...state,
        SearchRequest: {
          ...state.SearchRequest,
          Text: action.value,
          SearchBy: action.searchBy
        }
      }
    case actions.clearFilmInfoAction :
      return {
        ...state,
        ScreenType: SearchStatus.showRequested,
        SearchRequest: {
          ...state.SearchRequest,
          Text: action.payload
        },
        ChosenFilm: {
        }
      }
    default:
      return state
  }
}
