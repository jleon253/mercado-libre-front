import React, {createContext, useState, useEffect} from 'react';

export const ProductDetailContext = createContext();

const ProductDetailProvider = (props) => {

  const [idProduct, setIdProduct] = useState('');
  const [details, setDetails] = useState({});

  useEffect(() => {
    if(idProduct === '') return;
    setDetails({});
    const getAPIDetails = async () => {
      console.log('Llamando API Detalle de Producto...');
      try {
        const url = `http://localhost:4000/api/items/${idProduct}`;
        const answer = await fetch(url);
        const data = await answer.json();
        console.log('API Detalle de Producto Respondio');
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAPIDetails();
  }, [idProduct]);

  return (
    <ProductDetailContext.Provider value={{
      details,
      setIdProduct,
      setDetails
    }}>
      {props.children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailProvider;