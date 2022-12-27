import React, {FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSeletor";
import "./location.css"

const Location:FC = () => {

    const currentWeather = useTypedSelector(state => state.currentWeatherReducer)

    return (
        <div className="location">{currentWeather.location}, {currentWeather.region}, {currentWeather.country}</div>
    );
};

export default Location;
