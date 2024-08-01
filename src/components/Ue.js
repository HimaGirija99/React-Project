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
    }, [])
    console.log('other code that gets executed')
    return (
        <div>
            <h1>
                This is my count value:{count}               
                <div><input onChange= {handleChange} type = 'text' value={text}></input></div>
                <h2>{text}</h2>
            </h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}
export default Ue