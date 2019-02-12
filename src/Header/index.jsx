import React from 'react';

import { HeaderStatic } from './HeaderStatic';
import { SearchForm } from "./Form";
import './style.scss';

export const Header = () => {
    return <header className = 'header' >
        <HeaderStatic className = {'navigation'}/>
        <SearchForm className = "header__form"/>

    </header>
};