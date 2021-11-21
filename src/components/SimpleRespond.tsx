import React from 'react';
import {cityChooser, setFullData, startFullSearch} from "../redux/actions";
import {AsyncTypes} from "../redux/types";
import {useDispatch, useSelector} from "react-redux";

const SimpleRespond:React.FunctionComponent = ():JSX.Element => {
    const dispatch = useDispatch()
    const fetchIsFinished = useSelector((state:any) => state.chosenCityWeather)
    const error = useSelector((state:any) => state.chosenCityWeather.city.cod)
    const newRequestStateHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(startFullSearch(fetchIsFinished.city.coord.lat, fetchIsFinished.city.coord.lon))
        dispatch({type: AsyncTypes.SET_ALL_FORECAST, payload: true})
        dispatch(setFullData(true))
        dispatch(cityChooser(false))
    }
    if (error === '404'){
        return (
            <>
            <h2>Something went wrong please chose another city </h2>
            </>
        )
    }
            return(
            <>
                <ul className='response-ul'>
                    <li>The city is:{fetchIsFinished.city.name}</li>
                    <li>The current weather: {fetchIsFinished.city.weather[0].main}, {fetchIsFinished.city.weather[0].description}</li>
                    <li>The temperature is : {Math.round((fetchIsFinished.city.main.temp ))} C</li>
                    <li>Feels like: {Math.round((fetchIsFinished.city.main.feels_like))} C</li>
                    <li>Wind Speed: {fetchIsFinished.city.wind.speed} m/s</li>
                    <li>Humidity : {fetchIsFinished.city.main.humidity} %</li>
                </ul>
                <button onClick={(e) => newRequestStateHandler(e)}>More details</button>
            </>
            )


};

export default SimpleRespond;