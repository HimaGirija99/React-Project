import React from 'react'

function event()  {
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

export default event