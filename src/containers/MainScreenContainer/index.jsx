import React from 'react'
import { connect } from 'react-redux'

import { NoResults } from 'components/MainScreen/NoResults'
import { MainScreen } from 'components/MainScreen'
import { fetchFilms } from '../../handlers/FetchFilms'
import { getAllFilms } from '../../services/getFilms/getAllFilms'
import { FilmInfoHandler } from '../../handlers/FilmInfoHandler'

import '../../components/MainScreen/style.scss'

class MainScreenUnwrapped extends React.Component {

  async componentDidMount() {
    const { sortBy, dispatch } = this.props
    await fetchFilms(dispatch, async () => await getAllFilms(sortBy))
  }

  onClickHandle = ({dataKey}) => {
    const { dispatch, filmsArray } = this.props
    FilmInfoHandler(dispatch)(filmsArray[dataKey], false)
  }

  render() {
    const { filmsLoadingStatus, mainViewsSwitch, filmsArray } = this.props
    return (
    filmsLoadingStatus && mainViewsSwitch === 'showRequested'
        ?  <MainScreen films={filmsArray} onclick={this.onClickHandle}/>
        :  <NoResults />
    )
  }
}
const mapStateToProps = state => {
  return {
    mainViewsSwitch: state.mainViewsSwitch,
    filmsLoadingStatus: state.loadedFilmsInfo.filmsAreLoaded,
    filmsArray: state.loadedFilmsInfo.filmsArray,
    filmInfoChosen: state.filmInfo,
    filmKey: state.sameGenreFilms.filmKey,
    isClickFromSameFilms: state.sameGenreFilms.isClickFromSameFilms,
    sortBy: state.searchRequest.sortByFilter,
    film: state.chosenFilm.film
  }
}

export const MainScreenContainer = connect(mapStateToProps)(MainScreenUnwrapped)
