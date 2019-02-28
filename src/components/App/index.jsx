import React from 'react'

import { connect } from 'react-redux'
import { SearchSettings } from 'components/SearchSettings'
import { Footer } from 'components/Footer'
import { MainScreen } from '../MainScreen'
import { SearchStatus } from '../../constants'
import { StaticHeader } from '../Header/StaticHeader'
import { MovieCard } from '../MovieCard'
import { FormContainer } from '../../containers/FormContainer'
import { actionCreator } from '../../actions'
import '../Header/style.scss'
import { SubHeader } from '../MovieInfoScreen/SearchBySameGenre/SubHeader'
import { MoreMoviesByGenre } from '../MovieInfoScreen/SearchBySameGenre/MoreMoviesByGenre'
import { sortByRatingClickHandler } from '../../handlers/SortByRatingClickHandler'
import { sortByDateClickHandler } from '../../handlers/SortByDateClickHandler'

class AppUnwrapped extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props
    dispatch(actionCreator.setMainView(SearchStatus.showRequested))
  }

  handleSortByRatingClick = () => {
    const { dispatch, searchByFilter, value } = this.props
    sortByRatingClickHandler(dispatch)(searchByFilter, value)
  }

  handleSortByDateClick = async () => {
    const { dispatch, searchByFilter, value } = this.props
    sortByDateClickHandler(dispatch)(searchByFilter, value)
  }

  render() {
    const {
      mainViewsSwitch,
      isClickFromSameFilms,
      filmsFoundQuantity,
      film,
      sortBy,
      genre
    } = this.props

    if (
      mainViewsSwitch === SearchStatus.showMovieInfo &&
      !isClickFromSameFilms
    ) {
      return (
        <>
          <header className="header movie-card">
            <StaticHeader className="navigation" onclick={this.handleClick} />
            <MovieCard film={film} />
            <FormContainer />
          </header>
          <SubHeader genre={genre} />
          <div className="main-screen">
            <MoreMoviesByGenre genre={genre} />
          </div>
          <Footer />
        </>
      )
    } else if (
      mainViewsSwitch === SearchStatus.showMovieInfo &&
      isClickFromSameFilms
    ) {
      return (
        <>
          <header className="header movie-card">
            <StaticHeader className="navigation" onclick={this.handleClick} />
            <MovieCard film={film} />
            <FormContainer />
          </header>
          <SubHeader genre={genre} />
          <div className="main-screen">
            <MoreMoviesByGenre genre={genre} />
          </div>
          <Footer />
        </>
      )
    } else {
      return (
        <>
          <header className="header search-result">
            <StaticHeader className="navigation" onclick={this.handleClick} />
            <FormContainer />
          </header>
          <SearchSettings
            counter={filmsFoundQuantity}
            sortByRatingHandler={this.handleSortByRatingClick}
            sortByDateHandler={this.handleSortByDateClick}
            filter={sortBy === 'release_date'}
          />
          <MainScreen />
          <Footer />
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    filmsFoundQuantity: state.loadedFilmsInfo.filmsFoundQuantity,
    mainViewsSwitch: state.mainViewsSwitch,
    filmsArray: state.loadedFilmsInfo.filmsArray,
    filmKey: state.loadedFilmsInfo.filmKey,
    isClickFromSameFilms: state.sameGenreFilms.isClickFromSameFilms,
    sameGenreFilmsArray: state.sameGenreFilms.sameGenreFilmsData,
    film: state.chosenFilm.film,
    sortBy: state.searchRequest.sortByFilter,
    searchByFilter: state.searchRequest.searchByFilter,
    value: state.searchRequest.getSearchRequest,
    genre: state.chosenFilm.genre
  }
}

export const App = connect(mapStateToProps)(AppUnwrapped)
