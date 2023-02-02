import { TypedUseSelectorHook, useSelector } from "react-redux";
import {CurrentWeatherState} from "../types/types";
import {ForecastState} from "../types/types";

export type RootState2 = {
    currentWeatherReducer: CurrentWeatherState,
    forecastWeatherReducer: ForecastState,
};

export const useTypedSelector: TypedUseSelectorHook<RootState2> = useSelector;