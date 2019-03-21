import { actions } from '../actionNames'

export const getFilms = (films, genre) => {
    return {
        type: actions.sameGenreFilmsAction,
        payload: films,
        genre
    }
}

export const getFilmsById = films => {
    return {
        type: actions.moreFilmsByIdAction,
        payload: films
    }
}
