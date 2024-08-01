import React from 'react'

function products() {
    //let products =['laptop', 'mobile', 'tablet', 'camera', 'watch', 'tv', 'headphones', 'speaker']
    let productsList = [{id:1, product:'laptop', price:50000}, {id:2, product:'mobile', price:40000}, {id:3, product:'tablet', price:35000}, {id:4, product:'camera', price:60000},
        {id:5, product:'watch', price:5000}, {id:6, product:'tv', price:40000}, {id:7, product:'headphones', price:3000}, {id:8, product:'speaker', price:6000}
    ]
  return (
    // <div>
    //     {products.map((product, index)=>{
    //         return <li key={index}>{product}</li>
    //     })}
    // </div>
    <div>
        {productsList.map((product)=>{
            return <li key={product.id}>{product}:{product.price}</li>
        })}
    </div>
  )
}

export default products