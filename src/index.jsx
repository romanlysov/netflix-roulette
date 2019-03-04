import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { reducer } from './reducers'
import { App } from './containers/App'
import { Test } from './components/Test'
import { SearchResultLayoutItem } from './components/MainScreen/SearchResultLayout/SearchResultLayoutItem'

export const store = createStore(reducer, composeWithDevTools())
render(
  <BrowserRouter>
    <Provider store={store}>
      <App>
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/:id" component={SearchResultLayoutItem} />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
