import React from 'react';
import './style.scss';
import { Nav } from './Nav-static/index';
import { SearchForm } from "./Form";

export const Header = () => {
    return <header className = 'header' >
        <Nav className = {'navigation'}/>
        <SearchForm className = "header__form"/>

    </header>
};