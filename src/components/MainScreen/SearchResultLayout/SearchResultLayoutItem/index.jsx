import React from 'react'
import { Link } from 'react-router-dom'

export const SearchResultLayoutItem = ({ item, onclick, dataKey }) => {
  const clickHandler = () => onclick({ dataKey })
  return (
    <Link className='film-layout__link' to={`/films/${item.id}`}>
      <div className="film-layout__item" onClick={clickHandler} data-layout="results__item">
        <img className="film-layout__cover" src={item.poster_path} alt="" />
        <div className="film-layout__title-container">
          <div className="film-layout__title" data-title="results__title">{item.title}</div>
          <div className="film-layout__year">{item.release_date}</div>
        </div>
        <div className="film-layout__genre">{item.genres[0]}</div>
      </div>
    </Link>
  )
}
