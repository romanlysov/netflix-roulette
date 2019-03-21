import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { App } from '../App'
import { actionCreator } from '../../actions'
import { fullRequestSelector, sortBySelector } from '../../selectors'

export class AppFilterUnwrapped extends React.Component {
  async componentDidMount() {
    const { dispatch, sortBy, text } = this.props
    if (text !== '') {
      return
    }
    const params = new URLSearchParams(location.search)
    dispatch(actionCreator.initiate.getInfoFromUrl(params, sortBy))
  }
  render() {
    return <App />
  }
}

const mapStateToProps = createSelector(
  [sortBySelector, fullRequestSelector],
  (sortBy, searchParams) => ({
    ...sortBy,
    ...searchParams
  })
)

export const AppFilter = connect(mapStateToProps)(AppFilterUnwrapped)
