import { actions } from '../actionNames'

export const getData = data => {
  return {
    type: actions.search.DataAction,
    payload: data
  }
}

export const searchFilter = filter => {
  return {
    type: actions.search.BySwitchAction,
    payload: filter
  }
}

export const sortFilter = filter => {
  return {
    type: actions.sortBySwitchAction,
    payload: filter
  }
}
