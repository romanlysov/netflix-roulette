import { takeEvery, call, put, select } from 'redux-saga/effects'
import { sagaActions } from '../src/actionNames'
import { getAllFilms } from '../src/services/getFilms/getAllFilms'
import { actionCreator } from '../src/actions'
import { sortBySelector } from '../src/selectors/simpleSelectors'


export function* fetchAllFilms() {
    const state = yield select()
    const sortBy = yield sortBySelector(state)
    const films = yield call(getAllFilms, sortBy)
    yield put(actionCreator.mainFilms.setFilmsInfo(films))
}

export function* watchSagaFetchFilmsAction() {
    yield takeEvery(sagaActions.sagaFetchAllFilmsAction, fetchAllFilms)
}