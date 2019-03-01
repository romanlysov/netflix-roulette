import { fetchSameFilms } from '../FetchSameFilms'
import { actionCreator } from '../../actions'
import { MovieInfoHandler } from '../MovieInfoHandler'

export const FilmInfoHandler = dispatch => async (film, flag) => {
  MovieInfoHandler(dispatch)(film)
  dispatch(actionCreator.setClickFromZoneFlag(flag))
  await fetchSameFilms(dispatch, film.genres[0])
}
