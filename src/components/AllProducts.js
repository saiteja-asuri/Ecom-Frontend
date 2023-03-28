import React, { useState } from 'react'
import Product from './Product';

function AllProducts() {
    const [products, setproducts]=useState([]);


  return (
    <div>
        {
            products.map((proObj)=> <Product title="abc" description="ajerkjn" />)
        }
    </div>
  )
}

export default AllProducts