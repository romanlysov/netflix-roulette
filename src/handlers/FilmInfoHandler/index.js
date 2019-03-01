import { fetchSameFilms } from '../FetchSameFilms'
import { actionCreator } from '../../actions'

export const FilmInfoHandler = dispatch => async (film, flag) => {
  dispatch(actionCreator.setMainFilmInfo(film))
  dispatch(actionCreator.setClickFromZoneFlag(flag))
  await fetchSameFilms(dispatch, film.genres[0])
}
