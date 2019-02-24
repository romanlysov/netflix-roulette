import React from 'react'

import { MainLogo } from 'components/MainLogo'
import { SearchButton } from 'components/Header/StaticHeader/SearchButton'

import './style.scss'

export const StaticHeader = ({ className, onclick }) => {
  return (
    <nav className={`header__static ${className}`}>
      <MainLogo className="navigation__logo" />
      <SearchButton
        classAttribute="navigation__search"
        value="search"
        action={onclick}
      />
    </nav>
  )
}
