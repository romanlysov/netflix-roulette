import React from 'react';

import { HeaderStatic } from './HeaderStatic';
import { SearchForm } from "./Form";
import './style.scss';
import {MovieCard} from "../MovieCard";
import {filmsArray} from "../MainScreen/data";

const film = filmsArray[0];

export const Header = ({className}) => {
    return <header className = {`header ${className}`} >
        <HeaderStatic className = {'navigation'}/>
        <MovieCard film={film}/>
        <SearchForm className = "header__form"/>

    </header>
};