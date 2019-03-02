import React from 'react'

import './style.scss'

export const Sorter = ({ sortByRatingHandler, sortByDateHandler, filter }) => {
  return (
    <>
      <span className="search-settings__sort-by">Sort by</span>
      {filter ? (
        <button
          onClick={sortByDateHandler}
          className="search-settings__release-button active"
        >
          release date
        </button>
      ) : (
        <button
          onClick={sortByDateHandler}
          className="search-settings__release-button"
        >
          {' '}
          release date
        </button>
      )}
      {filter ? (
        <button
          className="search-settings__rating-button"
          onClick={sortByRatingHandler}
        >
          rating
        </button>
      ) : (
        <button
          className="search-settings__rating-button active"
          onClick={sortByRatingHandler}
        >
          rating
        </button>
      )}
    </>
  )
}
