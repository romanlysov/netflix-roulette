import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'
import { isInitializedSelector, sameGenreInfoSelector } from '../../selectors'
import { actionCreator } from '../../actions'

export class MoreMoviesByGenreUnwrapped extends React.Component {
  onClickHandle = ({ dataKey }) => {
    const { dispatch, sameGenreFilms, film } = this.props
    dispatch(
      actionCreator.initiate.setChosenFilm(sameGenreFilms, film, dataKey)
    )
  }

  render() {
    const { sameGenreFilms } = this.props
    return sameGenreFilms.length > 0 ? (
      <SearchResultLayout films={sameGenreFilms} onclick={this.onClickHandle} />
    ) : (
      <YetLoader />
    )
  }
}

const mapStateToProps = createSelector(
  [sameGenreInfoSelector, isInitializedSelector],
  (sameFilms, film) => ({
    ...sameFilms,
    ...film
  })
)

export const MoreMoviesByGenreContainer = withRouter(
  connect(mapStateToProps)(MoreMoviesByGenreUnwrapped)
)
