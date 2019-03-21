import { takeEvery, put, call } from 'redux-saga/effects'
import { actionCreator } from '../src/actions'
import { getFilms } from '../src/services/getFilms/getFilms'
import { fetchAllFilms } from './fetchAllFilms'
import { sagaActions } from '../src/actionNames'

function* sortBy(action) {
  const sortBy = yield action.sortBy
  const value = yield action.value
  const searchByFilter = yield action.searchBy
  yield put(actionCreator.search.sortFilter(sortBy))
  const films = yield call(getFilms, { sortBy, value, searchByFilter })
  yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

function* sortByDefault(action) {
  const sortBy = yield action.sortBy
  yield put(actionCreator.search.sortFilter(sortBy))
  yield fetchAllFilms(actionCreator.initiate.triggerFetchAllFilms(sortBy))
}

export function* watchSortByAction() {
  yield takeEvery(sagaActions.sagaSortByAction, sortBy)
  yield takeEvery(sagaActions.sagaSortByDefaultAction, sortByDefault)
}
