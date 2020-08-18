import React, {Fragment} from 'react';
import currency from 'currency.js';
import freeIcon from '../assets/shipping.svg';
import PropTypes from 'prop-types';

const Product = ({product}) => {
  let {id, title, price, picture, condition, free_shipping, seller_city} = product;
  if(!id) return;
	return (
		<Fragment>
			<div className='row'>
				<div className='col-4 d-flex justify-content-center align-items-center'>
					<img
						src={picture}
						alt={title}
						className='product__img'
					/>
				</div>
				<div className='col-8 product__description'>
					<h1 className='big-size light'>{title}</h1>
					<h2 className='bigger-size regular'>{currency(price.amount,{ precision: 0, separator: '.' }).format()} {price.currency}</h2>
					{free_shipping ? (
            <p className='d-flex align-items-center small-size regular free'>
              Envio gratis
              <img src={freeIcon} alt="Envio gratis icono" className="free__icon" />
            </p>
					) : null}
					<p className='small-size light'>{condition}</p>
					<p className='small-size light'>{seller_city}</p>
				</div>
			</div>
		</Fragment>
	)
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product
