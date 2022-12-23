import React, {FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSeletor";
import "./currentWeather.css"

const CurrentWeather:FC = () => {

    const currentWeather = {
        temperature: useTypedSelector(state => state.sliceReducer.currentWeatherTemperature),
        icon: useTypedSelector(state => state.sliceReducer.icon),
    }


    return (
        <div className="currentWeather">
            <div className="currentWeather_temperature">{currentWeather.temperature} °</div>
            <div className="currentWeather_image">
                <img src={currentWeather.icon}/>
            </div>
        </div>
    );
};

export default CurrentWeather;
