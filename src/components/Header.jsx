import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';

import logo from '../assets/mercado-libre-logo.svg';
import iconSearch from '../assets/search.svg';

const Header = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

	const getValueInput = (e) => {
		setQuery(e.target.value);
	};

	const handlerSubmit = (e) => {
    e.preventDefault();
    history.push(`/items?search=${query}`);
	};

	return (
		<header className='header py-3'>
			<div className='container'>
				<div className='row px-sm-1'>
					<div className='col-3 col-md-2 px-sm-1 d-flex'>
						<Link to="/" className='header__logo'>
              <img src={logo} alt='Mercado Libre Logo' />
            </Link>
					</div>
					<div className='col-9 col-md-10 px-sm-1'>
						<form onSubmit={handlerSubmit}>
							<div className='search d-flex'>
								<input
									id='search-input'
									name='search-input'
									className='search__input'
									placeholder='Nunca dejes de buscar'
									onChange={getValueInput}
								/>
								<button
									type='submit'
									className='d-flex justify-content-center align-items-center search__button'>
									<img
										src={iconSearch}
										alt='Search icon'
										className='search__icon'
									/>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
