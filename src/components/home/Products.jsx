import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import Product from '../../api/products'

function Products() {
    const dispatch = useDispatch()
    const {products, productsStatus} = useSelector(state => state.products);


    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
console.log("prd",Product.products);
  return (
    <div>
      {Product.products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <img src={product.img} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Products