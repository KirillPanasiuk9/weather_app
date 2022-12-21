import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {fetchWeather, fetchWeatherByLocation, fetchWeekWeather} from "./store/reducers/asyncActions";
import {useTypedDispatch} from "./hooks/useTypedDispatch";
import {useTypedSelector} from "./hooks/useTypedSeletor";



function App() {

    const dispatch = useTypedDispatch()

    const currentWeather = {
        location: useTypedSelector(state => state.sliceReducer.location),
        region: useTypedSelector(state => state.sliceReducer.region),
        country: useTypedSelector(state => state.sliceReducer.country),
        date: useTypedSelector(state => state.sliceReducer.date),
        temperature: useTypedSelector(state => state.sliceReducer.currentWeatherTemperature),
        icon: useTypedSelector(state => state.sliceReducer.icon),
    }

    const forecastWeather = {
        weekday: useTypedSelector(state => state.forecastReducer.weekday),
        tomorrowTemperature: useTypedSelector(state => state.forecastReducer.tomorrowTemperature),
        afterTomorrowTemperature: useTypedSelector(state => state.forecastReducer.afterTomorrowTemperature),
        tomorrowIcon: useTypedSelector(state => state.forecastReducer.tomorrowIcon),
        afterTomorrowIcon: useTypedSelector(state => state.forecastReducer.afterTomorrowIcon),
    }

    const [inputValue, setInputValue] = useState("London")
    const city = useRef("London");
    useEffect(() => {
        city.current = inputValue;
    }, [inputValue])

    useEffect(() => {
        console.log("changed")
        dispatch(fetchWeather("London"))
        dispatch(fetchWeekWeather("London"))
    }, [])

    const getWeather = () => {
        dispatch(fetchWeather(city.current))
        dispatch(fetchWeekWeather(city.current))
        setInputValue("")
    }

    const getLocation = () => {
        const successCallback = (position: any) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            dispatch(fetchWeatherByLocation(lat, lon))
        };
        const errorCallback = (error: any) => {
            console.log(error);
        };
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }



    return (
    <div className="App">
        <div className="cityForm">
            <input
                className="cityForm_Input"
                placeholder="Enter your city"
                type="text"
                autoFocus={true}
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                onKeyDown={event => event.key === "Enter" ? getWeather() :""}
            />
            <button
                className="cityForm_Button"
                onClick={() => getWeather()}
            >Get Weather
            </button>
            <button
                className="cityForm_locationButton"
                onClick={() => getLocation()}
            >
                <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.22351 0.349579C3.67709 0.349579 0 4.02666 0 8.57309C0 14.7407 8.22351 23.8453 8.22351 23.8453C8.22351 23.8453 16.447 14.7407 16.447 8.57309C16.447 4.02666 12.7699 0.349579 8.22351 0.349579ZM8.22351 11.5101C6.60231 11.5101 5.28654 10.1943 5.28654 8.57309C5.28654 6.95188 6.60231 5.63612 8.22351 5.63612C9.84472 5.63612 11.1605 6.95188 11.1605 8.57309C11.1605 10.1943 9.84472 11.5101 8.22351 11.5101Z" fill="#FFB200"/>
                </svg>
            </button>
        </div>
        <div className="container">
            <div className="location">{currentWeather.location}, {currentWeather.region}, {currentWeather.country}</div>
            <div className="date">{currentWeather.date}</div>
            <div className="currentWeather">
                <div className="currentWeather_temperature">{currentWeather.temperature} °</div>
                <div className="currentWeather_image">
                    <img src={currentWeather.icon}/>
                </div>
            </div>
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
        </div>
    </div>
  )
}

export default App