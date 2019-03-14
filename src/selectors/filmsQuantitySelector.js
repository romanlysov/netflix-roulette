import { createSelector } from 'reselect'

export const filmsInfoSelector = state => state.get('FilmsInfo')
export const filmsQuantitySelector = createSelector(
    filmsInfoSelector,
    filmsInfo => ({
        filmsQuantity: filmsInfo.length
    })
)