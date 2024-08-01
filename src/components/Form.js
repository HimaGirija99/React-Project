import React from 'react'
import {useState} from 'react'

function Form(){
    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    let handleName =(e) =>{               
        setName(e.target.value)
    }
    let handleAge =(e) =>{         
        setAge(e.target.value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({Name:name, Age:age})
        
    }
  return (
    <div>
        <h1>This is a form</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input onChange = {handleName} type='text' value={name}></input>     
            <label>Age</label>       
            <input onChange = {handleAge} type='text' value={age}></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form