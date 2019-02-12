import React from 'react';

import { Input } from './Input';
import {SearchBy} from "../SearchBy";
import './style.scss';

export const SearchForm = (className) => {
    return (
        <form className={`${className} main-search`}>
            <h1 className={"main-search__h1"}>Find your movie</h1>
            <Input className = {"main-search__input"} placeholder={"Quentin Tarantino"}/>
            <div className={"main-search__container"}>
            <SearchBy className={"main-search__search-by"}/>
            <input type="submit" className={"main-search__button"} value={"search"}/>
            </div>
        </form>
    )
};