import React from 'react'

import { Input } from 'components/Header/Form/Input'
import { SearchBy } from 'components/Header/SearchBy'
import './style.scss'

export const SearchForm = ({className, onChange, onSubmit, value}) => {
    return (
        <form className={`${className} main-search`} onSubmit={onSubmit}>
            <h1 className={'main-search__h1'}>Find your movie</h1>
            <Input className = {'main-search__input'} placeholder={'Quentin Tarantino'} onChange={onChange} value = {value}/>
            <div className={'main-search__container'}>
            <SearchBy className={'search-by'}/>
            <input type="submit" className={'main-search__button'} />
            </div>
        </form>
    )
}
