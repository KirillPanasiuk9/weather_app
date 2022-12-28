import {AppDispatch} from "./store";
import axios from "axios";
import {CurrentWeather, CurrentWeekWeather, WeatherByLocation} from "../types/types";
import {isDataFetchingSuccess, isDataFetchingError} from "./reducers/currentWeatherReducer"
import {isForecastDataFetchingSuccess, isForecastDataFetchingError} from "./reducers/forecastWeatherReducer"



const shakeInput = ():void => {
    let input: any = document.getElementById("cityForm_Input");
    input.style.transform = "translate(5px,0)"
    setTimeout(() => input.style.transform = "translate(-5px,0)", 70)
    setTimeout(() => input.style.transform = "translate(5px,0)", 140)
    setTimeout(() => input.style.transform = "translate(-5px,0)", 210)
    setTimeout(() => input.style.transform = "translate(5px,0)", 280)
    setTimeout(() => input.style.transform = "translate(-5px,0)", 350)
    setTimeout(() => input.style.transform = "translate(0,0)", 420)
}



export const fetchWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<CurrentWeather>(`https://api.weatherapi.com/v1/current.json?key=6295d433b18141779c695159222112&q=${city}`)
            dispatch(isDataFetchingSuccess(response.data))
        } catch (error: any) {
            shakeInput()
            dispatch(isDataFetchingError(error.message))
            console.log(error.message)
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