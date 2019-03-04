import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from './reducers'
import { App } from './containers/App'

export const store = createStore(reducer, composeWithDevTools())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
