import React, {Fragment} from 'react';
import currency from 'currency.js';
import freeIcon from '../assets/shipping.svg';

const Product = ({ product }) => {
  let title, price, free, stateName;
  if(!product) return;
  title = product.title;
  price = product.price;
  free = product.shipping.free_shipping;
  stateName = product.seller_address.state.name;
	return (
		<Fragment>
			<div className='row'>
				<div className='col-4 d-flex justify-content-center align-items-center'>
					<img
						src={product.thumbnail}
						alt={product.title}
						className='product__img'
					/>
				</div>
				<div className='col-8 product__description'>
					<h1 className='big-size light'>{title}</h1>
					<h2 className='bigger-size regular'>{currency(price,{ precision: 0, separator: '.' }).format()}</h2>
					{free ? (
            <p className='d-flex align-items-center small-size regular free'>
              Envio gratis
              <img src={freeIcon} alt="Envio gratis icono" className="free__icon" />
            </p>
					) : null}
					<p className='small-size light'>{stateName}</p>
				</div>
			</div>
		</Fragment>
	)
}

export default Product
