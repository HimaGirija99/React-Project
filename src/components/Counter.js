import {useState} from 'react'
import React from 'react'
function Counter(){
    const[count, setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        if(count === 0){
            setCount(count)
        }else{
            setCount(count - 1)
        }
        
    }
    return (
        <div><h2>The count value is {count} </h2>
        <button OnClick={increment}> Increment </button>
        <button OnClick={decrement}> Decrement </button> 
        </div>
    
    )
}

export default Counter