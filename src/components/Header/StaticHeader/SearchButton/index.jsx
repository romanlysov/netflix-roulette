import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export const SearchButton = ({classAttribute, value, action}) => {
    return <Link to='/'><button className={classAttribute} onClick={action}>{value}</button></Link>
}
