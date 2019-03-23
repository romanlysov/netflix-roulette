import { fromJS, Map } from 'immutable'
import { actions } from '../actionNames'

export function routingReducer(state = Map({ SkipRouting: false }), action) {
  switch (action.type) {
    case actions.routing:
      return state.setIn(['SkipRouting'], fromJS(action.payload))
    default:
      return state
  }
}
