import React from 'react'

import { Input } from './Input/index'
import {SearchBy} from '../SearchBy/index'
import './style.scss'

export const SearchForm = ({className}) => {
    return (
        <form className={`${className} main-search`}>
            <h1 className={'main-search__h1'}>Find your movie</h1>
            <Input className = {'main-search__input'} placeholder={'Quentin Tarantino'}/>
            <div className={'main-search__container'}>
            <SearchBy className={'search-by'}/>
            <input type="submit" className={'main-search__button'} value={'search'}/>
            </div>
        </form>
    )
}
