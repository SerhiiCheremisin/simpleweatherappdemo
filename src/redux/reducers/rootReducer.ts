import {combineReducers} from "redux";
import fetchDataReducer from "./fetchDataReducer";
import suggestedCitiesReducer from "./suggestedCitiesReducer";
import fetchEverythingReducer from "./fetchingAllDataReducer";
import syncReducer from "./syncReducer";
import daysReducer from "./daysReducer";


const rootReducer = combineReducers({
chosenCityWeather: fetchDataReducer,
suggestedCities: suggestedCitiesReducer,
fullData: fetchEverythingReducer,
cityData: syncReducer,
day:daysReducer
})
export default rootReducer;

// export type RootState = ReturnType <typeof rootReducer>;
