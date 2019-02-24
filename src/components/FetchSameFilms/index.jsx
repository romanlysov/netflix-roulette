import { getFilms } from 'components/AsyncApp'
import { actionCreator } from '../../actions'

export const fetchSameFilms = async (dispatch, genre) => {
  const films = await getFilms({
    sortBy: 'release_date',
    value: genre,
    searchByFilter: 'genres'
  })
  dispatch(actionCreator.getSameGenreFilms(films))
}
