import React from 'react'

import { HeaderStatic } from 'components/Header/HeaderStatic'
import { SearchForm } from 'components/Header/Form'
import { MovieCard } from 'components/MovieCard'
import { filmsArray } from '../../../assets/data'
import { WrappedSwitcher } from '../Switcher2'
import './style.scss'

const film = filmsArray[0]

const xhr = new window.XMLHttpRequest()
xhr.addEventListener('load', function () {
    console.log(JSON.parse(xhr.responseText))
})
xhr.open('GET', 'http://react-cdp-api.herokuapp.com/movies?search=pulp%20fiction&searchBy=title')
xhr.send()

export const Header = ({className}) => {
    return <header className = {`header ${className}`} >
        <HeaderStatic className = {'navigation'}/>
        <MovieCard film={film}/>
        <SearchForm className = "header__form"/>
        <WrappedSwitcher/>
    </header>
}
