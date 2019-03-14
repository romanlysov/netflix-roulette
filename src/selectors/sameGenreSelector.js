import { createSelector } from 'reselect'

export const sameGenreSelector = state => state.get('SameGenreFilms')
export const sameGenreInfoSelector = createSelector(
    sameGenreSelector,
    sameFilms => ({
        sameGenreFilms: sameFilms,
        filmsAreLoaded: sameFilms.length > 0
    })
)