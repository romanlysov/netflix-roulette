import React from 'react'
import withStyles from 'react-jss'

import { SortByParam } from '../../../constants'
import './style.scss'


const styles = {
  chosen: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '1rem',
    lineHeight: '3.125rem',
    fontWeight: '500',
    backgroundColor: 'transparent',
    border: '0',
    color: props => (props.active ? '#f00' : '#000')
  }
}

const SortButtonUnwrapped = ({ caption, handler, classes }) => {
  return (
    <button
      onClick={handler}
      className={classes.chosen }
    >
      {caption}
    </button>
  )
}

export const Sorter = ({ sortActions, filter, classes }) => {
  return (
    <>
      <span className="search-settings__sort-by">Sort by</span>
      <SortButton
        active={filter === SortByParam.byDate}
        caption="rating"
        handler={sortActions.sortByDate}
        classes={classes}
      />
      <SortButton
        active={filter === SortByParam.byRating}
        caption="release date"
        handler={sortActions.sortByRating}
      />
    </>
  )
}

const SortButton = withStyles(styles)(SortButtonUnwrapped)


