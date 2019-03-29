import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'
import { isInitializedSelector, sameGenreInfoSelector } from '../../selectors'
import { actionCreator } from '../../actions'

export const MoreMoviesByGenreUnwrapped = ({
  dispatch,
  sameGenreFilms,
  film
}) => {
  const onClickHandle = ({ dataKey }) => {
    dispatch(
      actionCreator.initiate.setChosenFilm(sameGenreFilms, film, dataKey)
    )
  }
  return sameGenreFilms.length > 0 ? (
    <SearchResultLayout films={sameGenreFilms} onclick={onClickHandle} />
  ) : (
    <YetLoader />
  )
}

const mapStateToProps = createSelector(
  [sameGenreInfoSelector, isInitializedSelector],
  (sameFilms, film = () => {}) => ({
    ...sameFilms,
    ...film
  })
)

export const MoreMoviesByGenreContainer = withRouter(
  connect(mapStateToProps)(MoreMoviesByGenreUnwrapped)
)
