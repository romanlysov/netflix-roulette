import { createSelector } from 'reselect'

export const filmsInfoSelector = state => state.main.get('FilmsInfo')
export const filmsQuantitySelector = createSelector(
    filmsInfoSelector,
    filmsInfo => ({
        filmsQuantity: filmsInfo.length
    })
)
