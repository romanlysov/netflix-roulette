// import { fetchFilms } from '../FetchFilms'
// import { getFilms } from '../../services/getFilms/getFilms'
// import { getAllFilms } from '../../services/getFilms/getAllFilms'
// import { actionCreator } from '../../actions'
// import { SortByParam } from '../../constants'
//
// export const sortByRatingClickHandler = dispatch => async (
//   searchByFilter,
//   value
// ) => {
//   const sortBy = SortByParam.byRating
//   dispatch(actionCreator.search.sortFilter(sortBy))
//   await fetchFilms(
//     dispatch,
//     async () => await getFilms({ sortBy, value, searchByFilter })
//   )
// }
//
// export const sortByRatingDefaultHandler = async dispatch => {
//   const sortBy = SortByParam.byRating
//   dispatch(actionCreator.search.sortFilter(sortBy))
//   await fetchFilms(dispatch, async () => await getAllFilms(sortBy))
// }
