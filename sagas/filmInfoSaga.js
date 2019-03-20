import { put, takeEvery, call  } from 'redux-saga/effects'
import { actionCreator } from '../src/actions'
import { getFilms } from '../src/services/getFilms/getFilms'

function* filmInfoSaga(action) {
    yield put(actionCreator.setMainFilmInfo(action.film))
    const films  = yield call(getFilms, {sortBy: 'release_date', value: action.genre, searchByFilter: 'genres' })
    yield put(actionCreator.getSameGenreFilms(films))
}

export function* watchFilmObjectActionSaga(){
    yield takeEvery('sagaFilmObject', filmInfoSaga)

}