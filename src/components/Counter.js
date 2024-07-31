import {useState} from 'react'
import React from 'react'
function Counter(){
    const[count, setCount] = useState(0)
    
    return (
        <div><h2>The count value is {count} </h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    
    )
}

export default Counter