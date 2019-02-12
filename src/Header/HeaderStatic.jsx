import React from 'react';

import { MainLogo } from '../MainLogo/index';
import { SearchButton } from "./Form/SearchButton";

export const HeaderStatic = ({className}) => {
    return (
        <nav className= {`header__static ${className}`} >
            <MainLogo className={"navigation__logo"}/>
            <SearchButton className="navigation__search" value="search"/>
        </nav>
    )
};

