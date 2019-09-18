import { createSelector } from 'reselect'
import { mainSelector } from './simpleSelectors'

export const genreSelector = createSelector(
  mainSelector,
  main => main.get('sameGenre')
)
export const sameFilmsGenreSelector = createSelector(
  genreSelector,
  sameFilms => ({
    genre: sameFilms.genre
  })
)
