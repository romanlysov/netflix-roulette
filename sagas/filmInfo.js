import { put, takeEvery, call } from 'redux-saga/effects'
import { actionCreator } from '../src/actions'
import { getFilms } from '../src/services/getFilms/getFilms'
import { sagaActions } from '../src/actionNames'
// import { createSelector } from 'reselect'
import { sameFilmsGenreSelector } from '../src/selectors/sameFilmsGenreSelector'

function* filmInfo(action) {
  const newFilm = yield action.array[action.key]
  const genre = yield sameFilmsGenreSelector(action.state)

  const isGenreTheSame =  yield newFilm.genres[0] === genre
  yield put(actionCreator.routing.setSkipRouting(true))
  yield put(actionCreator.chosenFilm.setInfo(action.film))

  if (isGenreTheSame) {
    return
  }
  const films = yield call(getFilms, {
    sortBy: 'release_date',
    value: newFilm.genres[0],
    searchByFilter: 'genres'
  })
  yield put(actionCreator.sameGenre.getFilms(films, action.genre))
}

export function* watchFilmObjectActionSaga() {
  yield takeEvery(sagaActions.sagaFilmObject, filmInfo)
}
