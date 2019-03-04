import React from 'react'

import './style.scss'

export const SearchButton = ({classAttribute, value, action}) => {
    return <button className={classAttribute} onClick={action}>{value}</button>
}
