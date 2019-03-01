import React from 'react'
import { connect } from 'react-redux'

import { Header } from 'components/Header'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'

class HeaderUnwrapped extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props
    dispatch(actionCreator.setMainView(SearchStatus.showRequested))
  }
  render() {
    const { className, film } = this.props

    return (
      <Header film={film} className={className} onClick={this.handleClick} />
    )
  }
}

const mapStateToProps = state => {
  const isClickFromSameFilms = state.sameGenreFilms.isClickFromSameFilms
  const filmsArray = state.loadedFilmsInfo.filmsArray
  const sameGenreFilmsArray = state.sameGenreFilms.sameGenreFilmsData
  const filmKey = state.loadedFilmsInfo.filmKey
  return {
    mainViewsSwitch: state.mainViewsSwitch,
    filmInfo: state.sameGenreFilms.filmInfo,
    film:
      state.mainViewsSwitch !== SearchStatus.showMovieInfo
        ? undefined
        : isClickFromSameFilms
        ? sameGenreFilmsArray[filmKey]
        : filmsArray[filmKey]
  }
}

export const HeaderSwitcher = connect(mapStateToProps)(HeaderUnwrapped)
