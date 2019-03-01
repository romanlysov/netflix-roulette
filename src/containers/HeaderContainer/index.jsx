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
  const isClickFromSameFilms = state.SameGenreFilms.IsTrigger
  const filmsArray = state.FilmsInfo.Array
  const sameGenreFilmsArray = state.SameGenreFilms.Array
  const filmKey = state.FilmsInfo.filmKey
  return {
    mainViewsSwitch: state.ScreenType,
    filmInfo: state.SameGenreFilms.filmInfo,
    film:
      state.ScreenType !== SearchStatus.showMovieInfo
        ? undefined
        : isClickFromSameFilms
        ? sameGenreFilmsArray[filmKey]
        : filmsArray[filmKey]
  }
}

export const HeaderSwitcher = connect(mapStateToProps)(HeaderUnwrapped)
