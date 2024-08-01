import {useEffect, useState} from 'react'

function Ue(){
    const[count, setCount] = useState(0)
    let incrementCount = () =>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('use Effect runs')
        document.title = 'Button clicked for {count} times'
    })
    console.log('other code that gets executed')
    return (
        <div>
            <h1>
                This is my count value:{count}
                <label> Click </label>
                <button onClick={incrementCount}></button>
            </h1>
        </div>
    )
}
export default Ue