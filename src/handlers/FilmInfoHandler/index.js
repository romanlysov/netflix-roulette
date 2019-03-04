import { fetchSameFilms } from '../FetchSameFilms'
import { actionCreator } from '../../actions'

export const FilmInfoHandler = dispatch => async (film) => {
  dispatch(actionCreator.setMainFilmInfo(film))
  await fetchSameFilms(dispatch, film.genres[0])
}
