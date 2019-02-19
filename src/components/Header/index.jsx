import React from 'react'

import { HeaderStatic } from 'components/Header/HeaderStatic'
import { FormContainerWrapped } from '../../containers/FormContainer'
import { MovieCard } from 'components/MovieCard'
import { filmsArray } from '../../../assets/data'
import './style.scss'

const film = filmsArray[0]

export const Header = ({className}) => {
    return <header className = {`header ${className}`} >
        <HeaderStatic className = {'navigation'}/>
        <MovieCard film={film}/>
          <FormContainerWrapped />
    </header>
}
