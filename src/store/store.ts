 import {combineReducers} from "redux";
 import {configureStore} from "@reduxjs/toolkit";
 import sliceReducer from "./reducers/sliceReducer";


 const rootReducer = combineReducers({
  sliceReducer
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