import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { actionCreator } from '../../actions'
import { SearchStatus, HeaderClass, SearchButtonClass } from '../../constants'
import { SubHeader } from '../../components/SubHeader'

export const HeaderUnwrapped = props => {
  const handleClick = () => {
    const { dispatch } = props
    dispatch(actionCreator.clearFilmInfo())
  }
  const { className, film, mainViewsSwitch, genre, searchButtonClass, isMovieInfo } = props
  return mainViewsSwitch === SearchStatus.showMovieInfo ? (
    <>
      <Header
        film={film}
        className={className}
        onclick={handleClick}
        searchButtonClass={searchButtonClass}
        isMovieInfo = {isMovieInfo}
      />
      <SubHeader genre={genre} />
    </>
  ) : (
    <Header
      film={film}
      className={className}
      onclick={handleClick}
      searchButtonClass={searchButtonClass}
      isMovieInfo={isMovieInfo}
    />
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
        : HeaderClass.searchResult,
    searchButtonClass:
      state.ScreenType === SearchStatus.showMovieInfo
        ? SearchButtonClass.default
        : SearchButtonClass.hidden,
    isMovieInfo: state.ScreenType === SearchStatus.showMovieInfo
  }
}

export const HeaderContainer = connect(mapStateToProps)(HeaderUnwrapped)
