import {AppDispatch} from "../store";
import axios from "axios";
import {sliceReducer} from "./sliceReducer";
import {forecastReducer} from "./forecastReducer";


export const fetchWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(sliceReducer.actions.dataFetching())
            const response = await axios.get<any>(`http://api.weatherapi.com/v1/current.json?key=6295d433b18141779c695159222112&q=${city}`)
            dispatch(sliceReducer.actions.dataFetchingSuccess(response.data))
        } catch (error) {
            // dispatch(sliceReducer.actions.dataFetchingError(error.message))
        }
    }
}


export const fetchWeekWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(forecastReducer.actions.forecastDataFetching())
            const response = await axios.get<any>(`http://api.weatherapi.com/v1/forecast.json?key=6295d433b18141779c695159222112&q=${city}&days=7`)
            dispatch(forecastReducer.actions.forecastDataFetchingSuccess(response.data))
        } catch (error) {
            // dispatch(forecastReducer.actions.forecastDataFetchingError(error.message))
        }
    }
}

export const fetchWeatherByLocation = (lat: number, lon:number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(sliceReducer.actions.dataFetching())
            dispatch(forecastReducer.actions.forecastDataFetching())
            const response = await axios.get<any>(`http://api.weatherapi.com/v1/forecast.json?key=6295d433b18141779c695159222112&q=${lat},${lon}&days=7`)
            dispatch(sliceReducer.actions.dataFetchingSuccess(response.data))
            dispatch(forecastReducer.actions.forecastDataFetchingSuccess(response.data))
            console.log(response.data);
        } catch (error) {

        }
    }
}





    // return async (dispatch: AppDispatch) => {
    //     try {
    //         dispatch(sliceReducer.actions.dataFetching())
    //         const response = await axios.get(url)
    //         dispatch(sliceReducer.actions.dataFetchingSuccess(response.data))
    //         console.log(response.data)
    //     } catch (error) {
    //         console.log(error)
    //         // dispatch(sliceReducer.actions.dataFetchingError(error.message))
    //     }
    // }

// return (dispatch: AppDispatch) => {
//     try {
//         dispatch(sliceReducer.actions.dataFetching())
//         new Promise(resolve => {
//             resolve(fetch(url))
//         })
//             .then((response: any) => {
//                 return response.json()
//             })
//             .then(result => {
//                 dispatch(sliceReducer.actions.dataFetchingSuccess(result.data))
//             })
//     } catch (e) {
//         // dispatch(sliceReducer.actions.dataFetchingError(e.message))
//     }
// }