import React from 'react';

import './style.scss';
import { Input } from "./Input";

export const SearchForm = (props) => {
    return (
        <form className={`${props.className} main-search`}>
            <h1 className={"main-search__h1"}>Find your movie</h1>
            <Input className = {"main-search__input"} placeholder={"Quentin Tarantino"}/>
            <input type="submit" className={"main-search__button"}/>
        </form>
    )
};