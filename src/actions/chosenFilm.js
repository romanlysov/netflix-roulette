import { actions } from '../actionNames'
import { SearchStatus } from '../constants'

export const setInfo = film => {
    return {
        type: actions.filmObject,
        film: film,
        status: SearchStatus.showMovieInfo,
        title: film.title,
        genre: film.genres[0]
    }
}

export const clearInfo = action => {
    return {
        type: actions.clearFilmInfoAction,
        payload: action
    }
}