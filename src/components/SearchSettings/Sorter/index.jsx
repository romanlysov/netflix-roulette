import React from 'react'
import withStyles from 'react-jss'

import './style.scss'
import { SortByParam } from '../../../constants'

const styles = {
  chosen: {
    color: '#f00;'
  }
}

const SortButtonUnwrapped = ({ active, caption, handler, classes }) => {
  return (
    <button
      onClick={handler}
      className={active ? classes.chosen : 'search-settings__sort-by'}
    >
      {caption}
    </button>
  )
}

export const Sorter = ({ sortActions, filter, classes }) => {
  return (
    <>
      <span className="search-settings__sort-by">Sort by</span>
      (
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

export const SortButton = withStyles(styles)(SortButtonUnwrapped)
