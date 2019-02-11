import React from 'react';
import './style.scss';
import { MainLogo } from '../../MainLogo/index';
import { SearchButton } from "../SearchButton";

export const Nav = ({className}) => {
    return (
        <nav className= {`header__static ${className}`} >
            <MainLogo className={"navigation__logo"}/>
            <SearchButton className="navigation__search" value="search"/>
        </nav>
    )
};

