import React from 'react'
import { SearchSettings } from '../SearchSettings'
import { MainScreenContainer } from '../../containers/MainScreenContainer'

export const MainBody = ({
  filmsQuantity,
  text,
  handleSortClick,
    filter
}) => {
  return (
    <>
      {filmsQuantity > 0 && (
        <SearchSettings
          counter={filmsQuantity}
          handleSortClick={handleSortClick}
          filter={filter}
          request={text}
        />
      )}
      <MainScreenContainer />
    </>
  )
}
