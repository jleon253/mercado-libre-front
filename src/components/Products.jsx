import React, {Fragment, useContext, useEffect} from 'react';
import {ProductsContext} from '../context/ProductsContext';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import Breadcrumbs from './Breadcrumbs';
import Product from './Product';
import Message from './Message';

const Products = () => {

  const {queryProduct, paging, productsList, setQueryProduct} = useContext(ProductsContext);
  const location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    setQueryProduct(values.search);
  },[location]);

  return (
    <Fragment>
      <section className="row">
        <Breadcrumbs />
      </section>
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