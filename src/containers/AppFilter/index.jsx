import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { App } from '../App'
import { fetchDataFromQueryUrl } from '../../handlers/FetchDataFromQueryUrl'
import { sortBySelector } from '../../selectors'

export class AppFilterUnwrapped extends React.Component {
  async componentDidMount() {
    const { dispatch, sortBy } = this.props
    const params = new URLSearchParams(location.search)
      await fetchDataFromQueryUrl(dispatch, params, sortBy)
  }
  render() {
    return <App />
  }
}

const mapStateToProps = createSelector(
    sortBySelector,
    (sortBy) => ({
      ...sortBy
    })
)

export const AppFilter = connect(mapStateToProps)(AppFilterUnwrapped)
