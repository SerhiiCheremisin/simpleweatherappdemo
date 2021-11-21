export interface CurrentCityState {
    city : object;
    isLoading: boolean;
    error: null | boolean
}
export interface CurrentAllCityData {
    fullInfo: object,
    isLoading: boolean,
    error: null| boolean
}

export interface SyncData {
    input: string;
    city: boolean;
    fullData: boolean
}

export interface DailyData {
    currentDay: number,
}

export enum AsyncTypes {
 START_TO_FETCH_WEATHER = 'START_TO_FETCH_WEATHER',
 FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
 FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
 SET_ALL_FORECAST = 'SET_ALL_FORECAST',
 ALL_FORECAST_LOADED = 'ALL_FORECAST_LOADED',
 FETCH_ALL_DATA_ERROR = 'FETCH_ALL_DATA_ERROR',
}

export enum SyncTypes {
 CITY_IS_CHOSEN = 'CITY_IS_CHOSEN',
 FULL_DATA_IS_SET = 'FULL_DATA_IS_SET',
 SET_INPUT = 'SET_INPUT',
 SET_DAY = 'SET_DAY'
}

interface StartFetchCity {
    type: AsyncTypes.START_TO_FETCH_WEATHER;
    payload: boolean
}
interface CityHasLoaded {
    type: AsyncTypes.FETCH_WEATHER_SUCCESS;
    payload: object
}

interface CityLoadingError {
    type: AsyncTypes.FETCH_WEATHER_ERROR;
    payload: boolean
}

interface AllDataLoadingIsBegan {
    type: AsyncTypes.SET_ALL_FORECAST;
    payload: boolean
}

interface AllDataIsLoaded {
    type: AsyncTypes.ALL_FORECAST_LOADED;
    payload: object
}

interface AllDataHasAnError {
    type: AsyncTypes.FETCH_ALL_DATA_ERROR;
    payload: boolean
}

export type AsyncFetch = StartFetchCity | CityHasLoaded | CityLoadingError |AllDataLoadingIsBegan | AllDataIsLoaded | AllDataHasAnError

interface SetInput {
    type: SyncTypes.SET_INPUT;
    payload: string
}
interface SetCity {
    type: SyncTypes.CITY_IS_CHOSEN;
    payload: boolean
}
interface SetFullData {
    type: SyncTypes.FULL_DATA_IS_SET;
    payload: boolean
}

interface SetDay {
    type: SyncTypes.SET_DAY,
    payload: number
}
export type SyncEvents = SetInput | SetCity | SetFullData | SetDay



