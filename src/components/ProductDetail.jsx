import React, {Fragment, useEffect, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import currency from 'currency.js';
import Carousel from 'react-elastic-carousel';
import freeIcon from '../assets/shipping.svg';
import imageNotAvailable from '../assets/imageNotAvailable.png';

import {ProductDetailContext} from '../context/ProductDetailContext';
import Breadcrumbs from './Breadcrumbs';

const ProductDetail = () => {

  const {details, description, setIdProduct} = useContext(ProductDetailContext);
  const history = useHistory();
  const params = useParams();

  const back = e => {
    e.preventDefault();
    history.goBack();
  };

  const stringToHtml = () => {
    return {__html: description.replace(/\n/g, '</br>')};
  };

  useEffect(() => {
    setIdProduct(params.id);
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
                      (details.pictures.length === 0)
                        ? <img src={imageNotAvailable} alt="imageNotAvailable" />
                        : details.pictures.map(picture => {
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