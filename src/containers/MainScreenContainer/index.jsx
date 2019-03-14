import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { NoResults } from '../../components/MainScreen/NoResults'
import { MainScreen } from '../../components/MainScreen'
import { FilmInfoHandler } from '../../handlers/FilmInfoHandler'
import { SearchStatus } from '../../constants'
import { actionCreator } from '../../actions'
import {
  chosenFilmInfoSelector,
  filmsQuantityFullSelector,
  screenSelector,
  sortBySelector
} from '../../selectors'

import '../../components/MainScreen/style.scss'

export class MainScreenUnwrapped extends React.Component {
  onClickHandle = ({ dataKey }) => {
    const { dispatch, filmsArray } = this.props
    const array = filmsArray
    FilmInfoHandler(dispatch)(array[dataKey])
    dispatch(actionCreator.setSkipRouting(true))
  }

  render() {
    const {
      filmsLoadingStatus,
      mainScreen,
      filmsArray,
      filmsQuantity
    } = this.props
    if (filmsQuantity > 0 && mainScreen === SearchStatus.showRequested) {
      const array = filmsArray
      return <MainScreen films={array} onclick={this.onClickHandle} />
    } else if (filmsLoadingStatus && filmsQuantity === 0) {
      return <NoResults />
    } else {
      return <NoResults />
    }
  }
}

export const mapStateToProps = createSelector(
  [
    screenSelector,
    filmsQuantityFullSelector,
    chosenFilmInfoSelector,
    sortBySelector
  ],
  (screenType, filmsInfo, film, sortBy) => ({
    ...screenType,
    ...filmsInfo,
    ...film,
    ...sortBy
  })
)

export const MainScreenContainer = withRouter(
  connect(mapStateToProps)(MainScreenUnwrapped)
)
