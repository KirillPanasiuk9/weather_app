import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CurrentWeatherState ,CurrentWeather} from "../types/types";

const initialState: CurrentWeatherState = {
    location: "",
    country: "",
    region: "",
    date: "",
    currentWeatherTemperature: 0,
    icon: "",
    isLoading: false,
    error: "",
};

function getDate() {
    return new Date().toLocaleDateString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
};


export const currentWeatherReducer = createSlice({
    name: "currentWeatherReducer",
    initialState,
    reducers: {

        isDataFetching(state):void {
            state.isLoading = true;
        },

        isDataFetchingSuccess(state, action:PayloadAction<CurrentWeather>):void {
            state.isLoading = false;
            state.error = "";
            state.location = action.payload.location.name;
            state.region = action.payload.location.region;
            state.country = action.payload.location.country;
            state.date = getDate();
            state.currentWeatherTemperature = Math.round(action.payload.current.temp_c);
            state.icon = action.payload.current.condition.icon;
        },

        isDataFetchingError(state, action:PayloadAction<string>):void {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});



export default currentWeatherReducer.reducer;
export const {isDataFetching, isDataFetchingError, isDataFetchingSuccess} = currentWeatherReducer.actions;