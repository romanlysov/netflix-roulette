import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducers'
// import { setMainView } from './actions'

import { App } from 'components/App'

export const store = createStore(reducer, composeWithDevTools())
// store.dispatch(setMainView('showRequested'))

render(
    <Provider store={store}>
        < App />
    </Provider>
    , document.getElementById('root'))
