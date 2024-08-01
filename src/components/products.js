import React from 'react'

function products() {
    let products =['laptop', 'mobile', 'tablet', 'camera', 'watch', 'tv', 'headphones', 'speaker']
  return (
    <div>
        {products.map((product, index)=>{
            return <li key={index}>{product}</li>
        })}
    </div>
  )
}

export default products