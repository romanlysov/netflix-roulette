import { takeEvery, call, put } from 'redux-saga/effects'
import { sagaActions } from '../src/actionNames'
import { getAllFilms } from '../src/services/getFilms/getAllFilms'
import { actionCreator } from '../src/actions'


export function* fetchAllFilms(action) {
    const films = yield call(getAllFilms, action.sortBy)
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchSagaFetchFilmsAction() {
    yield takeEvery(sagaActions.sagaFetchAllFilmsAction, fetchAllFilms)
}