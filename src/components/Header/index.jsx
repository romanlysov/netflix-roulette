import React from 'react'

import { StaticHeader } from './StaticHeader'
import { MovieCard } from '../MovieCard'
import { FormContainer } from '../../containers/FormContainer'

import './style.scss'

export const Header = ({film, className, onclick, searchButtonClass, isMovieInfo}) => {
    return (
        <header className={className}>
            <StaticHeader className="navigation" onclick={onclick} searchButtonClass = {searchButtonClass} />
            {isMovieInfo && <MovieCard film={film} />}
            <FormContainer />
        </header>
    )
}
