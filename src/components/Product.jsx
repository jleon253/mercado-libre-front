import React from 'react';

const Product = ({product}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.id}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default Product;