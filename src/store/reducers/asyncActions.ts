import {AppDispatch} from "../store";
import axios from "axios";
import {sliceReducer} from "./sliceReducer";
import {forecastReducer} from "./forecastReducer";



const shakeInput = () => {
    let input:any = document.getElementById("cityForm_Input");
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
            const response = await axios.get<any>(`https://api.weatherapi.com/v1/current.json?key=6295d433b18141779c695159222112&q=${city}`)
            dispatch(sliceReducer.actions.dataFetchingSuccess(response.data))
        } catch (error) {
            shakeInput()
            // dispatch(sliceReducer.actions.dataFetchingError(error.message))
        }
    }
}


export const fetchWeekWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<any>(`https://api.weatherapi.com/v1/forecast.json?key=6295d433b18141779c695159222112&q=${city}&days=7`)
            dispatch(forecastReducer.actions.forecastDataFetchingSuccess(response.data))
        } catch (error) {
            // dispatch(forecastReducer.actions.forecastDataFetchingError(error.message))
        }
    }
}



export const fetchWeatherByLocation = (lat: number, lon:number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<any>(`https://api.weatherapi.com/v1/forecast.json?key=6295d433b18141779c695159222112&q=${lat},${lon}&days=7`)
            dispatch(sliceReducer.actions.dataFetchingSuccess(response.data))
            dispatch(forecastReducer.actions.forecastDataFetchingSuccess(response.data))
        } catch (error) {

        }
    }
}