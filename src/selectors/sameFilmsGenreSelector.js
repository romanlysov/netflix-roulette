import { createSelector } from 'reselect'

export const genreSelector = state => state.get('SameGenre')
export const sameFilmsGenreSelector = createSelector(
    genreSelector,
    sameFilms => ({
        genre: sameFilms.genre
    })
)