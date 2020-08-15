import React from 'react';

const Product = ({product}) => {
  let title, price, free, stateName;
  if(!product) return
  title = product.title;
  price = product.price;
  free = product.shipping.free_shipping;
  stateName = product.seller_address.state.name;
  return (
    <div className="col-12 p-3 product">
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <img src={product.thumbnail} alt={product.title} className="product__img" />
        </div>
        <div className="col-8 product__description">
          <h1 className="big-size light">{title}</h1>
          <h2 className="bigger-size regular">{price}</h2>
          { free ? <p className="small-size regular free">Envio gratis</p> : null }
          <p className="small-size light">{stateName}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;