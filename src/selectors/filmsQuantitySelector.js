import { createSelector } from 'reselect'
import { mainSelector } from './simpleSelectors'

export const filmsInfoSelector = createSelector(
  mainSelector,
  main => main.get('filmsInfo')
)
export const filmsQuantitySelector = createSelector(
  filmsInfoSelector,
  filmsInfo => ({
    filmsQuantity: filmsInfo.length
  })
)
