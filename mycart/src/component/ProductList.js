import React from 'react'
import Product from './Product'
import ErrMsg from './ErrMsg'

export default function ProductList(props) {
  return (
    props.productList.length>0?
    props.productList?.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrQuantity} index={i} removeItem={props.removeItem}/>
    })
    : <h1>No Products Exist In The Cart </h1>
  )
}
