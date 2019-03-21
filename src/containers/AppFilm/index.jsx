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

class AppFilmUnwrapped extends React.Component {
  async componentDidMount() {
    const { SkipRouting } = this.props
    if (SkipRouting) {
      const { dispatch } = this.props
      dispatch(actionCreator.routing.setSkipRouting(false))
      return
    }
    const { dispatch, sortBy, match } = this.props
    dispatch(actionCreator.initiate.setInfoFromRouting(sortBy, match))
  }

  async componentDidUpdate(prevProps) {
    const { SkipRouting } = this.props
    if (!SkipRouting && prevProps.SkipRouting) {
      return
    }
    const { dispatch } = this.props
    if (SkipRouting) {
      dispatch(actionCreator.routing.setSkipRouting(false))
      return
    }
    const { sortBy, match } = this.props
    dispatch(actionCreator.initiate.setInfoFromRouting(sortBy, match))
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
