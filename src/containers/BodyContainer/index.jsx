import React from 'react'
import { connect } from 'react-redux'

import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { SearchStatus } from '../../constants'
import { sortByRatingClickHandler } from '../../handlers/SortByRatingClickHandler'
import { sortByDateClickHandler } from '../../handlers/SortByDateClickHandler'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'

class BodyContainerUnwrapped extends React.PureComponent {
  render() {
    const {
      mainScreen,
      sortByRating,
      sortByDate,
      filmsQuantity,
      sortBy
    } = this.props
    return mainScreen === SearchStatus.showMovieInfo ? (
      <MovieInfoScreenWrapper>
        <MoreMoviesByGenreContainer genre="" />
      </MovieInfoScreenWrapper>

    ) : (
      <>
        <SearchSettings
          counter={filmsQuantity}
          sortByRatingHandler={sortByRating}
          sortByDateHandler={sortByDate}
          filter={sortBy === 'release_date'}
        />
        <MainScreenContainer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    mainScreen: state.ScreenType,
    filmsQuantity: state.FilmsInfo.Quantity,
    searchByFilter: state.SearchRequest.SearchBy,
    value: state.SearchRequest.Text,
    sortBy: state.SearchRequest.SortBy
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  const { searchByFilter, value } = stateProps
  const { dispatch } = dispatchProps

  const handleSortByRatingClick = () => {
    sortByRatingClickHandler(dispatch)(searchByFilter, value)
  }

  const handleSortByDateClick = () => {
    sortByDateClickHandler(dispatch)(searchByFilter, value)
  }

  return {
    ...stateProps,
    sortByRating: () => {
      handleSortByRatingClick()
    },
    sortByDate: () => {
      handleSortByDateClick()
    }
  }
}

export const BodyContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(BodyContainerUnwrapped)
