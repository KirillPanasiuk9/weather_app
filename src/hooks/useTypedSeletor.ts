import { TypedUseSelectorHook, useSelector } from "react-redux";
// import { RootState } from "../store/store";
import {CurrentWeatherState} from "../store/reducers/currentWeatherReducer";
import {ForecastState} from "../store/reducers/forecastWeatherReducer";

export type RootState2 = {
    currentWeatherReducer: CurrentWeatherState,
    forecastWeatherReducer: ForecastState
}

export const useTypedSelector: TypedUseSelectorHook<RootState2> = useSelector