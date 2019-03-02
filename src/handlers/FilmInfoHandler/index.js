import { fetchSameFilms } from '../FetchSameFilms'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'

export const FilmInfoHandler = dispatch => async (film, flag) => {
  dispatch(actionCreator.setMainView(SearchStatus.showMovieInfo))
  dispatch(actionCreator.setMainFilmInfo(film))
  dispatch(actionCreator.setClickFromZoneFlag(flag))
  await fetchSameFilms(dispatch, film.genres[0])
}
