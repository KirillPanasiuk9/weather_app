import React, {FC} from 'react';
import "./weekForecast.css";
import {useTypedSelector} from "../../../hooks/useTypedSeletor";

const WeekForecast:FC = () => {

    const {icon, currentWeatherTemperature} = useTypedSelector(state => state.currentWeatherReducer);
    const {tomorrowIcon, tomorrowTemperature, weekday, afterTomorrowIcon, afterTomorrowTemperature} = useTypedSelector(state => state.forecastWeatherReducer);


    return (
        <div className="weekForecast">
            <div className="weekForecast_day">
                <div className="weekForecast_day_date">Today</div>
                <img className="weekForecast_day_icon" src={icon}/>
                <div className="weekForecast_day_t">{currentWeatherTemperature} °</div>
            </div>
            <div className="weekForecast_day">
                <div className="weekForecast_day_date">Tomorrow</div>
                <img className="weekForecast_day_icon" src={tomorrowIcon}/>
                <div className="weekForecast_day_t">{tomorrowTemperature} °</div>
            </div>
            <div className="weekForecast_day">
                <div className="weekForecast_day_date">{weekday}</div>
                <img className="weekForecast_day_icon" src={afterTomorrowIcon}/>
                <div className="weekForecast_day_t">{afterTomorrowTemperature} °</div>
            </div>
        </div>
    );
};

export default WeekForecast;
