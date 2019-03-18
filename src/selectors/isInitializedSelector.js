import { createSelector } from 'reselect'
import { filmSelector } from './filmInfoSelector'

export const isInitializedSelector = createSelector(
  filmSelector,
  film => ({
    film: film,
    genre: film ? film.genres[0] : null
  })
)
