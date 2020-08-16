import React, {createContext, useState, useEffect} from 'react';

export const ProductDetailContext = createContext();

const ProductDetailProvider = (props) => {

  const [idProduct, setIdProduct] = useState('');
  const [details, setDetails] = useState({});
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(idProduct === '') return;
    setDetails({});
    const getAPIDetails = async () => {
      console.log('Llamando API Detalle de Producto...');
      const url1 = `https://api.mercadolibre.com/items/${idProduct}`;
      const url2 = `https://api.mercadolibre.com/items/${idProduct}/description`;
      const promises = [fetch(url1), fetch(url2)];
      const [resDetail, resDescription] = await Promise
        .all(promises)
        .then(responses => responses )
        .catch(err => console.error(err));
      const dataDetail = await resDetail.json().then(data => data);
      const dataDescription = await resDescription.json().then(data => data);

      setDetails(dataDetail);
      setDescription(dataDescription.plain_text);
    };
    getAPIDetails();
  }, [idProduct]);

  return (
    <ProductDetailContext.Provider value={{
      details,
      description,
      setIdProduct,
      setDetails
    }}>
      {props.children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailProvider;