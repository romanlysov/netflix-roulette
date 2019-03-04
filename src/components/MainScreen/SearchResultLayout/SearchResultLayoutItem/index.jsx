import React from 'react'
import { Link } from 'react-router-dom'

export const SearchResultLayoutItem = ({item, onclick, dataKey}) => {
    const clickHandler  = () => onclick({ dataKey })
    return (
        <Link to={`/${item.id}`}>
        <div className='film-layout__item' onClick={clickHandler}>
        <img className='film-layout__cover' src={item.poster_path} alt=''/>
        <div className='film-layout__title-container'>
            <span className='film-layout__title'>{item.title}</span>
            <span className='film-layout__year'>{item.release_date}</span>
        </div>
         <span className='film-layout__genre'>{item.genres[0]}</span>
    </div>
            </Link>)
}
