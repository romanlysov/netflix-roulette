import React from 'react'
import { connect } from 'react-redux'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { getFilms } from 'components/GetFilms'
import { NoResults } from 'components/MainScreen/NoResults'
import { SearchResultLayout } from 'components/MainScreen/SearchResult'

import './style.scss'
import {MovieInfoHandler} from 'components/MovieInfoHandler';

export class MainScreenUnwrapped extends React.Component {
    componentDidMount() {
        getFilms(this.props, `http://react-cdp-api.herokuapp.com/movies?searchBy=title`)
    }
    onClickHandle = (event) => {
        MovieInfoHandler(this.props, event)
    }
    render() {
        const { filmsLoadingStatus, mainViewsSwitch, filmsArray } = this.props
        if (filmsLoadingStatus && (mainViewsSwitch === 'showRequested')) {
            return (
                <div className='main-screen'>
                    <ErrorBoundary>
                         <SearchResultLayout films={filmsArray} onClick={this.onClickHandle}/>
                    </ErrorBoundary>
                </div>
            )
        } return <NoResults/>
    }
}
const mapStateToProps = (state) => {
    return {
        mainViewsSwitch: state.mainViewsSwitch,
        filmsLoadingStatus: state.loadedFilmsInfo.filmsAreLoaded,
        filmsArray: state.loadedFilmsInfo.filmsArray,
        filmInfoChosen: state.filmInfo,
        filmKey: state.filmKey
    }
}

export const MainScreen = connect(mapStateToProps)(MainScreenUnwrapped)
