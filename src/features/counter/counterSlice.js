import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:'counter', 
    initialState, 
    reducers:{     // this is where we start naming all our diferent action. 
        increment:(state) =>{
            state.count +=1;
        },
        decrement:(state) =>{
            state.count -=1;
        }, 
        reset:(state) =>{
            state.reset = 0; 
        },
        incrementByAmount:(state, action) =>{
            state.count += action.payload;
        }
    }
})

// we will need to do both export because we will need the action inside the reducers and also the store will need the full reducer. 

export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;  

export default counterSlice.reducer;