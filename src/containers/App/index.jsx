import React from 'react'

import { connect } from 'react-redux'
import { Footer } from '../../components/Footer'
import { SubHeader } from '../../components/MovieInfoScreen/SearchBySameGenre/SubHeader'
import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { SearchStatus } from '../../constants'
// import { StaticHeader } from '../../components/Header/StaticHeader'
// import { MovieCard } from '../../components/MovieCard'
// import { FormContainer } from '../FormContainer'
import { actionCreator } from '../../actions'
import { sortByRatingClickHandler } from '../../handlers/SortByRatingClickHandler'
import { sortByDateClickHandler } from '../../handlers/SortByDateClickHandler'
import { HeaderContainer } from '../HeaderContainer'

import '../../components/Header/style.scss'

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
      sortBy,
      genre
    } = this.props

    if (
      mainViewsSwitch === SearchStatus.showMovieInfo &&
      !isClickFromSameFilms
    ) {
      return (
        <>
          {/*<header className="header movie-card">*/}
            {/*<StaticHeader className="navigation" onclick={this.handleClick} />*/}
            {/*<MovieCard film={film} />*/}
            {/*<FormContainer />*/}
          {/*</header>*/}
          <HeaderContainer/>
          <SubHeader genre={genre} />
          <div className="main-screen">
            <MoreMoviesByGenreContainer genre={genre} />
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
          {/*<header className="header movie-card">*/}
            {/*<StaticHeader className="navigation" onclick={this.handleClick} />*/}
            {/*<MovieCard film={film} />*/}
            {/*<FormContainer />*/}
          {/*</header>*/}
            <HeaderContainer/>
          <SubHeader genre={genre} />
          <div className="main-screen">
            <MoreMoviesByGenreContainer genre={genre} />
          </div>
          <Footer />
        </>
      )
    } else {
      return (
        <>
          {/*<header className="header search-result">*/}
            {/*<StaticHeader className="navigation" onclick={this.handleClick} />*/}
            {/*<FormContainer />*/}
          {/*</header>*/}
            <HeaderContainer/>
          <SearchSettings
            counter={filmsFoundQuantity}
            sortByRatingHandler={this.handleSortByRatingClick}
            sortByDateHandler={this.handleSortByDateClick}
            filter={sortBy === 'release_date'}
          />
          <MainScreenContainer />
          <Footer />
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    filmsFoundQuantity: state.FilmsInfo.Quantity,
    mainViewsSwitch: state.ScreenType,
    filmsArray: state.FilmsInfo.Array,
    filmKey: state.FilmsInfo.filmKey,
    isClickFromSameFilms: state.SameGenreFilms.IsTrigger,
    sameGenreFilmsArray: state.SameGenreFilms.Array,
    film: state.ChosenFilm.Film,
    sortBy: state.SearchRequest.SortBy,
    searchByFilter: state.SearchRequest.SearchBy,
    value: state.SearchRequest.Text,
    genre: state.ChosenFilm.Genre
  }
}

export const App = connect(mapStateToProps)(AppUnwrapped)
