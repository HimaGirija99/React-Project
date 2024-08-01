import React from 'react'

function Products() {
    let Products =['laptop', 'mobile', 'tablet', 'camera', 'watch', 'tv', 'headphones', 'speaker']
  return (
    <div>
        {Products.map((Product)=>{
            return <li key={Product}>{Product}</li>
        })}
    </div>
  )
}

export default Products