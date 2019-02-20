import React from 'react'

import { FormContainer } from '../../containers/FormContainer'
import { MovieCard } from 'components/MovieCard'
// import { filmsArray } from '../../../assets/data'
import './style.scss'
import {actionCreator, showRequested, showMovieInfo} from '../../actions'
import {connect} from 'react-redux'
import { StaticHeader } from './StaticHeader'

// const film = filmsArray[0]

export class HeaderUnwrapped extends React.Component {
    handleClick = () => {
        this.props.dispatch(actionCreator.setMainView(showRequested))
    }
    findMovieInfo = () => {
            const chosenFilmName = this.props.filmInfo
            const numberOfFilms = this.props.filmsArray
            for (let i = 0; i <= numberOfFilms; i++) {
                if (this.props.filmsArray[i].title === chosenFilmName) {
                    return i
                } else {
                    return null
                }
            }
        }
        render() {
         if (this.props.mainViewsSwitch === showMovieInfo) {
            return <header className={`header ${this.props.className}`}>
                <StaticHeader className={'navigation'} onclick={this.handleClick}/>
                <MovieCard film={this.findMovieInfo(this.props.filmsArray)}/>
                <FormContainer/>
            </header>
        }
            return <header className={`header ${this.props.className}`}>
                <StaticHeader className={'navigation'} onclick={this.handleClick}/>
                <FormContainer/>
            </header>
    }
}

const mapStateToProps = state => {
    return {
    mainViewsSwitch: state.mainViewsSwitch,
    filmInfo: state.filmInfo,
    filmsArray: state.filmsArray
    }
}

export const Header = connect(mapStateToProps)(HeaderUnwrapped)
