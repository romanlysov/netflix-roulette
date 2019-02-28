import {fetchSameFilms} from 'components/FetchSameFilms';
import {actionCreator} from '../../actions';
import {MovieInfoHandler} from '../MovieInfoHandler';

export const sameFilmInfoHandler = dispatch => async (film) => {
    MovieInfoHandler(dispatch)(film)
    dispatch(actionCreator.setClickFromZoneFlag(true))
    await fetchSameFilms(dispatch, film.genres[0])

}

export const test5 = (MovieInfoHandler) => {
    return MovieInfoHandler()
}

export const sameFilmInfoHandler1 = async (event, params, fetchSameFilms, MovieInfoHandler ) => {
    const filmKey = event.dataKey
    const { dispatch, sameGenreFilms, genre } = params
    dispatch(actionCreator.setFilmKey(filmKey))
    dispatch(actionCreator.getClickedFilmInStore(sameGenreFilms[filmKey]))
    MovieInfoHandler(params, event)
    dispatch(actionCreator.setClickFromZoneFlag(true))
    await fetchSameFilms(dispatch, genre)
    dispatch(actionCreator.getClickedFilmInStore(sameGenreFilms[filmKey]))
}