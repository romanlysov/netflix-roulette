import React from 'react'

import './style.scss'

export const SearchButton = ({classAttribute, value}) => {
    return <button className={classAttribute}>{value}</button>
}
