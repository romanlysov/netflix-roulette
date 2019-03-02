import React from 'react'

import './style.scss'

export const SearchByPanel = ({
  className,
  sortByTitle,
  sortByGenre,
  filter
}) => {
  return (
    <div className={className}>
      <span className={`${className}__header`}>Search by</span>
      <input
        className={`${className}__title-input`}
        type="radio"
        name="search-by"
        value="title"
        id="title"
        defaultChecked={filter==='title'}
      />
      <label
        className={(filter==='title') ? `${className}__title-label label-chosen` : `${className}__title-label`}
        htmlFor="title"
        onClick={sortByTitle}
      >
        Title
      </label>
      <input
        className={`${className}__genre-input`}
        type="radio"
        name="search-by"
        value="genre"
        id="genre"
        defaultChecked={filter==='genres'}
      />
      <label
        className={(filter==='genres') ? `${className}__title-label label-chosen` : `${className}__title-label`}
        htmlFor="genre"
        onClick={sortByGenre}
      >
        Genre
      </label>
    </div>
  )
}
