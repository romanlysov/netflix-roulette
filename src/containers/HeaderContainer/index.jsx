import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'
import { SubHeader } from '../../components/MovieInfoScreen/SearchBySameGenre/SubHeader'

class HeaderUnwrapped extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props
    dispatch(actionCreator.setMainView(SearchStatus.showRequested))
  }
  render() {
    const { className, film, mainViewsSwitch, genre } = this.props
    return (
      (mainViewsSwitch === SearchStatus.showMovieInfo) ?
      <>
        <Header film={film} className={className} onclick={this.handleClick} />
        <SubHeader genre={genre}/>
      </>
        :
        <Header film={film} className={className} onclick={this.handleClick} />
    )
  }
}

const mapStateToProps = state => {
  // const isClickFromSameFilms = state.SameGenreFilms.IsTrigger
  // const filmsArray = state.FilmsInfo.Array
  // const sameGenreFilmsArray = state.SameGenreFilms.Array
  // const filmKey = state.FilmsInfo.filmKey

  return {
    mainViewsSwitch: state.ScreenType,
    filmInfo: state.SameGenreFilms.filmInfo,
    film: state.ChosenFilm.Film,
    genre: state.ChosenFilm.Genre,
    // film2: state.ScreenType === SearchStatus.showRequested ? filmsArray[filmKey] : sameGenreFilmsArray[filmKey],
    // film1:
    //   state.ScreenType !== SearchStatus.showMovieInfo
    //     ? undefined
    //     : isClickFromSameFilms
    //     ? sameGenreFilmsArray[filmKey]
    //     : filmsArray[filmKey],
    className: state.ScreenType === SearchStatus.showMovieInfo ?
        'header movie-card':
        'header search-result',
  }
  }


export const HeaderContainer = connect(mapStateToProps)(HeaderUnwrapped)
