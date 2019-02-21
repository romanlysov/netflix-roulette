import React from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { connect } from 'react-redux'
import { SearchResultLayout } from './SearchResult'
import { NoResults } from './NoResults'
import { getFilms } from '../GetFilms'

import './style.scss'
import { actionCreator, showMovieInfo } from '../../actions'
// import {MovieCard} from '../MovieCard'

export class MainScreenUnwrapped extends React.Component {
    onClickHandle = (event) => {
        const currentFilm = event.currentTarget
        const filmTitle = currentFilm.querySelector('.film-layout__title').innerHTML
        const filmKey = currentFilm.getAttribute('data-key')
        this.props.dispatch(actionCreator.setMainView(showMovieInfo))
        this.props.dispatch(actionCreator.getMovieInfo(filmTitle))
        this.props.dispatch(actionCreator.setFilmkey(filmKey))
        console.log(filmTitle, filmKey)
    }
    componentDidMount() {
        getFilms(this.props, `http://react-cdp-api.herokuapp.com/movies?searchBy=title`)
    }
    render() {
        if (this.props.filmsLoadingStatus && (this.props.mainViewsSwitch === 'showRequested')) {
            return (
                <div className={'main-screen'}>
                    <ErrorBoundary>
                         <SearchResultLayout films={this.props.filmsArray} onClick={this.onClickHandle}/>
                    </ErrorBoundary>
                </div>
            )
        } return <NoResults/>
    }
}
const mapStateToProps = (state) => {
    return {
        mainViewsSwitch: state.mainViewsSwitch,
        filmsLoadingStatus: state.filmsAreLoaded,
        filmsArray: state.filmsArray,
        filmInfoChosen: state.filmInfo,
        filmKey: state.filmKey
    }
}
export const MainScreen = connect(mapStateToProps)(MainScreenUnwrapped)
