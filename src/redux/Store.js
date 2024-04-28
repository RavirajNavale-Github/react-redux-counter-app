import { configureStore } from "@reduxjs/toolkit";
import conunterReducer from "./CounterSlice";

const store = configureStore({
    reducer: {
        counter: conunterReducer
    }
});

export default store;