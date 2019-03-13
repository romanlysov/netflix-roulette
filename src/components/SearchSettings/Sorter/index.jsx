import React from 'react'
import withStyles from 'react-jss'

import './style.scss'
import { SortByParam } from '../../../constants'

const styles = {
  chosen: {
    color: '#f00;'
  }
}

const SortButton = ({ active, caption, handler, classes }) => {
  return (
    <button
      onClick={handler}
      className={active ? classes.chosen : 'search-settings__sort-by'}
    >
      {caption}
    </button>
  )
}

const SorterUnwrapped = ({ sortActions, filter, classes }) => {
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

// export const Sorter = ({ sortActions, filter }) => {
//   return (
//     <>
//       <span className="search-settings__sort-by">Sort by</span>
//       {filter === 'release_date' ? (
//         <button
//           onClick={sortActions.sortByDate}
//           className="search-settings__release-button active"
//         >
//           release date
//         </button>
//       ) : (
//         <button
//           onClick={sortActions.sortByDate}
//           className="search-settings__release-button"
//         >
//           release date
//         </button>
//       )}
//       {filter === 'vote_average' ? (
//         <button
//           className="search-settings__rating-button active"
//           onClick={sortActions.sortByRating}
//         >
//           rating
//         </button>
//       ) : (
//         <button
//           className="search-settings__rating-button"
//           onClick={sortActions.sortByRating}
//         >
//           rating
//         </button>
//       )}
//     </>
//   )
// }

export const Sorter = withStyles(styles)(SorterUnwrapped)
