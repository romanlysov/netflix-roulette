import React from 'react'
import { connect } from 'react-redux'

import { SearchResultLayout } from 'components/MainScreen/SearchResultLayout'
import { fetchSameFilms } from '../../../../handlers/FetchSameFilms'
import { FilmInfoHandler } from '../../../../handlers/FilmInfoHandler'
import { actionCreator } from '../../../../actions'

export class MoreMoviesByGenreUnwrapped extends React.Component {
  async componentDidMount() {
    const { genre, dispatch } = this.props
    await fetchSameFilms(dispatch, genre)
  }

  onClickHandler = async ({ dataKey }) => {
    const { dispatch, sameGenreFilms } = this.props
    dispatch(actionCreator.getClickedFilmInStore(sameGenreFilms[dataKey]))
    FilmInfoHandler(dispatch)(sameGenreFilms[dataKey], true)
  }

  render() {
    const { isSameGenreFilmLoaded, sameGenreFilms } = this.props
    if (isSameGenreFilmLoaded) {
      return (
        <SearchResultLayout
          films={sameGenreFilms}
          onclick={this.onClickHandler}
        />
      )
    }
    return <p>загрузка...</p>
  }
}

const mapStateToProps = state => {
  return {
    sameGenreFilms: state.SameGenreFilms.Array,
    isSameGenreFilmLoaded: state.SameGenreFilms.AreLoaded,
    filmInfo: state.SameGenreFilms.filmInfo,
    filmKey: state.FilmsInfo.filmKey
  }
}

export const MoreMoviesByGenre = connect(mapStateToProps)(
  MoreMoviesByGenreUnwrapped
)
