import React, {Fragment} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const ProductDetail = () => {
  const history = useHistory();
  const params = useParams();
  console.log(params);

  const back = e => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Fragment>
      <div className="col-12 col-sm-2 my-3 d-flex align-items-center">
        <a href="!#" className="small-size" onClick={(e) => back(e)}>Volver al listado</a>
      </div>
      <div className="col-12 col-sm-10 my-3">
        <Breadcrumbs />
      </div>
      <div className="col-12 my-3">
        <div className="product-detail p-3">
          Detalle del producto {params.id}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;