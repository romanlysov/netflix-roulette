import { actions } from '../actionNames'

export const getDataFromUrl = (value, searchBy) => {
    return {
        type: actions.dataFromQueryUrlAction,
        value,
        searchBy
    }
}

export const setSkipRouting = data => {
    return {
        type: actions.routing,
        payload: data
    }
}
