import { TypedUseSelectorHook, useSelector } from "react-redux";
import {CurrentWeatherState} from "../reducers/currentWeatherReducer";
import {ForecastState} from "../reducers/forecastWeatherReducer";

export type RootState2 = {
    currentWeatherReducer: CurrentWeatherState,
    forecastWeatherReducer: ForecastState,
}

export const useTypedSelector: TypedUseSelectorHook<RootState2> = useSelector