import React from 'react';
import productsData from '../../api/products';

function ProductList() {
  return (
    <div>
      {productsData.products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Category: {product.category}</p>
          {product.inStock ? <p>In Stock</p> : <p>Out of Stock</p>}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
