// import { actionCreator } from '../../actions'
// import { fetchFilms } from '../FetchFilms'
// import { getFilms } from '../../services/getFilms/getFilms'
//
// export const FormSubmitHandler = event => async (value, searchByFilter, dispatch, sortBy) => {
//   event.preventDefault()
//   dispatch(actionCreator.search.getData(value))
//   await fetchFilms(
//     dispatch,
//     async () => await getFilms({ sortBy, value, searchByFilter })
//   )
// }
//
// // async function *saga(action) {
// //   yield put(actionCreator.getSearchData(action.payload.value))
// //   const films = await getFilms({ action.payload.sortBy, action.payload.value, action.payload.searchByFilter }
// //   yield put(actionCreator.setAllFilmsInfo(films))
// //
// // }