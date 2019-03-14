import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { App } from '../App'
import { fetchFilms } from '../../handlers/FetchFilms'
import { getAllFilms } from '../../services/getFilms/getAllFilms'
import { sortBySelector } from '../../selectors'

class AppMainUnwrapped extends React.Component {
    async componentDidMount() {
      const { sortBy, dispatch } = this.props
      await fetchFilms(dispatch, async () => await getAllFilms(sortBy))
    }

    render() {
        return <App/>
    }
}

const mapStateToProps = createSelector(
    sortBySelector,
    (sortBy) => ({
        ...sortBy
    })
)

export const AppMain = connect(mapStateToProps)(AppMainUnwrapped)
