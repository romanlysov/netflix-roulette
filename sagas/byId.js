import { call, takeEvery, put } from 'redux-saga/effects'
import { getFilmById } from '../src/services/getFilms/getFilmById'
import { actionCreator } from '../src/actions'
import { getFilms } from '../src/services/getFilms/getFilms'


function* byId(action) {
    const id = yield action.match.params.id
    const film = yield call(getFilmById, id)
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