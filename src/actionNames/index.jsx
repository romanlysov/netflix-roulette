export const actions = {
  search: {
    BySwitchAction: 'searchBySwitchAction',
    DataAction: 'searchDataAction'
  },

  loadingStatusUpdate: 'loadingStatusUpdate',
  filmsDataAction: 'filmsDataAction',
  mainViewSwitchAction: 'mainViewSwitchAction',
  sortBySwitchAction: 'sortBySwitchAction',
  showFilmInfoAction: 'showFilmInfoAction',
  moviesFoundQuantityUpdate: 'moviesFoundQuantityUpdate',
  filmKeyAction: 'filmKeyAction',
  sameGenreFilmsAction: 'sameGenreFilmsAction',
  defineZoneClick: 'defineZoneClick',
  clickedFilm: 'clickedFilm',
  filmObject: 'filmObject',
  filmsDataAllInfo: 'filmsDataAllInfo',
  moreFilmsByIdAction: 'moreFilmsByIdAction',
  routing: 'routing',
  dataFromQueryUrlAction: 'dataFromQueryUrlAction',
  clearFilmInfoAction: 'clearFilmInfoAction'
}

export const sagaActions = {
  sagaSearch: {
    BySwitchAction: 'sagaSearchBySwitchAction',
    DataAction: 'sagaSearchDataAction'
  },
  sagaAppFilmAction: 'sagaAppFilmAction',
  sagaAppFilterAction: 'sagaAppFilterAction',
  sagaSortByAction: 'sagaSortByAction',
  sagaSortByDefaultAction: 'sagaSortByDefaultAction',
  sagaFormSubmitAction: 'sagaFormSubmitAction',
  sagaFetchAllFilmsAction: 'sagaFetchAllFilmsAction',
  sagaFilmObject: 'sagaFilmObject'
}
