import React from 'react'

function Products() {
    let Products =['laptop', 'mobile', 'tablet', 'camera', 'watch', 'tv', 'headphones', 'speaker']
  return (
    <div>
        {Products.map((product)=>{
            return <li>{product}</li>
        })}
    </div>
  )
}

export default Products