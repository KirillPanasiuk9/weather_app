import React, {FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSeletor";
import "./location.css"

const Location:FC = () => {

    const currentWeather = {
        location: useTypedSelector(state => state.sliceReducer.location),
        region: useTypedSelector(state => state.sliceReducer.region),
        country: useTypedSelector(state => state.sliceReducer.country),
    }

    return (
        <div className="location">{currentWeather.location}, {currentWeather.region}, {currentWeather.country}</div>
    );
};

export default Location;
