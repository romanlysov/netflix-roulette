import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { SearchStatus } from '../../constants'
import { MainBody } from '../../components/MainBody'
import {
  fullRequestSelector,
  filmsQuantitySelector,
  screenSelector
} from '../../selectors'
import { actionCreator } from '../../actions'
import { FilmBody } from '../../components/FilmBody'

const handleSortClick = dispatch => (searchBy, text) => sortBy => {
  const action =
    text === ''
      ? actionCreator.initiate.triggerSortByDefault(sortBy)
      : actionCreator.initiate.triggerSortBy(sortBy, searchBy, text)
  return () => dispatch(action)
}

export const BodyContainerUnwrapped = ({
  handleSortClick,
  filmsInfo,
  searchParams,
  mainScreen
}) => {
  const mainBody = (
    <MainBody
      filmsQuantity={filmsInfo.filmsQuantity}
      text={searchParams.text}
      handleSortClick={handleSortClick(
        searchParams.searchBy,
        searchParams.text
      )}
      filter={searchParams.sortBy}
    />
  )

  return mainScreen.mainScreen === SearchStatus.showMovieInfo ? (
    <FilmBody />
  ) : (
    mainBody
  )
}

const mapStateToProps = createSelector(
  [filmsQuantitySelector, fullRequestSelector, screenSelector],
  (filmsInfo, searchParams, mainScreen) => ({
    filmsInfo,
    searchParams,
    mainScreen
  })
)

const mapDispatchToProps = dispatch => ({
  handleSortClick: handleSortClick(dispatch)
})

export const BodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainerUnwrapped)
