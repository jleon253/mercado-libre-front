import React, {Fragment, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import currency from 'currency.js';
import Carousel from 'react-elastic-carousel';
import imageNotAvailable from '../assets/imageNotAvailable.png';

import {ProductsContext} from '../context/ProductsContext';
import {ProductDetailContext} from '../context/ProductDetailContext';
import Breadcrumbs from './Breadcrumbs';

const ProductDetail = () => {

  const {queryAnswer} = useContext(ProductsContext);
  const {details, setIdProduct} = useContext(ProductDetailContext);
  const history = useHistory();
  const params = useParams();

  const {title,price,pictures,condition,free_shipping,available_quantity,sold_quantity,description} = details;

  const back = e => {
    e.preventDefault();
    history.push(`/items?search=${queryAnswer}`);
  };

  const stringToHtml = () => {
    return {__html: description.replace(/\n/g, '</br>')};
  };

  useEffect(() => {
    setIdProduct(params.id);
    // eslint-disable-next-line
  }, [params]);


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
                <div className="col-12 col-md-8">
                  <Carousel itemsToShow={1}>
                    {
                      (pictures.length === 0)
                        ? <img src={imageNotAvailable} alt="imageNotAvailable" />
                        : pictures.map(picture => {
                          return (
                            <div key={picture.id}>
                              <img src={picture.secure_url} alt={picture.id} width="100%" />
                            </div>
                          );
                        })
                    }
                  </Carousel>
                </div>
                <div className="col-12 col-md-4 mt-4">
                  <small className="small-size light">{condition} - {sold_quantity} vendidos</small>
                  <h1 className="product-detail__title bold">{title}</h1>
                  <h2 className="margin-s2-Y product-detail__price light">{currency(price.amount, {precision: 0, separator: '.'}).format()} <small className="normal-size bold">{price.currency}</small></h2>
                  {
                    (available_quantity === 0)
                      ? null
                      : (
                        <Fragment>
                          <p className="normal-size regular">Stock disponible</p>
                          {
                            (!free_shipping)
                              ? null
                              : (
                                <p className='d-flex align-items-center small-size regular free'>
                                  Envio gratis
                                </p>
                              )
                          }
                          <button type="button" className="btn btn__primary">Comprar Ahora</button>
                        </Fragment>
                      )
                  }
                </div>
                <div className="col-12 col-md-8 my-3 d-flex flex-column">
                  <h3 className="bigger-size bold margin-s1-Y">Descripción</h3>
                  <div className="margin-s1-Y big-size muted">
                    <p dangerouslySetInnerHTML={stringToHtml()} />
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </Fragment>
  );
};

export default ProductDetail;