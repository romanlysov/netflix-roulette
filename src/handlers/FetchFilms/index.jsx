import { actionCreator } from '../../actions'

export const fetchFilms = async (dispatch, fetch) => {
  const films = await fetch()
  dispatch(actionCreator.setAllFilmsInfo(films))
}
