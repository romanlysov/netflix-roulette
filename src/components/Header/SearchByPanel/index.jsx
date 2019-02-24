import React from 'react'

import './style.scss'

export const SearchByPanel = ({
  className,
  searchBy,
  titleChecked,
  genreChecked,
  titleLabelClass,
  genreLabelClass
}) => {
  return (
    <div className={className} onClick={searchBy}>
      <span className={`${className}__header`}>Search by</span>
      <input
        className={`${className}__title-input`}
        type="radio"
        name="search-by"
        value="title"
        id="title"
        defaultChecked={titleChecked}
      />
      <label
        className={`${className}__title-label ${titleLabelClass}`}
        htmlFor="title"
      >
        Title
      </label>
      <input
        className={`${className}__genre-input`}
        type="radio"
        name="search-by"
        value="genre"
        id="genre"
        defaultChecked={genreChecked}
      />
      <label
        className={`${className}__genre-label ${genreLabelClass}`}
        htmlFor="genre"
      >
        Genre
      </label>
    </div>
  )
}
