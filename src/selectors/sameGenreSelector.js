import { createSelector } from 'reselect'
import { mainSelector } from './simpleSelectors'

export const sameGenreSelector = createSelector(
  mainSelector,
  main => main.get('sameGenre')
)
export const sameGenreInfoSelector = createSelector(
  sameGenreSelector,
  sameFilms => ({
    sameGenreFilms: sameFilms.films,
    filmsAreLoaded: sameFilms.films.length > 0
  })
)
