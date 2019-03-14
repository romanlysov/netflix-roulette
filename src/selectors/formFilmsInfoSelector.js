import { createSelector } from 'reselect'
import { filmsInfoSelector } from './filmsQuantitySelector'

export const formFilmsInfoSelector = createSelector(
    filmsInfoSelector,
    filmsInfo => ({
        filmsArray: filmsInfo,
        filmsLoadingStatus: filmsInfo.length > 0
    })
)