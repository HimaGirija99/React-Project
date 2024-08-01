import React from 'react'
import { useState } from 'react'

function Form() {
    const[name, setName] = useState('')
    let handleChange =(e) =>{
        console.log(e)        
        setName(e.target.value)
    }
  return (
    <div>
        <h1>This is a form</h1>
        <form>
            <label>Name</label>
            <input onChange = {handleChange} type='text' value={name}></input>
        </form>
    </div>
  )
}

export default Form