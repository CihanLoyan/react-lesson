import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const Counter = () => {
  
    // Slice içerisindeki state'e erişmek için useSelector() kullanılır:
    const { value} = useSelector((store) => store.counter)  // Object Destructuring
    console.log(value);

/*  const state = useSelector((store) => store.counter) // useSelector() kullanarak store'a eriştik ve store içerisindeki reducer'lardan "counter"ı seçtik.
    console.log(state); // Object
    console.log(state.value);  // Number
 */

// Slice içerisindeki fonksiyonlara erişmek için ise useDispatch() kullanılır:
    const dispatch = useDispatch();

    return (
        <div className='counter'>     
            <button onClick={() => dispatch(increment())}>Increase</button>
            {value}
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
    )
}

export default Counter;