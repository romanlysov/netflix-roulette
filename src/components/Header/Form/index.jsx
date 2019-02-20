import React from 'react'

import { Input } from 'components/Header/Form/Input'
import { SearchByPanel } from 'components/Header/SearchByPanel'
import './style.scss'

export const SearchForm = ({className, onChange, onSubmit, value, searchBy}) => {
    return (
        <form className={`${className} main-search`} onSubmit={onSubmit}>
            <h1 className={'main-search__h1'}>Find your movie</h1>
            <Input className = {'main-search__input'} placeholder={'Quentin Tarantino'} onChange={onChange} value = {value}/>
            <div className={'main-search__container'}>
            <SearchByPanel className={'search-by'} searchBy={searchBy}/>
            <input type="submit" className={'main-search__button'} />
            </div>
        </form>
    )
}
