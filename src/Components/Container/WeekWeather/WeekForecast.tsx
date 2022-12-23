import React from 'react';
import "./weekForecast.css"
import {useTypedSelector} from "../../../hooks/useTypedSeletor";

const WeekForecast = () => {


    const currentWeather = {
        temperature: useTypedSelector(state => state.sliceReducer.currentWeatherTemperature),
        icon: useTypedSelector(state => state.sliceReducer.icon),
    }

    const forecastWeather = useTypedSelector(state => state.forecastReducer);


    return (
        <div className="weekForecast">
            <div className="weekForecast_day">
                <div className="weekForecast_day_date">Today</div>
                <img className="weekForecast_day_icon" src={currentWeather.icon}/>
                <div className="weekForecast_day_t">{currentWeather.temperature} °</div>
            </div>
            <div className="weekForecast_day">
                <div className="weekForecast_day_date">Tomorrow</div>
                <img className="weekForecast_day_icon" src={forecastWeather.tomorrowIcon}/>
                <div className="weekForecast_day_t">{forecastWeather.tomorrowTemperature} °</div>
            </div>
            <div className="weekForecast_day">
                <div className="weekForecast_day_date">{forecastWeather.weekday}</div>
                <img className="weekForecast_day_icon" src={forecastWeather.afterTomorrowIcon}/>
                <div className="weekForecast_day_t">{forecastWeather.afterTomorrowTemperature} °</div>
            </div>
        </div>
    );
};

export default WeekForecast;
