import React from 'react'

import { MainLogo } from '../../MainLogo'
import { SearchButton } from './SearchButton/index'
import './style.scss'

export const HeaderStatic = ({className}) => {
    return (
        <nav className= {`header__static ${className}`} >
            <MainLogo className={'navigation__logo'}/>
            <SearchButton className="navigation__search" value="search"/>
        </nav>
    )
}
