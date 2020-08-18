import React, {Fragment, useContext, useEffect} from 'react';
import {ProductsContext} from '../context/ProductsContext';
import {useLocation, Link} from 'react-router-dom';
import queryString from 'query-string';
import Breadcrumbs from './Breadcrumbs';
import Product from './Product';
import Message from './Message';

const Products = () => {

  const {queryAnswer, paging, productsList, setQueryProduct} = useContext(ProductsContext);
  const location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    setQueryProduct(values.search);
    // eslint-disable-next-line
  },[location]);

  return (
    <Fragment>
      <div className="col-12 my-3">
        <Breadcrumbs />
      </div>
      <span className="col-12 d-flex justify-content-between align-items-center">
        <p className="my-2 bigger-size bold">
          {
            (queryAnswer === '')
              ? null
              : queryAnswer
          }
        </p>
        { (paging > 0) ? (<p className="my-2 small-size light">{paging} resultados</p>) : null}
      </span>
      {
        (productsList.length === 0 && paging === 0)
          ? (<Message msg="No se encontraron resultados" />)
          : productsList.map(product => {
            return (
              <Link to={`/items/${product.id}`} key={product.id} className="col-12 p-3 product">
                <Product product={product} />
              </Link>
            );
          })
      }
    </Fragment>
  );
};

export default Products;