import { useSelector, useDispatch } from 'react-redux';
import {increment,
        decrement, 
        reset, 
        incrementByAmount
       } from './counterSlice';


import React, { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)

    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0; // if we dont get a number value return will fefault to 0. 

    const resetAll = () =>{  // this will reset the state and the useState as well. 

      setIncrementAmount(0);
       
      dispatch(reset());
    }
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input type='text' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
        
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>

          <button onClick={() => resetAll(reset(addValue))}>Reset</button>
        </div>
        
    </section>
  )
}

export default Counter