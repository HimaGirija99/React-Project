import React from 'react'

function products() {
    //let products =['laptop', 'mobile', 'tablet', 'camera', 'watch', 'tv', 'headphones', 'speaker']
    let productsList = [{id:1, name:'laptop', price:50000}, {id:2, name:'mobile', price:40000}, {id:3, name:'tablet', price:35000}, {id:4, name:'camera', price:60000},
        {id:5, name:'watch', price:5000}, {id:6, name:'tv', price:40000}, {id:7, name:'headphones', price:3000}, {id:8, name:'speaker', price:6000}
    ]
  return (
    // <div>
    //     {products.map((product, index)=>{
    //         return <li key={index}>{product}</li>
    //     })}
    // </div>
    <div>
        {productsList.map((product)=>{
            return <li key={product.id}>{product.name}:{product.price}</li>
        })}
    </div>
  )
}

export default products