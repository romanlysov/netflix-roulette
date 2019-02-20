import React from 'react'

import { StaticHeader } from 'components/Header/StaticHeader'
import { FormContainer } from '../../containers/FormContainer'
import { MovieCard } from 'components/MovieCard'
import { filmsArray } from '../../../assets/data'
import './style.scss'

const film = filmsArray[0]

export const Header = ({className}) => {
    return <header className = {`header ${className}`} >
        <StaticHeader className = {'navigation'}/>
        <MovieCard film={film}/>
          <FormContainer />
    </header>
}
