import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface State {
    location: string;
    country: string;
    date: string;
    currentWeatherTemperature: number;
    icon: any;
    weekForecast: any[];
    isLoading: boolean;
    error: string;
}

const initialState: State = {
    location: "",
    country: "",
    date: "",
    currentWeatherTemperature: 0,
    icon: "",
    weekForecast: [],
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
    const month = zero_first_format(current_datetime.getMonth()+1);
    const year = current_datetime.getFullYear();

    return day+"."+month+"."+year;
}

export const sliceReducer = createSlice({
    name: "sliceReducer",
    initialState,
    reducers: {
        dataFetching(state) {
            state.isLoading = true;
        },

        dataFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = "";
            state.location = action.payload.name;
            state.country = action.payload.sys.country;
            state.date = getDate()
            state.currentWeatherTemperature = Math.round(action.payload.main.temp - 273);
            state.icon = action.payload.weather[0].icon;
            console.log(action.payload)
        },

        dataFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})



export default sliceReducer.reducer;
export const {dataFetching, dataFetchingError, dataFetchingSuccess} = sliceReducer.actions