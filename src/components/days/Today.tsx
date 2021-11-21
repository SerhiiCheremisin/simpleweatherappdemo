import React from 'react';
import {useSelector} from "react-redux";

const Today:React.FunctionComponent = ():JSX.Element => {
    const allInfo = useSelector((state:any) => state.fullData.fullInfo.current)
    const today = useSelector((state:any) => state.fullData.fullInfo.daily[0])
    const dateBuilder = (sec:number) => {
        let date = new Date(sec * 1000)
        return date.toLocaleTimeString()
    }

    return (
        <div className="left-block">
            <ul>
                <li>The current temperature is : {Math.round((allInfo.temp))} C</li>
                <li>The weather is : {allInfo.weather[0].main}, {allInfo.weather[0].description}</li>
                <li>Daytime temperature: {Math.round(today.temp.day)} C</li>
                <li>Nighttime temperature: {Math.round(today.temp.night)} C</li>
                <li>Evening temperature: {Math.round(today.temp.eve)} C</li>
                <li>Maximum daily temperature: {Math.round(today.temp.max)} C</li>
                <li>Humidity: {allInfo.humidity} %</li>
                <li>Wind speed: {allInfo.wind_speed} metre/sec</li>
                <li>Pressure is : {allInfo.pressure}  hPa</li>
                <li>Cloudiness: {allInfo.clouds} %</li>
                <li>Sunrise (by local time): {dateBuilder(allInfo.sunrise)}</li>
                <li>Sunset (by local time): {dateBuilder(allInfo.sunset)}</li>
            </ul>
            <div className="weather-img">
                <img src={`http://openweathermap.org/img/wn/${allInfo.weather[0].icon}@2x.png`} alt=""/>
            </div>
        </div>
    );
};

export default Today;