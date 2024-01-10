import {configureStore} from "@reduxjs/toolkit"               // this will be imported to index.js
import counterReducer from '../features/counter/counterSlice';   // need to be called CounterReducer because it will be the whole reducer that is being imported even if the name is counterSlice.

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        
    },                                 // reducer is maimly a object here will be the reducer that we will create. 

    

})