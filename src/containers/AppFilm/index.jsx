import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { App } from '../App'
import { actionCreator } from '../../actions'
import { mountMoreFilmsById } from '../../handlers/MountMoreFilmsById'

class AppFilmUnwrapped extends React.Component {
  async componentDidMount() {
    const {SkipRouting} = this.props
    if (SkipRouting) {
      const {dispatch} = this.props
      dispatch(actionCreator.setRouting(false))
    } else {
      const {dispatch, sortBy, match} = this.props
      await mountMoreFilmsById({dispatch, sortBy, match})
    }
  }

  async componentDidUpdate(prevProps) {
    const { location } = this.props
    if (prevProps.location.pathname !== location.pathname) {
      const {SkipRouting} = this.props
      if (SkipRouting) {
        const {dispatch} = this.props
        dispatch(actionCreator.setRouting(false))
      } else {
        const {dispatch, sortBy, match} = this.props
        await mountMoreFilmsById({dispatch, sortBy, match})
      }
    }
  }
  render() {
    return <App />
  }
}

const mapStateToProps = state => {
  return {
    SkipRouting: state.SkipRouting,
    film: state.ChosenFilm.Film,
    genre: state.ChosenFilm.Genre,
    sortBy: state.SearchRequest.SortBy,
    searchBy: state.SearchRequest.SearchBy
  }
}

export const AppFilm = withRouter(connect(mapStateToProps)(AppFilmUnwrapped))
