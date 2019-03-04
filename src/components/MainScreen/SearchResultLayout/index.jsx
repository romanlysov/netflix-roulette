import React from 'react'

import { SearchResultLayoutItem } from './SearchResultLayoutItem'

import './style.scss'

export const SearchResultLayout = ({ films, onclick }) => {
  const filmsList = films.map((film, index) => (
    <SearchResultLayoutItem
      item={film}
      key={film.id}
      onclick={onclick}
      dataKey={index}
    />
  ))
  return <ul className="film-layout">{filmsList}</ul>
}
