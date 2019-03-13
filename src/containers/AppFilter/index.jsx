import React from 'react'
import { connect } from 'react-redux'
import { App } from '../App'
import { fetchDataFromQueryUrl } from '../../handlers/FetchDataFromQueryUrl'

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

const mapStateToProps = state => {
  return {
    sortBy: state.get('SearchRequest').SortBy,
    searchByFilter: state.get('SearchRequest').SearchBy
  }
}

export const AppFilter = connect(mapStateToProps)(AppFilterUnwrapped)
