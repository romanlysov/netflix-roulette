import React from 'react'

import './style.scss'

export const SubHeader = ({genre}) => {
    return <div className='search-settings'><span className='search-settings__genre'>Films by {genre} genre</span></div>
}
