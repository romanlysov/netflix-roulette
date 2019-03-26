import { createSelector } from 'reselect'
import {
  FormClass,
  HeaderClass,
  SearchButtonClass,
  SearchStatus
} from '../../constants'

export const mainSelector = state => state.main

export const routSelector = state => state.routing

export const screenSelector = createSelector(
  mainSelector,
  main => ({
    mainScreen: main.get('screenType')
  })
)

export const routingSelector = createSelector(
  routSelector,
  routing => ({
    skipRouting: routing.get('skipRouting')
  })
)

export const sortBySelector = createSelector(
  mainSelector,
  main => ({
    sortBy: main.get('searchRequest').get('sortBy')
  })
)

export const formClassSelector = createSelector(
  mainSelector,
  main => ({
    formClass:
      main.get('screenType') === SearchStatus.showMovieInfo ||
      main.screenType === SearchStatus.notFound
        ? FormClass.hidden
        : FormClass.default
  })
)

export const headerClassSelector = createSelector(
  mainSelector,
  main => ({
    className:
      main.get('screenType') === SearchStatus.showMovieInfo
        ? HeaderClass.movieCard
        : HeaderClass.searchResult
  })
)

export const searchButtonSelector = createSelector(
  mainSelector,
  main => ({
    searchButtonClass:
      main.get('screenType') === SearchStatus.showMovieInfo
        ? SearchButtonClass.default
        : SearchButtonClass.hidden
  })
)
export const movieInfoFlagSelector = createSelector(
  mainSelector,
  main => ({
    isMovieInfo: main.get('screenType') === SearchStatus.showMovieInfo
  })
)
