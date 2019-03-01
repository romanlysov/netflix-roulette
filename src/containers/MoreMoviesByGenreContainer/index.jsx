import React from 'react'
import { connect } from 'react-redux'

import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader } from '../../components/YetLoader'
import { fetchSameFilms } from '../../handlers/FetchSameFilms'
import { FilmInfoHandler } from '../../handlers/FilmInfoHandler'
import { actionCreator } from '../../actions'

class MoreMoviesByGenreUnwrapped extends React.Component {
  async componentDidMount() {
    const { genre, dispatch } = this.props
    await fetchSameFilms(dispatch, genre)
  }

  onClickHandler = async ({ dataKey }) => {
    const { dispatch, sameGenreFilms } = this.props
    dispatch(actionCreator.setFilmKey(dataKey))
    FilmInfoHandler(dispatch)(sameGenreFilms[dataKey], true)
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
    filmKey: state.FilmsInfo.filmKey
  }
}

export const MoreMoviesByGenreContainer = connect(mapStateToProps)(
  MoreMoviesByGenreUnwrapped
)
