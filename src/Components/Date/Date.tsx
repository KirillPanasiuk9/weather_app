import React, {FC} from 'react';
import "./date.css"
import {useTypedSelector} from "../../hooks/useTypedSeletor";

const Date:FC = () => {

    const currentWeather = {
        date: useTypedSelector(state => state.sliceReducer.date),
    }

    return (
        <div className="date">{currentWeather.date}</div>
    );
};

export default Date;
