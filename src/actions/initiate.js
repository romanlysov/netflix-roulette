import { sagaActions } from '../actionNames'
import { SearchStatus } from '../constants'

export const setChosenFilm = (array, film, key, state) => {
    return {
        type: sagaActions.sagaFilmObject,
        array,
        key,
        film: film,
        state,
        status: SearchStatus.showMovieInfo,
    }
}

export const setInfoFromRouting = (sortBy, match) => {
    return {
        type: sagaActions.sagaAppFilmAction,
        sortBy,
        match
    }
}

export const getInfoFromUrl = (params, sortBy) => {
    return {
        type: sagaActions.sagaAppFilterAction,
        params,
        sortBy
    }
}

export const triggerSortBy = (sortBy, searchBy, value) => {
    return {
        type: sagaActions.sagaSortByAction,
        sortBy,
        searchBy,
        value
    }
}

export const triggerSortByDefault = sortBy => {
    return {
        type: sagaActions.sagaSortByDefaultAction,
        sortBy
    }
}

export const triggerFormSubmit = (value, searchByFilter, sortBy) => {
    return {
        type: sagaActions.sagaFormSubmitAction,
        value,
        searchByFilter,
        sortBy
    }
}

export const triggerFetchAllFilms = sortBy => {
    return {
        type: sagaActions.sagaFetchAllFilmsAction,
        sortBy
    }
}
