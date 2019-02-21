import React from 'react'
import { connect } from 'react-redux'

import { SearchResultLayout } from 'components/MainScreen/SearchResult'
import { getSameFilms } from 'components/GetSameFilms'
import { MovieInfoHandler } from 'components/MovieInfoHandler';

export class MoreMoviesByGenreUnwrapped extends React.Component {
    componentDidMount() {
        const { genre } = this.props
        const url = `http://react-cdp-api.herokuapp.com/movies?search=${genre}&searchBy=genres`
        getSameFilms(this.props, url)
    }
    onClickHandler = (event) => {
        MovieInfoHandler(this.props, event)
    }
    render() {
        const { isSameGenreFilmLoaded, sameGenreFilms } = this.props
        if (isSameGenreFilmLoaded) {
            return <SearchResultLayout films={sameGenreFilms} onClick={this.onClickHandler}/>
        } return <p>загрузка...</p>
    }
}

const mapStateToProps = state => {
    return {
        sameGenreFilms: state.sameGenreFilms.sameGenreFilmsData,
        isSameGenreFilmLoaded: state.sameGenreFilms.isSameGenreFilmLoaded
    }
}

export const MoreMoviesByGenre = connect(mapStateToProps)(MoreMoviesByGenreUnwrapped)
