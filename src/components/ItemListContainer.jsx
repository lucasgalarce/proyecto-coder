import React from 'react'
import ProductCard from './ProductCard'

const ItemListContainer = ({productsData}) => {
  return (
    <div>
      <h1 style={{color: 'blue'}}>Products</h1>
      {
        productsData.map(product => 
         <ProductCard key={product.id} productData={product}/> 
        )
      }
    </div>
  )
}

export default ItemListContainer