import React from 'react'
import { connect } from 'react-redux'

import { createSelector } from 'reselect'
import { Header } from '../../components/Header'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'
import { SubHeader } from '../../components/SubHeader'
import {
  filmInfoSelector,
  headerClassSelector,
  movieInfoFlagSelector,
  screenSelector,
  searchButtonSelector
} from '../../selectors'

export const HeaderUnwrapped = props => {
  const handleClick = () => {
    const { dispatch } = props
    dispatch(actionCreator.clearFilmInfo(''))
  }
  const { className, film, mainScreen, genre, searchButtonClass, isMovieInfo } = props
  return mainScreen === SearchStatus.showMovieInfo ? (
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

const mapStateToProps = createSelector(
    [screenSelector, filmInfoSelector, headerClassSelector,searchButtonSelector, movieInfoFlagSelector],
    (screen, film, headerClass, searchButtonClass, movieInfoClass) => ({
      ...screen,
      ...film,
      ...headerClass,
      ...searchButtonClass,
      ...movieInfoClass
    })
)

export const HeaderContainer = connect(mapStateToProps)(HeaderUnwrapped)
