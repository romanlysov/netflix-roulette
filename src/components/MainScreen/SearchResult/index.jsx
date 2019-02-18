import React from 'react'
import PropTypes from 'prop-types'

import { SearchResultLayoutItem } from 'components/MainScreen/SearchResult/FilmItem'
import './style.scss'
import {NoResults} from '../NoResults'

export const SearchResultLayout = ({films, status}) => {
    if (status) {
    const filmsList = films.map((film, id) =>
        <SearchResultLayoutItem item={film} key={id}/>
    )
    return (<ul className={'film-layout'}>{filmsList}</ul>)
} return <NoResults/>
}
SearchResultLayout.propTypes = {
    films: PropTypes.array
}

