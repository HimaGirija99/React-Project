import React from 'react'

function Event()  {
    const handleClick =()=>{
        console.log('Button was clicked')
    }
  return (
    <div>
        <h1>Event handling </h1>
        <button Onclick = {handleClick}> Click Me! </button>
    </div>
  )
}

export default Event