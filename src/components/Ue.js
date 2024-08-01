import {useEffect, useState} from 'react'

function Ue(){
    const[count, setCount] = useState(0)
    const[text, setText] = useState(' ')
    let incrementCount = () =>{
        setCount(count+1)
    }
    let handleChange = (e)=>{
        setText(e.target.value)
    }
    useEffect(()=>{
        console.log('use Effect runs')
        document.title = `Button clicked for ${count} times`
    }, [count])
    console.log('other code that gets executed')
    return (
        <div>
            <h1>This is my count value:{count}</h1>
            <input onChange= {handleChange} type = 'text' value={text}></input>
            <h2>{text}</h2>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}
export default Ue