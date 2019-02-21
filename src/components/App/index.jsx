import React from 'react'

import { Header } from 'components/Header'
import { SearchSettings } from 'components/SearchSettings'
import { Footer } from 'components/Footer'
import { MainScreen } from '../MainScreen'
import { connect } from 'react-redux'
// import { MovieInfoScreen } from '../MovieInfoScreen'

import { showMovieInfo } from '../../actions'
import {MovieInfoScreen} from '../MovieInfoScreen'

// Header className="movie-card" - for movie card markup
// Header className="search-result" - for search result markup

export class AppUnwrapped extends React.Component {
    render() {
            if (this.props.mainViewsSwitch === showMovieInfo) {
            return <MovieInfoScreen genre={this.props.filmsArray[this.props.filmKey].genres[0]}/>
            } else {
                return (
                    <>
                        <Header className="search-result"/>
                        <SearchSettings counter={this.props.filmsFoundQuantity} />
                        <MainScreen/>
                        <Footer/>
                    </>
                )
                }
            }
}

const mapStateToProps = state => {
    return {
        filmsFoundQuantity: state.filmsFoundQuantity,
        mainViewsSwitch: state.mainViewsSwitch,
        filmsArray: state.filmsArray,
        filmKey: state.filmKey
    }
}

export const App = connect(mapStateToProps)(AppUnwrapped)
