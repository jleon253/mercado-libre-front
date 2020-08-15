import React, {Fragment ,useContext} from 'react';
import Product from './Product';
import {ProductsContext} from '../context/ProductsContext';

const Products = () => {

  const {queryProduct, paging, productsList} = useContext(ProductsContext);
  console.log('paging', paging);

  return (
    <Fragment>
      <span className="col-12 d-flex justify-content-between align-items-center">
        <p className="my-2 bigger-size bold">{queryProduct}</p>
        { (Object.keys(paging).length > 0) ? (<p className="my-2 small-size light">{paging.limit} de {paging.total}</p>) : null}
      </span>
      {
        (productsList.length === 0) ? null :  productsList.map(product => (<Product key={product.id} product={product} />))
      }
    </Fragment>
  );
};

export default Products;