import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'
import { fetchSameFilms } from '../../handlers/FetchSameFilms'
import { isInitializedSelector, sameGenreInfoSelector } from '../../selectors'

export class MoreMoviesByGenreUnwrapped extends React.Component {
  async componentDidMount() {
    const { isInitialized } = this.props
    if (!isInitialized) {
      const { genre, dispatch } = this.props
      await fetchSameFilms(dispatch, genre)
    }

  }

  render() {
    const { sameGenreFilms } = this.props

    return sameGenreFilms.length > 0 ? (
      <SearchResultLayout
        films={sameGenreFilms}
        onclick={()=>{}}
      />
    ) : (
      <YetLoader/>
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

export const MoreMoviesByGenreContainer = withRouter(connect(mapStateToProps)(
  MoreMoviesByGenreUnwrapped
))
