import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'

export const MovieInfoHandler = (dispatch) => (dataKey, filmsArray, sameGenreFilms) => {
    const filmKey = dataKey
    dispatch(actionCreator.setFilmKey(filmKey))
    dispatch(actionCreator.setMainView(SearchStatus.showMovieInfo))
    if (filmsArray) {
        dispatch(actionCreator.getMovieInfo(filmsArray[filmKey].title))

    } dispatch(actionCreator.getMovieInfo(sameGenreFilms[filmKey].title))



}