import { actions } from '../actionNames'

export const noResults = 'noResults'
export const showRequested = 'showRequested'

const setMainView = status => {
    return {
        type: actions.mainViewSwitchAction,
        payload: status
    }
}

const setFilmsLoadingStatus = status => {
    return {
        type: actions.loadingStatusUpdate,
        payload: status
    }
}

const getFilmsData = data => {
    return {
        type: actions.filmsDataAction,
        payload: data
    }
}

const getSearchData = data => {
    return {
        type: actions.searchDataAction,
        payload: data
    }
}

const setSearchByFilter = filter => {
    return {
        type: actions.searchBySwitchAction,
        payload: filter
    }
}

export const  actionCreator = {
    setMainView: setMainView,
    setFilmsLoadingStatus: setFilmsLoadingStatus,
    getFilmsData: getFilmsData,
    getSearchData: getSearchData,
    setSearchByFilter: setSearchByFilter
}

