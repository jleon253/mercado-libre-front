import React, {Fragment, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import currency from 'currency.js'
import {ProductDetailContext} from '../context/ProductDetailContext';
import Breadcrumbs from './Breadcrumbs';

const ProductDetail = () => {

  const {details, setIdProduct} = useContext(ProductDetailContext);
  const history = useHistory();
  const params = useParams();

  const back = e => {
    e.preventDefault();
    history.goBack();
  };

  useEffect(() => {
    console.log(params);
    setIdProduct(params.id);
  }, [params]);

  useEffect(() => {
    // {title, price, sold_quantity, available_quantity, condition, pictures}
    console.log('details', details);
  }, [details]);


  return (
    <Fragment>
      <div className="col-12 col-sm-2 my-3 d-flex align-items-center">
        <a href="!#" className="small-size" onClick={(e) => back(e)}>Volver al listado</a>
      </div>
      <div className="col-12 col-sm-10 my-3">
        <Breadcrumbs />
      </div>
      {
        (Object.keys(details).length === 0)
          ? null
          : (
            <div className="col-12 my-3">
              <div className="row p-3 product-detail">
                <div className="col-12 col-md-8"></div>
                <div className="col-12 col-md-4">
                  <small className="small-size light">{details.condition} - {details.sold_quantity} vendidos</small>
                  <h1 className="big-size regular">{details.title}</h1>
                  <h2 className="bigger-size">{currency(details.price, {precision: 0, separator: '.'}).format()}</h2>
                  {
                    (details.available_quantity === 0)
                      ? null
                      : (
                        <Fragment>
                          <p className="normal-size regular">Stock disponible</p>
                          <button type="button" className="btn btn__primary">Comprar Ahora</button>
                        </Fragment>
                      )
                  }
                </div>
              </div>
            </div>
          )
      }
    </Fragment>
  );
};

export default ProductDetail;