import React, {FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSeletor";
import "./location.css";

const Location:FC = () => {

    const {location, region, country} = useTypedSelector(state => state.currentWeatherReducer);

    return (
        <div className="location">
            {location}, {region}, {country}
        </div>
    );
};

export default Location;
