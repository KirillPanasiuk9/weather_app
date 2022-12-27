 import {AnyAction, combineReducers} from "redux";
 import {configureStore, ThunkAction} from "@reduxjs/toolkit";
 import forecastWeatherReducer from "./reducers/forecastWeatherReducer";
 import currentWeatherReducer from "./reducers/currentWeatherReducer";


 const rootReducer = combineReducers({
  currentWeatherReducer,
  forecastWeatherReducer,
 })


// Initial
 export const setupStore = () => {
   return configureStore({
    reducer: rootReducer,
   })
 }

 // const store = configureStore({
 //  reducer: rootReducer,
 // })

 // // Infer the `RootState` and `AppDispatch` types from the store itself
 // export type RootState = ReturnType<typeof store.getState>
 // export type AppStore = ReturnType<typeof store>
 // // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 // export type AppDispatch = typeof store.dispatch

// initial
 export type RootState = ReturnType<typeof rootReducer>
 export type AppStore = ReturnType<typeof setupStore>
 export type AppDispatch = AppStore["dispatch"]



// not working answer
 // export type AppDispatch<ReturnType = void> = ThunkAction<
 //     ReturnType,
 //     RootState,
 //     unknown,
 //     AnyAction
 //     >;

 // export default store
