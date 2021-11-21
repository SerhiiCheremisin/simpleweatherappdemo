import {AsyncFetch, AsyncTypes, CurrentCityState} from '../types/index';

const initState: CurrentCityState = {
    city: {},
    isLoading: false,
    error: false
}

const fetchDataReducer = (state:CurrentCityState = initState, action:AsyncFetch):CurrentCityState => {
    switch (action.type){
        case AsyncTypes.START_TO_FETCH_WEATHER:
            return state = { ...state, isLoading:action.payload}
        case AsyncTypes.FETCH_WEATHER_SUCCESS:
           return state = {...state , isLoading:false, city: action.payload}
        case AsyncTypes.FETCH_WEATHER_ERROR:
            return state = {...state, isLoading: false, error: action.payload}
        default: return state
    }
}

export default fetchDataReducer;