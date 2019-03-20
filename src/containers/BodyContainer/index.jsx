import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { SearchSettings } from '../../components/SearchSettings'
import { MainScreenContainer } from '../MainScreenContainer'
import { SearchStatus } from '../../constants'
import {
  sortByRatingClickHandler,
  sortByRatingDefaultHandler
} from '../../handlers/SortByRatingClickHandler'
import {
  sortByDateClickHandler,
  sortByDateDefaultHandler
} from '../../handlers/SortByDateClickHandler'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'
import {
  fullRequestSelector,
  filmsQuantitySelector,
  screenSelector
} from '../../selectors'

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
    sortByRatingClickHandler(dispatch)(searchBy, text)
  }

  const handleSortByDateClick = () => {
    sortByDateClickHandler(dispatch)(searchBy, text)
  }

  const handleDefaultSortByRating = () => {
    sortByRatingDefaultHandler(dispatch)
  }

  const handleDefaultSortByDate = () => {
    sortByDateDefaultHandler(dispatch)
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
