import { createSelector } from 'reselect'
import {
  FormClass,
  HeaderClass,
  SearchButtonClass,
  SearchStatus
} from '../constants'

const searchRequestSelector = state => state.get('SearchRequest')
export const searchParamsSelector = createSelector(
  searchRequestSelector,
  searchParams => ({
    sortBy: searchParams.get('SortBy'),
    searchBy: searchParams.get('SearchBy')
  })
)

export const fullRequestSelector = createSelector(
  searchRequestSelector,
  searchParams => ({
    sortBy: searchParams.get('SortBy'),
    searchBy: searchParams.get('SearchBy'),
    text: searchParams.get('Text')
  })
)

const filmSelector = state => state.get('ChosenFilm')
export const filmInfoSelector = createSelector(
  filmSelector,
  film => ({
    film: film ? film : null,
    genre: film ? film.genres[0] : null
  })
)

export const chosenFilmInfoSelector = createSelector (
    filmSelector,
    film => ({
        film: film ? film : null
    })
)

export const isInitializedSelector = createSelector(
    filmSelector,
    film => ({
        film: film
    })
)

const filmsInfoSelector = state => state.get('FilmsInfo')
export const filmsQuantitySelector = createSelector(
  filmsInfoSelector,
  filmsInfo => ({
    filmsQuantity: filmsInfo.length
  })
)

export const formFilmsInfoSelector = createSelector(
  filmsInfoSelector,
  filmsInfo => ({
    filmsArray: filmsInfo,
    filmsLoadingStatus: filmsInfo.length > 0
  })
)

export const filmsQuantityFullSelector = createSelector(
    filmsInfoSelector,
    filmsInfo => ({
        filmsArray: filmsInfo,
        filmsQuantity: filmsInfo.length,
        filmsLoadingStatus: filmsInfo.length > 0
    })
)

export const screenSelector = state => ({
  mainScreen: state.get('ScreenType')
})

export const routingSelector = state => ({
  SkipRouting: state.get('SkipRouting')
})

export const sortBySelector = state => ({
  sortBy: state.get('SearchRequest').get('SortBy')
})

export const formClassSelector = state => ({
  formClass:
    state.get('ScreenType') === SearchStatus.showMovieInfo ||
    state.ScreenType === SearchStatus.notFound
      ? FormClass.hidden
      : FormClass.default
})

export const headerClassSelector = state => ({
  className:
    state.get('ScreenType') === SearchStatus.showMovieInfo
      ? HeaderClass.movieCard
      : HeaderClass.searchResult
})

export const searchButtonSelector = state => ({
  searchButtonClass:
    state.get('ScreenType') === SearchStatus.showMovieInfo
      ? SearchButtonClass.default
      : SearchButtonClass.hidden
})

export const movieInfoFlagSelector = state => ({
    isMovieInfo: state.get('ScreenType') === SearchStatus.showMovieInfo
})

const sameGenreSelector = state => state.get('SameGenreFilms')
export const sameGenreInfoSelector = createSelector(
    sameGenreSelector,
    sameFilms => ({
        sameGenreFilms: sameFilms,
        filmsAreLoaded: sameFilms.length > 0
    })

)

