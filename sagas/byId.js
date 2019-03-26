import { call, takeEvery, put } from 'redux-saga/effects'
import { getFilmsById } from '../src/services/getFilms/getFilmById'
import { actionCreator } from '../src/actions'
// import { makeRequest } from '../src/services/getFilms/makeRequest'
import { getFilms } from '../src/services/getFilms/getFilms'


function* byId(action) {
    const id = yield action.match.params.id
    const film = yield call(getFilmsById, id)
    const genre = yield film.genres[0]
    const sortBy = yield action.sortBy
    const searchByFix = yield 'genres'
    yield put(actionCreator.chosenFilm.setInfo(film))
    const films = yield call(getFilms, {sortBy, value: genre, searchByFilter: searchByFix})
    yield put(actionCreator.sameGenre.getFilms(films))
}

export function* watchSagaAppFilmAction(){
    yield takeEvery('sagaAppFilmAction', byId)
}