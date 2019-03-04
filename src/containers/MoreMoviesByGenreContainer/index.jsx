import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'
import { fetchSameFilms } from '../../handlers/FetchSameFilms'
import { FilmInfoHandler } from '../../handlers/FilmInfoHandler'

export class MoreMoviesByGenreUnwrapped extends React.Component {
  async componentDidMount() {
    const { isInitialized } = this.props
    if (!isInitialized) {
      const { genre, dispatch } = this.props
      await fetchSameFilms(dispatch, genre)
    }

  }

  onClickHandler = async ({ dataKey }) => {
    const { dispatch, sameGenreFilms } = this.props
    FilmInfoHandler(dispatch)(sameGenreFilms[dataKey])
  }

  render() {
    const { filmsAreLoaded, sameGenreFilms } = this.props
    return filmsAreLoaded ? (
      <SearchResultLayout
        films={sameGenreFilms}
        onclick={this.onClickHandler}
      />
    ) : (
      <YetLoader/>
    )
  }
}

const mapStateToProps = state => {
  return {
    sameGenreFilms: state.SameGenreFilms.Array,
    filmsAreLoaded: state.SameGenreFilms.AreLoaded,
    filmInfo: state.SameGenreFilms.filmInfo,
    filmKey: state.FilmsInfo.filmKey,
    isInitialized: state.IsInitialized
  }
}

export const MoreMoviesByGenreContainer = withRouter(connect(mapStateToProps)(
  MoreMoviesByGenreUnwrapped
))
