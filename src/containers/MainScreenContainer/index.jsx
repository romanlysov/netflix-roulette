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
    const array = filmsArray.toJS()
    FilmInfoHandler(dispatch)(array[dataKey])
    dispatch(actionCreator.setSkipRouting(true))
  }

  render() {
    const { filmsLoadingStatus, mainViewsSwitch, filmsArray, filmQuantity } = this.props
    if (filmQuantity > 0 &&
        mainViewsSwitch === SearchStatus.showRequested) {
      const array = filmsArray.toJS()
       return <MainScreen films={array} onclick={this.onClickHandle} />
    } else if (filmsLoadingStatus && filmQuantity === 0 ) {
      return <NoResults />
    } else {
      return <NoResults />
    }
  }
}
const mapStateToProps = state => {
  return {
    IsInitialized: state.get('IsInitialized'),
    mainViewsSwitch: state.get('ScreenType'),
    filmsLoadingStatus: state.get('FilmsInfo').AreLoaded,
    filmsArray: state.get('FilmsInfo').Array,
    filmInfoChosen: state.get('filmInfo'),
    filmKey: state.get('SameGenreFilms').filmKey,
    sortBy: state.get('SearchRequest').SortBy,
    film: state.get('ChosenFilm').Film,
    filmQuantity: state.get('FilmsInfo').Quantity
  }
}

export const MainScreenContainer = withRouter(
  connect(mapStateToProps)(MainScreenUnwrapped)
)
