 import {combineReducers} from "redux";
 import {configureStore} from "@reduxjs/toolkit";
 import forecastWeatherReducer from "../reducers/forecastWeatherReducer";
 import currentWeatherReducer from "../reducers/currentWeatherReducer";


 const rootReducer = combineReducers({
  currentWeatherReducer,
  forecastWeatherReducer,
 });


 export const setupStore = () => {
   return configureStore({
    reducer: rootReducer,
   })
 };

 export type RootState = ReturnType<typeof rootReducer>;
 export type AppStore = ReturnType<typeof setupStore>;
 export type AppDispatch = AppStore["dispatch"];
