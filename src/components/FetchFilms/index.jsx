import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'

export const fetchFilms = async (dispatch, fetch) => {
  const films = await fetch()
  dispatch(actionCreator.setFilmsLoadingStatus(true))
  dispatch(actionCreator.getFilmsData(films))
  dispatch(actionCreator.setMainView(SearchStatus.showRequested))
  dispatch(actionCreator.updateMoviesFoundQuantity(films.length))
}
