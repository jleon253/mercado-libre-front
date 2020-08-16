import React, {createContext, useState, useEffect} from 'react';

export const ProductDetailContext = createContext();

const ProductDetailProvider = (props) => {

  const [idProduct, setIdProduct] = useState('');
  const [details, setDetails] = useState({});
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(idProduct === '') return;
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
      console.log('dataDetail',dataDetail);
      console.log('dataDescription',dataDescription);

      let {title, price, sold_quantity, available_quantity, condition, pictures, shipping} = dataDetail;
      setDetails({title, price, sold_quantity, available_quantity, condition, pictures, shipping});
      setDescription(dataDescription.plain_text);
    };
    getAPIDetails();
  }, [idProduct]);

  return (
    <ProductDetailContext.Provider value={{
      details,
      description,
      setIdProduct
    }}>
      {props.children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailProvider;