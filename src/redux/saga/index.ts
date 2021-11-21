import {take, call, put,takeEvery} from 'redux-saga/effects';
import {AsyncTypes} from '../types/index';

let city:string;
let lat:number;
let long: number;

 async function cityFetching () {
    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3c02850ce62d233a0d5e9ebf78ee868d`)
    let result = await request.json();
    return result
}
async function getWholeInfo () {
        let request  = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=3c02850ce62d233a0d5e9ebf78ee868d`)
        let result = await request.json()
    return result
}

export function* rootSaga(){
  yield sagaWatcher()
}

export function* sagaWatcher() {
    yield takeEvery('START_TO_FETCH', fetchWorker,)
    yield takeEvery('START_TO_FETCH_WHOLE', fullFetchWorker)
}

export function* fetchWorker({...payload}):object {
    city = payload.payload;
    const state = yield call(cityFetching)
    yield put({type:AsyncTypes.FETCH_WEATHER_SUCCESS, payload: state})
}

export function* fullFetchWorker ({...payload}):object {
    lat = payload.lat;
    long = payload.long;
    const newState = yield call(getWholeInfo)
    yield put({type:AsyncTypes.ALL_FORECAST_LOADED, payload: newState})
}

