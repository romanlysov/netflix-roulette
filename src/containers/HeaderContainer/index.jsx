import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { actionCreator } from '../../actions'
import { SearchStatus, HeaderClass } from '../../constants'
import { SubHeader } from '../../components/SubHeader'

export const HeaderUnwrapped = props => {
  const handleClick = () => {
    const { dispatch } = props
    dispatch(actionCreator.setMainView(SearchStatus.showRequested))
    dispatch(actionCreator.getSearchData(''))
  }
  const { className, film, mainViewsSwitch, genre } = props
  return mainViewsSwitch === SearchStatus.showMovieInfo ? (
    <>
      <Header film={film} className={className} onclick={handleClick} />
      <SubHeader genre={genre} />
    </>
  ) : (
    <Header film={film} className={className} onclick={handleClick} />
  )
}

const mapStateToProps = state => {
  return {
    mainViewsSwitch: state.ScreenType,
    filmInfo: state.SameGenreFilms.filmInfo,
    film: state.ChosenFilm.Film,
    genre: state.ChosenFilm.Genre,
    className:
      state.ScreenType === SearchStatus.showMovieInfo
        ? HeaderClass.movieCard
        : HeaderClass.searchResult
  }
}

export const HeaderContainer = connect(mapStateToProps)(HeaderUnwrapped)
