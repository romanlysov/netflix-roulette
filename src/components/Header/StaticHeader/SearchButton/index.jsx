import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

import './style.scss'

const styles = {
navigation__search: {
    display: 'block',
    height: '1.5625rem',
    width: '6.25rem',
    margin: 'auto 0',
    backgroundColor: '#fff',
    border: '0',
    borderRadius: '.125rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#f00',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5625rem',
    fontWeight: '700'
}
}

const SearchButtonUnwrapped = ({ classes, value, action }) => {
  return (
    <Link to="/" className={classes.navigation__search} onClick={action}>
      {value}
    </Link>
  )
}

export const SearchButton = withStyles(styles)(SearchButtonUnwrapped)
