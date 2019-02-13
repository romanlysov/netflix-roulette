import React from 'react'
import PropTypes from 'prop-types'

import { SearchResultLayoutItem } from './FilmItem'
import './style.scss'

export const SearchResultLayout = ({films}) => {
    const filmsList = films.map((film, index) =>
        <SearchResultLayoutItem item={film} key={index}/>
    )
    return (<ul className={'film-layout'}>{filmsList}</ul>)
}
SearchResultLayout.propTypes = {
    films: PropTypes.array
}

