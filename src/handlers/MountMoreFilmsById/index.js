// import { getFilmById } from '../../services/getFilms/getFilmById'
// import { fetchMoreFilmsById } from '../FetchMoreFilmsById'
// import { getFilms } from '../../services/getFilms/getFilms'
// import { actionCreator } from '../../actions'
//
// export const mountMoreFilmsById = async ({dispatch, sortBy, match}) => {
//     const id = match.params.id
//     const film = await getFilmById(id)
//     const genre = film.genres[0]
//     const searchByFix = 'genres'
//     dispatch(actionCreator.chosenFilm.setInfo(film))
//     await fetchMoreFilmsById(
//         dispatch,
//         async () => await getFilms({sortBy, value: genre, searchByFilter: searchByFix})
//     )
// }