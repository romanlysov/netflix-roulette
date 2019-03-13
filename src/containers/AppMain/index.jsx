import React from 'react'
import { connect } from 'react-redux'

import { App } from '../App'
import { fetchFilms } from '../../handlers/FetchFilms'
import { getAllFilms } from '../../services/getFilms/getAllFilms'

class AppMainUnwrapped extends React.Component {
    async componentDidMount() {
      const { sortBy, dispatch } = this.props
      await fetchFilms(dispatch, async () => await getAllFilms(sortBy))
    }

    render() {
        return <App/>
    }
}

const mapStateToProps = state => {
    return {
        sortBy: state.get('SearchRequest').sortBy
    }
}

export const AppMain = connect(mapStateToProps)(AppMainUnwrapped)
