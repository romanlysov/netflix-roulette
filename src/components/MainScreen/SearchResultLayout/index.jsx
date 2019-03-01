import React from 'react'
// import PropTypes from 'prop-types'

import { SearchResultLayoutItem } from 'components/MainScreen/SearchResultLayout/SearchResultLayoutItem'

import './style.scss'

export const SearchResultLayout = ({films, onclick}) => {
    const filmsList = films.map((film, index) =>
        <SearchResultLayoutItem item={film} key={film.id} onclick={onclick} dataKey={index}/>
    )
    return (<ul className='film-layout'>{filmsList}</ul>)
}

