// @flow

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { App } from '../App'
import { actionCreator } from '../../actions'
import {
  searchParamsSelector,
  routingSelector
} from '../../selectors'


type Props = {
  skipRouting?: boolean,
  dispatch: any,
  match: any

}

class AppFilmUnwrapped extends React.Component<Props> {
  static defaultProps = {
    skipRouting: false
  }

  async componentDidMount() {
    const { skipRouting } = this.props
    if (skipRouting) {
      const { dispatch } = this.props
      dispatch(actionCreator.routing.setSkipRouting(false))
      return
    }
    const { dispatch, match } = this.props
    dispatch(actionCreator.initiate.setInfoFromRouting(match))
  }

  async componentDidUpdate(prevProps) {
    const { skipRouting } = this.props
    if (!skipRouting && prevProps.skipRouting) {
      return
    }
    const { dispatch } = this.props
    if (skipRouting) {
      dispatch(actionCreator.routing.setSkipRouting(false))
      return
    }
    const {  match } = this.props
    dispatch(actionCreator.initiate.setInfoFromRouting(match))
  }
  render() {
    return <App />
  }
}

const mapStateToProps = createSelector(
  [routingSelector, searchParamsSelector],
  (routing, searchParams) => {
    return ({
    ...routing,
    ...searchParams
  })}
)

export const AppFilm = withRouter(connect(mapStateToProps)(AppFilmUnwrapped))
