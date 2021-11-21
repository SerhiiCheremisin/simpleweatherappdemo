import {SyncData,SyncTypes,SyncEvents} from '../types/index';

const initState:SyncData = {
    input: '',
    city: false,
    fullData:false
}

const syncReducer = (state:SyncData = initState, action:SyncEvents):SyncData => {
  switch (action.type){
      case SyncTypes.SET_INPUT:
          return state = {...state, input : action.payload}
      case SyncTypes.CITY_IS_CHOSEN:
           return  state = {...state, city: action.payload}
      case SyncTypes.FULL_DATA_IS_SET:
          return  state = {...state, fullData: action.payload}
      default: return state
  }
}

export default syncReducer;