
import {SyncTypes} from '../redux/types/index'

export function startFetch (query:string):object {
    return {
        type: 'START_TO_FETCH',
        payload: query
    }
}

export function startFullSearch (lat:number, long:number) {
    return{
        type: 'START_TO_FETCH_WHOLE',
        long: long,
        lat: lat
    }
}

export function cityChooser(bool:boolean):object {
    return {
        type: SyncTypes.CITY_IS_CHOSEN,
        payload: bool
    }
}

export function setInput (input:string):object{
    return {
        type: SyncTypes.SET_INPUT,
        payload: input
    }
}

export function setFullData (bool:boolean):object{
    return {
        type: SyncTypes.FULL_DATA_IS_SET,
        payload: bool
    }
}

export function setDay (number:number):object {
    return {
        type: SyncTypes.SET_DAY,
        payload: number
    }
}