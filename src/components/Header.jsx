import React, { useState, useContext } from 'react'

import { ProductsContext } from '../context/ProductsContext'

import logo from '../assets/mercado-libre-logo.svg'
import iconSearch from '../assets/search.svg'

const Header = () => {
	const { setQueryProduct } = useContext(ProductsContext)

	const [query, setQuery] = useState('')

	const getValueInput = (e) => {
		console.log(e.target.value)
		setQuery(e.target.value)
	}

	const handlerSubmit = (e) => {
    e.preventDefault()
    setQueryProduct(query)
	}

	return (
		<header className='header py-3'>
			<div className='container'>
				<div className='row px-sm-1'>
					<div className='col-2 px-sm-1 d-flex'>
						<img src={logo} alt='Mercado Libre Logo' className='header__logo' />
					</div>
					<div className='col-10 px-sm-1'>
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
