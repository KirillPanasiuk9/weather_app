import React, {useEffect, useRef} from 'react';
import './App.css';
import {fetchWeather} from "./store/reducers/asyncActions";
import {useTypedDispatch} from "./hooks/useTypedDispatch";
import {useTypedSelector} from "./hooks/useTypedSeletor";



function App() {

    const dispatch = useTypedDispatch()

    const location = useTypedSelector(state => state.sliceReducer.location)
    const country = useTypedSelector(state => state.sliceReducer.country)
    const date = useTypedSelector(state => state.sliceReducer.date)
    const currentWeatherTemperature = useTypedSelector(state => state.sliceReducer.currentWeatherTemperature)
    const icon = useTypedSelector(state => state.sliceReducer.icon)


    const city = useRef("");

    useEffect(() => {
        console.log("changed")
        dispatch(fetchWeather(city.current))
    }, )


    return (
    <div className="App">
        <div>
            <input
                className="addClient_input"
                placeholder="Enter client's name"
                type="text"
                onChange={event => city.current = event.target.value}
            />
            <button onClick={() => dispatch(fetchWeather(city.current))}></button>
        </div>
        <div className="container">
            <div className="location">{location}, {country}</div>
            <div className="date">{date}</div>
            <div className="currentWeather">
                <div className="currentWeather_temperature">{currentWeatherTemperature} °C</div>
                <div className="currentWeather_image">{icon}</div>
            </div>
            <div className="weekForecast"></div>
        </div>
    </div>
  )
}

export default App