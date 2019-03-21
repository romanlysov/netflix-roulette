import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { SearchStatus, SortByParam } from '../../constants'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'
import {
  fullRequestSelector,
  filmsQuantitySelector,
  screenSelector
} from '../../selectors'
import { actionCreator } from '../../actions'

export const BodyContainerUnwrapped = ({
  mainScreen,
  sortActions,
  defaultSortActions,
  filmsQuantity,
  sortBy,
  text
}) => {
  return mainScreen === SearchStatus.showMovieInfo ? (
    <MovieInfoScreenWrapper>
      <MoreMoviesByGenreContainer genre="" />
    </MovieInfoScreenWrapper>
  ) : filmsQuantity > 0 ? (
    <>
      <SearchSettings
        counter={filmsQuantity}
        sortActions={text === '' ? defaultSortActions : sortActions}
        filter={sortBy}
        request={text}
      />
      <MainScreenContainer />
    </>
  ) : (
    <MainScreenContainer />
  )
}

const mapStateToProps = createSelector(
  [filmsQuantitySelector, fullRequestSelector, screenSelector],
  (filmsInfo, searchParams, screen) => ({
    ...filmsInfo,
    ...searchParams,
    ...screen
  })
)

const mergeProps = (stateProps, dispatchProps) => {
  const { searchBy, text } = stateProps
  const { dispatch } = dispatchProps

  const handleSortByRatingClick = () => {
    dispatch(actionCreator.initiate.triggerSortBy(SortByParam.byRating, searchBy, text))
  }

  const handleSortByDateClick = () => {
    dispatch(actionCreator.initiate.triggerSortBy(SortByParam.byDate, searchBy, text))
  }

  const handleDefaultSortByRating = () => {
    dispatch(actionCreator.initiate.triggerSortByDefault(SortByParam.byRating))
  }

  const handleDefaultSortByDate = () => {
    dispatch(actionCreator.initiate.triggerSortByDefault(SortByParam.byDate, searchBy, text))
  }

  return {
    ...stateProps,
    sortActions: {
      sortByRating: () => {
        handleSortByRatingClick()
      },
      sortByDate: () => {
        handleSortByDateClick()
      }
    },
    defaultSortActions: {
      sortByRating: () => {
        handleDefaultSortByRating()
      },
      sortByDate: () => {
        handleDefaultSortByDate()
      }
    }
  }
}

export const BodyContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(BodyContainerUnwrapped)
