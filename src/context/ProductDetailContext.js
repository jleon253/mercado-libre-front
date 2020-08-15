import React, {createContext, useState, useEffect} from 'react';

export const ProductDetailContext = createContext();

const ProductDetailProvider = (props) => {

  const [idProduct, setIdProduct] = useState('');
  const [details, setDetails] = useState({});

  useEffect(() => {
    if(idProduct === '') return;
    const getAPIDetails = async () => {
      console.log('Llamando API Detalle de Producto...');
      const url = `https://api.mercadolibre.com/items/${idProduct}`;
      const answer = await fetch(url);
      const data = await answer.json();
      console.log(data);
      let {title, price, sold_quantity, available_quantity, condition, pictures} = data;
      setDetails({title, price, sold_quantity, available_quantity, condition, pictures});
    };
    getAPIDetails();
  }, [idProduct]);

  return (
    <ProductDetailContext.Provider value={{
      details,
      setIdProduct
    }}>
      {props.children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailProvider;