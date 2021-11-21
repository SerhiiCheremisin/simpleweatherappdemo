import React from 'react';
import {useSelector} from "react-redux";

const OtherDay:React.FunctionComponent = ():JSX.Element => {
    const day = useSelector((state:any) => state.day.currentDay)
    const allInfo = useSelector((state:any) => state.fullData.fullInfo.current)
    const today = useSelector((state:any) => state.fullData.fullInfo.daily[day])
    const dayBuilder = (sec:number) => {
        let date = new Date(sec * 1000)
        return date.toLocaleDateString()
    }
    const dateBuilder = (sec:number) => {
        let date = new Date(sec * 1000)
        return date.toLocaleTimeString()
    }

    return (
        <div className="left-block">
            <ul>
                <li>Weather on {dayBuilder(today.dt)}</li>
                <li>Daytime temperature: {Math.round(today.temp.day)} C</li>
                <li>Nighttime temperature: {Math.round(today.temp.night)} C</li>
                <li>Evening temperature: {Math.round(today.temp.eve)} C</li>
                <li>Maximum daily temperature: {Math.round(today.temp.max)} C</li>
                <li>Minimum daily temperature: {Math.round(today.temp.min)} C</li>
                <li>Wind speed: {today.wind_speed} metre/sec</li>
                <li>Pressure is : {today.humidity} %</li>
                <li>Cloudiness: {today.clouds} %</li>
                <li>Sunrise (by local time): {dateBuilder(today.sunrise)}</li>
                <li>Sunset (by local time): {dateBuilder(today.sunset)}</li>
            </ul>
            <div className="weather-img">
                <img src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} alt=""/>
            </div>
        </div>
    );
};

export default OtherDay;