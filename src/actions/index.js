import {
  getData,
  searchFilter,
  sortFilter
} from './searchForm'
import {
  getInfoFromUrl,
  setChosenFilm,
  setInfoFromRouting, triggerFetchAllFilms, triggerFormSubmit,
  triggerSortBy, triggerSortByDefault

} from './initiate'
import { getFilms, getFilmsById } from './sameGenre'
import { clearInfo, setInfo } from './chosenFilm'
import { setFilmsInfo } from './mainFilms'
import { getDataFromUrl, setSkipRouting } from './routingData'

export const actionCreator = {
  initiate: {
    setChosenFilm,
    setInfoFromRouting,
    getInfoFromUrl,
    triggerSortBy,
    triggerSortByDefault,
    triggerFormSubmit,
    triggerFetchAllFilms
  },
  chosenFilm: {
    setInfo,
    clearInfo
  },
  sameGenre: {
    getFilms,
    getFilmsById
  },

  routing: {
    getDataFromUrl,
    setSkipRouting
  },
  mainFilms: {
    setFilmsInfo
  },

  search: {
    getData,
    searchFilter,
    sortFilter

  }
}
