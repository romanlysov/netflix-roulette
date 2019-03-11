import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import './style.scss'

const styles = {
  navigation__search: {
    display: 'block',
    height: '1.5625rem',
    width: '6.25rem',
    margin: 'auto 0',
    'background-color': '#fff',
    border: '0',
    'border-radius': '.125rem',
    'text-decoration': 'none',
    'text-transform': 'uppercase',
    'text-align': 'center',
    color: '#f00',
    'font-family': 'Arial, sans-serif',
    'line-height': '1.5625rem',
    'font-weight': '700'
  }
}

const SearchButtonUnwrapped = ({ classAttribute, value, action }) => {
  return (
    <Link to="/" className={classAttribute} onClick={action}>
      {value}
    </Link>
  )
}

export const SearchButton = injectSheet(styles)(SearchButtonUnwrapped)
