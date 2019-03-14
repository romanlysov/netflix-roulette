import { createSelector } from 'reselect'
import { filmSelector } from './filmInfoSelector'

export const isInitializedSelector = createSelector(
    filmSelector,
    film => ({
        film: film
    })
)