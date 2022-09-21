import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

const rootReducers = combineReducers({
    toolkitSlice: toolkitSlice
})

export const store = () => {
    return configureStore({
        reducer: rootReducers
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']