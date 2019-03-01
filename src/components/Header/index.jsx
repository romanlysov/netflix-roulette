import React from 'react'

import { StaticHeader } from './StaticHeader'
import { MovieCard } from '../MovieCard'
import { FormContainer } from '../../containers/FormContainer'

import './style.scss'

export const Header = ({film, className, onclick}) => {
    return (
        <header className={className}>
            <StaticHeader className="navigation" onclick={onclick} />
            {film && <MovieCard film={film} />}
            <FormContainer />
        </header>
    )
}