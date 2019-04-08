import { createSelector } from 'reselect'

export const searchRequestSelector = state => state.main.get('SearchRequest')
export const searchParamsSelector = createSelector(
    searchRequestSelector,
    searchParams => ({
        sortBy: searchParams.get('SortBy'),
        searchBy: searchParams.get('SearchBy')
    })
)

