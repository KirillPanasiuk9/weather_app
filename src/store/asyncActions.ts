import {AppDispatch} from "./store";
import axios from "axios";
import {CurrentWeather, CurrentWeekWeather, WeatherByLocation} from "../types/types";
import {isDataFetchingSuccess, isDataFetchingError} from "../reducers/currentWeatherReducer"
import {isForecastDataFetchingSuccess, isForecastDataFetchingError} from "../reducers/forecastWeatherReducer"


export const fetchWeather = (city: string) => {
    let input: any = document.getElementById("cityForm_Input");
    return async (dispatch: AppDispatch) => {
        try {
            input.classList.remove("cityForm_Input-error");
            const response = await axios.get<CurrentWeather>(`https://api.weatherapi.com/v1/current.json?key=6295d433b18141779c695159222112&q=${city}`)
            dispatch(isDataFetchingSuccess(response.data))
        } catch (error: any) {
            input.classList.add("cityForm_Input-error");
            dispatch(isDataFetchingError(error.message));
            console.log(error.message);
        }
    }
}


export const fetchWeekWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<CurrentWeekWeather>(`https://api.weatherapi.com/v1/forecast.json?key=6295d433b18141779c695159222112&q=${city}&days=7`)
            dispatch(isForecastDataFetchingSuccess(response.data))
        } catch (error: any) {
            dispatch(isForecastDataFetchingError(error.message))
            console.log(error.message);
        }
    }
}


export const fetchWeatherByLocation = (lat: number, lon:number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<WeatherByLocation>(`https://api.weatherapi.com/v1/forecast.json?key=6295d433b18141779c695159222112&q=${lat},${lon}&days=7`)
            dispatch(isDataFetchingSuccess(response.data))
            dispatch(isForecastDataFetchingSuccess(response.data))
        } catch (error: any) {
            dispatch(isDataFetchingError(error.message))
            dispatch(isForecastDataFetchingError(error.message))
            console.log(error.message);
        }
    }
}