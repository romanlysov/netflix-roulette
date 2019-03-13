import React from 'react'
import { connect } from 'react-redux'

import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { SearchStatus } from '../../constants'
import { sortByRatingClickHandler } from '../../handlers/SortByRatingClickHandler'
import { sortByDateClickHandler } from '../../handlers/SortByDateClickHandler'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'

export const BodyContainerUnwrapped = ({
  mainScreen,
  sortByRating,
  sortByDate,
  filmsQuantity,
  sortBy,
  quantity
}) => {
  return mainScreen === SearchStatus.showMovieInfo ? (
    <MovieInfoScreenWrapper>
      <MoreMoviesByGenreContainer genre="" />
    </MovieInfoScreenWrapper>
  ) : quantity > 0 ? (
    <>
      <SearchSettings
        counter={filmsQuantity}
        sortByRatingHandler={sortByRating}
        sortByDateHandler={sortByDate}
        filter={sortBy === 'release_date'}
      />
      <MainScreenContainer />
    </>
  ) : (
    <MainScreenContainer />
  )
}

const mapStateToProps = state => {
  return {
    mainScreen: state.get('ScreenType'),
    filmsQuantity: state.get('FilmsInfo').Quantity,
    searchByFilter: state.get('SearchRequest').SearchBy,
    value: state.get('SearchRequest').Text,
    sortBy: state.get('SearchRequest').SortBy,
    quantity: state.get('FilmsInfo').Quantity
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
