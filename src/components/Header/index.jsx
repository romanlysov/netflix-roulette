import React from 'react'
import { connect } from 'react-redux'

import { MovieCard } from 'components/MovieCard'
import { FormContainer } from '../../containers/FormContainer'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'
import { StaticHeader } from './StaticHeader'

import './style.scss'

class HeaderUnwrapped extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props
    dispatch(actionCreator.setMainView(SearchStatus.showRequested))
  }
  render() {
    const {
      mainViewsSwitch,
      filmsArray,
      filmKey,
      className,
      isClickFromSameFilms,
      sameGenreFilmsArray
    } = this.props
    if (
      mainViewsSwitch === SearchStatus.showMovieInfo &&
      !isClickFromSameFilms
    ) {
      return (
        <header className={`header ${className}`}>
          <StaticHeader className="navigation" onclick={this.handleClick} />
          <MovieCard film={filmsArray[filmKey]} />
          <FormContainer />
        </header>
      )
    } else if (
      mainViewsSwitch === SearchStatus.showMovieInfo &&
      isClickFromSameFilms
    ) {
      return (
        <header className={`header ${className}`}>
          <StaticHeader className="navigation" onclick={this.handleClick} />
          <MovieCard film={sameGenreFilmsArray[filmKey]} />
          <FormContainer />
        </header>
      )
    } else {
      return (
        <header className={`header ${className}`}>
          <StaticHeader className="navigation" onclick={this.handleClick} />
          <FormContainer />
        </header>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    mainViewsSwitch: state.mainViewsSwitch,
    filmInfo: state.sameGenreFilms.filmInfo,
    filmsArray: state.loadedFilmsInfo.filmsArray,
    filmKey: state.loadedFilmsInfo.filmKey,
    isClickFromSameFilms: state.sameGenreFilms.isClickFromSameFilms,
    sameGenreFilmsArray: state.sameGenreFilms.sameGenreFilmsData
  }
}

export const Header = connect(mapStateToProps)(HeaderUnwrapped)
