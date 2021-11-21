import {AsyncFetch, AsyncTypes, CurrentAllCityData} from '../types/index'


const initState : CurrentAllCityData = {
    fullInfo : {},
    isLoading: false,
    error: false
}

const fetchEverythingReducer = (state:CurrentAllCityData = initState, action:AsyncFetch):CurrentAllCityData => {
      switch (action.type){
          case AsyncTypes.SET_ALL_FORECAST:
              return state = {...state, isLoading: action.payload}
          case AsyncTypes.ALL_FORECAST_LOADED:
              return state = {...state, isLoading:false, fullInfo: action.payload}
          case AsyncTypes.FETCH_WEATHER_ERROR:
              return  state = {...state, isLoading: false,error: action.payload }
          default: return state
      }
}

export default fetchEverythingReducer;