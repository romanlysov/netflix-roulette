import React from 'react'
import {SearchResultLayout} from '../../../MainScreen/SearchResult'
// import mapStateToProps from 'react-redux/es/connect/mapStateToProps';
import {connect} from 'react-redux'
import {getSameFilms} from '../../../GetSameFilms'

export class MoreMoviesByGenreUnwrapped extends React.Component {
    componentWillMount() {
        const url = 'http://react-cdp-api.herokuapp.com/movies?search=drama&searchBy=genres'
        getSameFilms(this.props, url)
    }
    render() {
        return <SearchResultLayout films={this.props.sameGenreFilms}/>
    }
}

const mapStateToProps = state => {
    return {
        sameGenreFilms: state.sameGenreFilms
    }
}

export const MoreMoviesByGenre = connect(mapStateToProps)(MoreMoviesByGenreUnwrapped)
