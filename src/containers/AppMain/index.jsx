import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { App } from '../App'
import { sortBySelector } from '../../selectors'
import { actionCreator } from '../../actions'

class AppMainUnwrapped extends React.Component {
  async componentDidMount() {
    const { sortBy, dispatch } = this.props
    dispatch(actionCreator.initiate.triggerFetchAllFilms(sortBy))
  }

  render() {
    return <App />
  }
}

const mapStateToProps = createSelector(
  sortBySelector,
  sortBy => ({
    ...sortBy
  })
)

export const AppMain = connect(mapStateToProps)(AppMainUnwrapped)
