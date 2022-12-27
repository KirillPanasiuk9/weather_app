import React, {FC, useEffect, useRef, useState} from 'react';
import {fetchWeather, fetchWeatherByLocation, fetchWeekWeather} from "../../store/asyncActions";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import "./cityForm.css"
import {useTypedSelector} from "../../hooks/useTypedSeletor";
import {GeolocationDenied, Position} from "../../types/types";
import {isDataFetching} from "../../store/reducers/currentWeatherReducer"



const CityForm:FC = () => {

    const dispatch = useTypedDispatch();
    const isLoading = useTypedSelector(state => state.currentWeatherReducer.isLoading)
    const [inputValue, setInputValue] = useState("London");
    const city = useRef<string>("London");

    useEffect(() => {
        city.current = inputValue;
    }, [inputValue]);

    useEffect(() => {
        dispatch(fetchWeather("London"))
        dispatch(fetchWeekWeather("London"))
    }, []);

    const getWeather = ():void => {
        dispatch(fetchWeather(city.current))
        dispatch(fetchWeekWeather(city.current))
        setInputValue("")
    }

    const getWeatherByLocation = ():void => {
        dispatch(isDataFetching())
        const success = (position: Position):void => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(position)
            dispatch(fetchWeatherByLocation(lat, lon))
        };
        const fail = (error: GeolocationDenied):void => {
            console.log(error)
        }
        navigator.geolocation.getCurrentPosition(success, fail)
    }



    return (
        <div className="cityForm">
            <input
                className="cityForm_Input"
                id="cityForm_Input"
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
                onClick={() => getWeatherByLocation()}
            >
                <svg
                    width="17"
                    height="24"
                    viewBox="0 0 17 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="locationIcon"
                    className={isLoading ? "cityForm_locationButton_on" : "cityForm_locationButton_off"}
                >
                    <path d="M8.22351 0.349579C3.67709 0.349579 0 4.02666 0 8.57309C0 14.7407 8.22351 23.8453 8.22351 23.8453C8.22351 23.8453 16.447 14.7407 16.447 8.57309C16.447 4.02666 12.7699 0.349579 8.22351 0.349579ZM8.22351 11.5101C6.60231 11.5101 5.28654 10.1943 5.28654 8.57309C5.28654 6.95188 6.60231 5.63612 8.22351 5.63612C9.84472 5.63612 11.1605 6.95188 11.1605 8.57309C11.1605 10.1943 9.84472 11.5101 8.22351 11.5101Z" fill="#FFB200"/>
                </svg>
            </button>
        </div>
    );
};

export default CityForm;
