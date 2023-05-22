import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'

function Products() {
    const dispatch = useDispatch()
    const {products, productsStatus} = useSelector(state => state.products);

    console.log(products);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

  return (
    <div>Products</div>
  )
}

export default Products