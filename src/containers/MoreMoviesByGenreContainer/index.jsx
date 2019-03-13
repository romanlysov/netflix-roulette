import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { createSelector } from 'reselect'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'
import { fetchSameFilms } from '../../handlers/FetchSameFilms'
// import { FilmInfoHandler } from '../../handlers/FilmInfoHandler'

export class MoreMoviesByGenreUnwrapped extends React.Component {
  async componentDidMount() {
    const { isInitialized } = this.props
    if (!isInitialized) {
      const { genre, dispatch } = this.props
      await fetchSameFilms(dispatch, genre)
    }

  }

  render() {
    const { filmsAreLoaded, sameGenreFilms } = this.props

    return filmsAreLoaded ? (
      <SearchResultLayout
        films={sameGenreFilms}
        onclick={()=>{}}
      />
    ) : (
      <YetLoader/>
    )
  }
}


const mapStateToProps = state => {
  return {
    sameGenreFilms: Array.isArray(state.get('SameGenreFilms').Array)
        ? []
        : state.get('SameGenreFilms').Array.toJS()
    ,
    filmsAreLoaded: state.get('SameGenreFilms').AreLoaded,
    filmInfo: state.get('SameGenreFilms').filmInfo,
    filmKey: state.get('FilmsInfo').filmKey,
    isInitialized: state.get('IsInitialized')
  }
}

export const MoreMoviesByGenreContainer = withRouter(connect(mapStateToProps)(
  MoreMoviesByGenreUnwrapped
))
