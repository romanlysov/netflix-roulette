import React from 'react'
import { connect } from 'react-redux'

import { SearchResultLayout } from 'components/MainScreen/SearchResult'
import { fetchSameFilms } from 'components/FetchSameFilms'
import {sameFilmInfoHandler} from '../../../../handlers/SameFilmInfoHandler';

export class MoreMoviesByGenreUnwrapped extends React.Component {
  async componentDidMount() {
    const { genre, dispatch } = this.props
    await fetchSameFilms(dispatch, genre)
  }

  onClickHandler = async event => {
    sameFilmInfoHandler(event, this.props)
  }

  render() {
    const { isSameGenreFilmLoaded, sameGenreFilms } = this.props
    if (isSameGenreFilmLoaded) {
      return (
        <SearchResultLayout
          films={sameGenreFilms}
          onClick={this.onClickHandler}
        />
      )
    }
    return <p>загрузка...</p>
  }
}

const mapStateToProps = state => {
  return {
    sameGenreFilms: state.sameGenreFilms.sameGenreFilmsData,
    isSameGenreFilmLoaded: state.sameGenreFilms.isSameGenreFilmLoaded,
    filmInfo: state.sameGenreFilms.filmInfo,
    filmKey: state.loadedFilmsInfo.filmKey
  }
}

export const MoreMoviesByGenre = connect(mapStateToProps)(
  MoreMoviesByGenreUnwrapped
)
