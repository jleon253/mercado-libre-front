import React, {Fragment, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import currency from 'currency.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import freeIcon from '../assets/shipping.svg';

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
    // {title, price, sold_quantity, available_quantity, condition, pictures, shipping}
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
                <div className="col-12 col-md-8">
                  {/* Carousel */}
                  <Carousel>
                    {
                      (details.pictures.length === 0)
                        ? <p>Sin imagenes</p>
                        : details.pictures.map(picture => {
                          return (
                            <div className="product-detail__picture">
                              <img src={picture.secure_url} alt={picture.id}/>
                            </div>
                          );
                        })
                    }
                  </Carousel>
                </div>
                <div className="col-12 col-md-4 mt-4">
                  <small className="small-size light">{details.condition} - {details.sold_quantity} vendidos</small>
                  <h1 className="product-detail__title bold">{details.title}</h1>
                  <h2 className="margin-s2-Y product-detail__price light">{currency(details.price, {precision: 0, separator: '.'}).format()}</h2>
                  {
                    (details.available_quantity === 0)
                      ? null
                      : (
                        <Fragment>
                          <p className="normal-size regular">Stock disponible</p>
                          {
                            (!details.shipping.free_shipping)
                              ? null
                              : (
                                <p className='d-flex align-items-center small-size regular free'>
                                  Envio gratis
                                  <img src={freeIcon} alt="Envio gratis icono" className="free__icon" />
                                </p>
                              )
                          }
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