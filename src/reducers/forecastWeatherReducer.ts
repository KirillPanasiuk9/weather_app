import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ForecastState, CurrentWeekWeather} from "../types/types";


const initialState: ForecastState = {
    weekday: "",
    tomorrowTemperature: 0,
    afterTomorrowTemperature: 0,
    tomorrowIcon: "",
    afterTomorrowIcon: "",
    error: "",
}

const afterTomorrowWeekDay = () => {
    const currentDate = new Date();
    const weekDay = () => {
        switch (currentDate.getDay()) {
            case 6 : return "Monday";
            case 0 : return "Tuesday";
            case 1 : return "Wednesday";
            case 2 : return "Thursday";
            case 3 : return "Friday";
            case 4 : return "Saturday";
            case 5 : return "Sunday";
        }
    }

    return weekDay()
}


export const forecastWeatherReducer = createSlice({
    name: "forecastWeatherReducer",
    initialState,
    reducers: {

        isForecastDataFetchingSuccess(state, action: PayloadAction<CurrentWeekWeather>):void {
            state.weekday = afterTomorrowWeekDay();
            state.tomorrowTemperature = Math.round(action.payload.forecast.forecastday[1].day.avgtemp_c);
            state.afterTomorrowTemperature = Math.round(action.payload.forecast.forecastday[2].day.avgtemp_c);
            state.tomorrowIcon = action.payload.forecast.forecastday[1].day.condition.icon;
            state.afterTomorrowIcon = action.payload.forecast.forecastday[2].day.condition.icon;
        },

        isForecastDataFetchingError(state, action: PayloadAction<string>):void {
            state.error = action.payload;
        },
    }
})

export default forecastWeatherReducer.reducer;
export const {isForecastDataFetchingError, isForecastDataFetchingSuccess} = forecastWeatherReducer.actions;