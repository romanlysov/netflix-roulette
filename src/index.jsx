import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'

import { reducer } from './reducers'
import { Test } from './components/Test'
import { AppFilm } from './containers/AppFilm'
import { AppMain } from './containers/AppMain'
import { AppFilter } from './containers/AppFilter'
import { NotFound } from './components/NotFound'
import { watchAllActions } from '../sagas/saga'

import './style.scss'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watchAllActions)

render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/films/:id" exact component={AppFilm} />
        <Route path="/filter" component={AppFilter} />
        <Route path="/" exact component={AppMain} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
