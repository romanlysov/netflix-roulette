import { createSelector } from 'reselect'
import { filmsInfoSelector } from './filmsQuantitySelector'

export const filmsQuantityFullSelector = createSelector(
    filmsInfoSelector,
    filmsInfo => ({
        filmsArray: filmsInfo,
        filmsQuantity: filmsInfo.length,
        filmsLoadingStatus: filmsInfo.length > 0
    })
)