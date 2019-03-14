import { createSelector } from 'reselect'
import { searchRequestSelector } from './searchParamsSelector'

export const fullRequestSelector = createSelector(
    searchRequestSelector,
    searchParams => ({
        sortBy: searchParams.get('SortBy'),
        searchBy: searchParams.get('SearchBy'),
        text: searchParams.get('Text')
    })
)