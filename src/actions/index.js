import { filmsArray, filmsAreLoaded, getSearchRequest } from '../actionNames'

export const mainViewSwitch = 'mainViewSwitch'
export const noResults = 'noResults'
export const showRequested = 'showRequested'

export function setMainView(status) {
    return {
        type: mainViewSwitch,
        payload: status
    }
}

export const setFilmsLoadingStatus = status => {
    return {
        type: filmsAreLoaded,
        payload: status
    }
}

export const getFilmsData = data => {
    return {
        type: filmsArray,
        payload: data
    }
}

export const getSearchData = data => {
    return {
        type: getSearchRequest,
        payload: data
    }
}

