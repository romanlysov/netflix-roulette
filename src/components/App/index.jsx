import React from 'react'

import { connect } from 'react-redux'
import { Header } from 'components/Header'
import { SearchSettings } from 'components/SearchSettings'
import { Footer } from 'components/Footer'
import { MainScreen } from '../MainScreen'
import { MovieInfoScreen } from '../MovieInfoScreen'
import { SearchStatus } from '../../constants'

const AppUnwrapped = ({ mainViewsSwitch, filmsArray, filmKey, filmsFoundQuantity }) => {
    if (mainViewsSwitch === SearchStatus.showMovieInfo) {
            return <MovieInfoScreen genre={filmsArray[filmKey].genres[0]}/>
            } else {
                return (
                    <>
                        <Header className="search-result"/>
                        <SearchSettings counter={filmsFoundQuantity} />
                        <MainScreen/>
                        <Footer/>
                    </>
                )
                }
}

const mapStateToProps = state => {
    return {
        filmsFoundQuantity: state.filmsFoundQuantity,
        mainViewsSwitch: state.mainViewsSwitch,
        filmsArray: state.loadedFilmsInfo.filmsArray,
        filmKey: state.filmKey
    }
}

export const App = connect(mapStateToProps)(AppUnwrapped)
