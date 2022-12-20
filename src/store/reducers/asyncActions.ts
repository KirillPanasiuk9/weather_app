import {Dispatch} from "redux";
import {AppDispatch} from "../store";
import axios from "axios";
import {sliceReducer} from "./sliceReducer";


export const fetchWeather = (city: string) => {

    return async (dispatch: AppDispatch) => {
        try {
            dispatch(sliceReducer.actions.dataFetching())
            const response = await axios.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30695debc64687a410313d79f9f0dc05`)
            dispatch(sliceReducer.actions.dataFetchingSuccess(response.data))
        } catch (error) {
            // console.log(error)
            // dispatch(sliceReducer.actions.dataFetchingError(error.message))
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