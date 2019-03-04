import { actionCreator } from '../../actions'

export const fetchMoreFilmsById = async (dispatch, fetch) => {
    const films = await fetch()
    dispatch(actionCreator.setMoreFilmsByIdInfo(films))
}