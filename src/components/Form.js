import React from 'react'
import { useState } from 'react'

function Form() {
    const[name, setName] = React.useState('')
    let handleChange =(e) =>{
        
        setName(e.target.value)
    }
  return (
    <div>
        <h1>This is a form</h1>
        <form>
            <lable>Name</lable>
            <input onChange = {handleChange} type='text' value={name}></input>
        </form>
    </div>
  )
}

export default Form