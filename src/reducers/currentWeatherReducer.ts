import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CurrentWeather} from "../types/types";



export interface CurrentWeatherState {
    location: string;
    country: string;
    region: string;
    date: string;
    currentWeatherTemperature: number;
    icon: any;
    isLoading: boolean;
    error: string;
}

const initialState: CurrentWeatherState = {
    location: "",
    country: "",
    region: "",
    date: "",
    currentWeatherTemperature: 0,
    icon: "",
    isLoading: false,
    error: "",
}

function getDate() {
    function zero_first_format(value:any) {
        if (value < 10) {value='0'+value}
        return value;
    }
    const current_datetime = new Date();
    const day = zero_first_format(current_datetime.getDate());
    function weekDay(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'long'});
    }
    const month = () => {
        switch (current_datetime.getMonth()+1) {
            case 1 : return "January"
            case 2 : return "February"
            case 3 : return "March"
            case 4 : return "April"
            case 5 : return "May"
            case 6 : return "June"
            case 7 : return "Jule"
            case 8 : return "August"
            case 9 : return "September"
            case 10 : return "October"
            case 11 : return "November"
            case 12 : return "December"
        }
    };
    const year = current_datetime.getFullYear();

    return weekDay()+", "+day+" "+month()+" "+year;
}


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
    }
})



export default currentWeatherReducer.reducer;
export const {isDataFetching, isDataFetchingError, isDataFetchingSuccess} = currentWeatherReducer.actions