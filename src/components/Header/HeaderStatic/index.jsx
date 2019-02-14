import React from 'react'

import { MainLogo } from 'components/MainLogo'
import { SearchButton } from 'components/Header/HeaderStatic/SearchButton'
import './style.scss'

export const HeaderStatic = ({className}) => {
    return (
        <nav className= {`header__static ${className}`} >
            <MainLogo className={'navigation__logo'}/>
            <SearchButton classAttribute='navigation__search' value='search'/>
        </nav>
    )
}
