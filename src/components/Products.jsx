import React, {Fragment ,useContext} from 'react';
import Product from './Product';
import {ProductsContext} from '../context/ProductsContext';

const Products = () => {

  const {productsList} = useContext(ProductsContext);

  return (
    <Fragment>
      {
        (productsList.length === 0) ? null :  productsList.map(product => (<Product key={product.id} product={product} />))
      }
    </Fragment>
  );
};

export default Products;