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
    mainViewsSwitch: state.get('ScreenType'),
    filmInfo: state.get('SameGenreFilms').filmInfo,
    film: state.get('ChosenFilm').Film
    ? state.get('ChosenFilm').Film.toJS()
    : state.get('ChosenFilm').Film,
    genre: state.get('ChosenFilm').Genre,
    className:
      state.get('ScreenType') === SearchStatus.showMovieInfo
        ? HeaderClass.movieCard
        : HeaderClass.searchResult,
    searchButtonClass:
        state.get('ScreenType') === SearchStatus.showMovieInfo
        ? SearchButtonClass.default
        : SearchButtonClass.hidden,
    isMovieInfo: state.get('ScreenType') === SearchStatus.showMovieInfo
  }
}

export const HeaderContainer = connect(mapStateToProps)(HeaderUnwrapped)
