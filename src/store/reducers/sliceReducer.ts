import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface State {
    location: string;
    country: string;
    region: string;
    date: string;
    currentWeatherTemperature: number;
    icon: any;
    isLoading: boolean;
    error: string;
}

const initialState: State = {
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
    const weekDay = () => {
        switch (current_datetime.getDay()) {
            case 1 : return "Monday"
            case 2 : return "Tuesday"
            case 3 : return "Wednesday"
            case 4 : return "Thursday"
            case 5 : return "Friday"
            case 6 : return "Saturday"
            case 7 : return "Sunday"
        }
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
            state.location = action.payload.location.name;
            state.region = action.payload.location.region;
            state.country = action.payload.location.country;
            state.date = getDate();
            state.currentWeatherTemperature = Math.round(action.payload.current.temp_c);
            state.icon = action.payload.current.condition.icon;
        },

        dataFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})



export default sliceReducer.reducer;
export const {dataFetching, dataFetchingError, dataFetchingSuccess} = sliceReducer.actions