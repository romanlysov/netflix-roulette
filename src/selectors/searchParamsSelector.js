import { createSelector } from 'reselect'
import { mainSelector } from './simpleSelectors'

export const searchRequestSelector = createSelector(
  mainSelector,
  main => main.get('searchRequest')
)
export const searchParamsSelector = createSelector(
  searchRequestSelector,
  searchParams => ({
    sortBy: searchParams.get('sortBy'),
    searchBy: searchParams.get('searchBy')
  })
)
