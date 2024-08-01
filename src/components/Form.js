import React from 'react'
import { useState } from 'react'

function Form() {
    const[name, setName] = useState('')
    let handleChange =(e) =>{               
        setName(e.target.value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name)
    }
  return (
    <div>
        <h1>This is a form</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input onChange = {handleChange} type='text' value={name}></input>
            <button>Submit Form</button>
        </form>
    </div>
  )
}

export default Form