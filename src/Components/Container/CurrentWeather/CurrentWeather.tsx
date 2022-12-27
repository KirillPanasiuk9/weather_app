import React, {FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSeletor";
import "./currentWeather.css"

const CurrentWeather:FC = () => {

    const currentWeather = useTypedSelector(state => state.currentWeatherReducer)


    return (
        <div className="currentWeather">
            <div className="currentWeather_temperature">
                {currentWeather.currentWeatherTemperature} °
            </div>
            <div className="currentWeather_image">
                <img src={currentWeather.icon}/>
            </div>
        </div>
    );
};

export default CurrentWeather;
