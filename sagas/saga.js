import { takeEvery, all } from 'redux-saga/effects'
import { watchFilmObjectActionSaga } from './filmInfoSaga'

function logSaga(action) {
    console.log(action.type)
}

function* watchAllActions(){
    yield takeEvery('*', logSaga)

}

export default function* rootSaga() {
    yield  all([
        watchAllActions(),
        watchFilmObjectActionSaga()
    ])
}