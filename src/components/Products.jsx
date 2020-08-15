import React, {Fragment, useContext} from 'react';
import Product from './Product';
import Message from './Message';
import {ProductsContext} from '../context/ProductsContext';

const Products = () => {

  const {queryProduct, paging, productsList} = useContext(ProductsContext);
  console.log('paging', paging);

  return (
    <Fragment>
      <span className="col-12 d-flex justify-content-between align-items-center">
        <p className="my-2 bigger-size bold">{queryProduct}</p>
        { (paging > 0) ? (<p className="my-2 small-size light">{paging} resultados</p>) : null}
      </span>
      {
        (productsList.length === 0 && paging === 0) ? (<Message msg="No se encontraron resultados" />) :  productsList.map(product => (<Product key={product.id} product={product} />))
      }
    </Fragment>
  );
};

export default Products;