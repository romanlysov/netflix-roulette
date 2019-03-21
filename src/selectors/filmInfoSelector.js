import { createSelector } from 'reselect'

export const filmSelector = state => state.get('ChosenFilm')
export const filmInfoSelector = createSelector(
    filmSelector,
    film => ({
        film: film ? film : {},
        genre: film ? film.genres[0] : null
    })
)