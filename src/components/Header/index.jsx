import React from 'react'

import { StaticHeader } from 'components/Header/StaticHeader'
import { MovieCard } from 'components/MovieCard'
import { FormContainer } from '../../containers/FormContainer'

import './style.scss'

export const Header = (film, className, onclick) => {
    return (
        <header className={`header ${className}`}>
            <StaticHeader className="navigation" onclick={onclick} />
            film && <MovieCard film={film} />
            <FormContainer />
        </header>
    )
}