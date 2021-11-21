import {DailyData,SyncTypes, SyncEvents} from '../types/index';

const initState:DailyData = {
    currentDay: 0
}

const daysReducer = (state:DailyData = initState,action:SyncEvents):DailyData => {
     switch (action.type){
         case SyncTypes.SET_DAY:
             return state = {currentDay: action.payload}
         default: return state
     }
}

export default daysReducer;