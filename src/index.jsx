import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {  Router, Route, Switch } from 'react-router-dom'

import { reducer } from './reducers'
import { App } from './containers/App'
import { Test } from './components/Test'

export const store = createStore(reducer, composeWithDevTools())
render(
<Router>
    <Provider store={store}>
        <App >
            <Switch>
            <Route path="/test" component={Test} />
            </Switch>
        </App>
  </Provider>
</Router>,
  document.getElementById('root')
)
