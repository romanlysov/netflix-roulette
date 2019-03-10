import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { NoResults } from '../../components/MainScreen/NoResults'
import { MainScreen } from '../../components/MainScreen'
import { FilmInfoHandler } from '../../handlers/FilmInfoHandler'
import { SearchStatus } from '../../constants'
import { actionCreator } from '../../actions'

import '../../components/MainScreen/style.scss'

export class MainScreenUnwrapped extends React.Component {
  onClickHandle = ({ dataKey }) => {
    const { dispatch, filmsArray } = this.props
    FilmInfoHandler(dispatch)(filmsArray[dataKey])
    dispatch(actionCreator.setSkipRouting(true))
  }

  render() {
    const { filmsLoadingStatus, mainViewsSwitch, filmsArray, filmQuantity } = this.props

    if (filmQuantity > 0 &&
        mainViewsSwitch === SearchStatus.showRequested) {
       return <MainScreen films={filmsArray} onclick={this.onClickHandle} />
    } else if (filmsLoadingStatus && filmQuantity === 0 ) {
      return <NoResults />
    } else {
      return <NoResults />
    }
  }
}
const mapStateToProps = state => {
  return {
    IsInitialized: state.IsInitialized,
    mainViewsSwitch: state.ScreenType,
    filmsLoadingStatus: state.FilmsInfo.AreLoaded,
    filmsArray: state.FilmsInfo.Array,
    filmInfoChosen: state.filmInfo,
    filmKey: state.SameGenreFilms.filmKey,
    sortBy: state.SearchRequest.SortBy,
    film: state.ChosenFilm.Film,
    filmQuantity: state.FilmsInfo.Quantity
  }
}

export const MainScreenContainer = withRouter(
  connect(mapStateToProps)(MainScreenUnwrapped)
)
