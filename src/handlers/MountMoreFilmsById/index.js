import { getFilmById } from '../../services/getFilms/getFilmById'
import { fetchFilmById } from '../FetchFilmById'
import { fetchMoreFilmsById } from '../FetchMoreFilmsById'
import { getFilms } from '../../services/getFilms/getFilms'

export const mountMoreFilmsById = async ({dispatch, sortBy, match}) => {
    const id = match.params.id
    const film = await getFilmById(id)
    const genre = film.genres[0]
    const searchByFix = 'genres'
    await fetchFilmById(dispatch, async () => film)
    await fetchMoreFilmsById(
        dispatch,
        async () => await getFilms({sortBy, value: genre, searchByFilter: searchByFix})
    )
}