import { INCREMENT, INCREMENT_ASYNC } from '../actions/app'
import { call, put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms)
});

function* helloSaga() {
    console.log('Hello Sagas!')
}

function* incrementAsync(actionData) {
    console.log(actionData)
    yield call(delay, 1000);
    yield put({...actionData, type: INCREMENT })
}

function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}