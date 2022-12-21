 import {combineReducers} from "redux";
 import {configureStore} from "@reduxjs/toolkit";
 import sliceReducer from "./reducers/sliceReducer";
 import forecastReducer from "./reducers/forecastReducer";


 const rootReducer = combineReducers({
  sliceReducer,
  forecastReducer,
 })


 // export const store = configureStore({
 //     reducer: rootReducer,
 // })

 export const setupStore = () => {
   return configureStore({
    reducer: rootReducer,
   })
 }

 export type RootState = ReturnType<typeof rootReducer>
 export type AppStore = ReturnType<typeof setupStore>
 export type AppDispatch = AppStore["dispatch"]