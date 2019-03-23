import { combineReducers } from 'redux'
import { routingReducer } from './routing'
import { mainReducer } from './main'

export const reducer =  combineReducers({
  main: mainReducer,
  routing: routingReducer
})
