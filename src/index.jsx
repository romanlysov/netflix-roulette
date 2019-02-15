import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducers'
import { setVisibility } from './actions'

import { App } from 'components/App'

const store = createStore(reducer, composeWithDevTools())
store.dispatch(setVisibility('SHOW_REQUESTED'))

render(
    <Provider store={store}>
        < App />
    </Provider>
    , document.getElementById('root'))
