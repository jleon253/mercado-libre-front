import React, {useContext} from 'react';
import Product from './Product';
import {ProductsContext} from '../context/ProductsContext';

const Products = () => {

  const {productsList} = useContext(ProductsContext);

  return (
    <div>
      {
        (productsList.length === 0) ? null :  productsList.map(product => (<Product key={product.id} product={product} />))
      }
    </div>
  );
};

export default Products;