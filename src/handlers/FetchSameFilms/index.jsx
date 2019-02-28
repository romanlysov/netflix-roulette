import { getFilms } from '../../services/getFilms/getFilms'
import { actionCreator } from '../../actions'

export const fetchSameFilms = async (dispatch, genre) => {
  const films = await getFilms({
    sortBy: 'release_date',
    value: genre,
    searchByFilter: 'genres'
  })
  dispatch(actionCreator.getSameGenreFilms(films))
}
