import { actions } from '../actionNames'
import { SearchStatus } from '../constants'

export const setFilmsInfo = films => {
    return {
        type: actions.filmsDataAllInfo,
        films: films,
        mainScreen: SearchStatus.showRequested,
        quantity: films.length
    }
}