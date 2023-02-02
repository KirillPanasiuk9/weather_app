import {useTypedDispatch} from "./useTypedDispatch";
import {bindActionCreators} from "redux";
import {fetchWeather, fetchWeatherByLocation, fetchWeekWeather} from "../store/asyncActions";

const ActionCreators = {fetchWeather, fetchWeekWeather, fetchWeatherByLocation};

export const useActions = () => {
    const dispatch = useTypedDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}