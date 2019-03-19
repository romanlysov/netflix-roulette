import { takeEvery } from 'redux-saga/effects'

function logAction(action) {
    console.log(action.type)
}

export function* watchAllActions(){
    yield takeEvery('*', logAction)

}