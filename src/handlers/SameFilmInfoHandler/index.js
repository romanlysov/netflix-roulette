import {fetchSameFilms} from 'components/FetchSameFilms'
import {actionCreator} from '../../actions';
import {MovieInfoHandler} from '../MovieInfoHandler';

export const sameFilmInfoHandler = dispatch => async (film) => {
    MovieInfoHandler(dispatch)(film)
    dispatch(actionCreator.setClickFromZoneFlag(true))
    await fetchSameFilms(dispatch, film.genres[0])
}
