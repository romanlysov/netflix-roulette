import {actionCreator} from '../../actions'

export const fetchFilmById = async (dispatch, fetch) => {
    const film = await fetch()
    dispatch(actionCreator.setMainFilmInfo(film))

}