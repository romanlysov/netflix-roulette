import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { routingReducer } from './routing'
import { mainReducer } from './main'


export const reducer =  combineReducers({
  main: mainReducer,
  routing: routingReducer,
  form: formReducer
})
