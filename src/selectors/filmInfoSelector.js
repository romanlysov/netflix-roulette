import { createSelector } from 'reselect'
import { mainSelector } from './simpleSelectors'

export const filmSelector = createSelector(
  mainSelector,
  main => main.get('chosenFilm')
)
export const filmInfoSelector = createSelector(
  filmSelector,
  film => ({
    film: film ? film : {},
    genre: film ? film.genres[0] : null
  })
)
