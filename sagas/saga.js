import { takeEvery } from 'redux-saga/effects'

function logSaga(action) {
    console.log(action.type)
}

export function* watchAllActions(){
    yield takeEvery('*', logSaga)

}