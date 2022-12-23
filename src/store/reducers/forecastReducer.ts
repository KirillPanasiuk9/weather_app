import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ForecastState {
    weekday: any,
    tomorrowTemperature: number,
    afterTomorrowTemperature: number,
    tomorrowIcon: any,
    afterTomorrowIcon: string,
    isLoading: boolean,
    error: string,
}

const initialState: ForecastState = {
    weekday: "",
    tomorrowTemperature: 0,
    afterTomorrowTemperature: 0,
    tomorrowIcon: "",
    afterTomorrowIcon: "",
    isLoading: false,
    error: "",
}

const afterTomorrowWeekDay = () => {
    const currentDate = new Date();
    const weekDay = () => {
        switch (currentDate.getDay()) {
            case 6 : return "Monday"
            case 7 : return "Tuesday"
            case 1 : return "Wednesday"
            case 2 : return "Thursday"
            case 3 : return "Friday"
            case 4 : return "Saturday"
            case 5 : return "Sunday"
        }
    }

    return weekDay()
}

export const forecastReducer = createSlice({
    name: "forecastReducer",
    initialState,
    reducers: {
        forecastDataFetching(state) {
            state.isLoading = true;
        },

        forecastDataFetchingSuccess(state, action) {
            state.isLoading = false;
            state.weekday = afterTomorrowWeekDay();
            state.tomorrowTemperature = action.payload.forecast.forecastday[1].day.avgtemp_c;
            state.afterTomorrowTemperature = action.payload.forecast.forecastday[2].day.avgtemp_c;
            state.tomorrowIcon = action.payload.forecast.forecastday[1].day.condition.icon;
            state.afterTomorrowIcon = action.payload.forecast.forecastday[2].day.condition.icon;
        },

        forecastDataFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default forecastReducer.reducer;
export const {forecastDataFetching, forecastDataFetchingError, forecastDataFetchingSuccess} = forecastReducer.actions;