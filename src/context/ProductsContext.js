import React, {createContext, useState, useEffect} from 'react'

export const ProductsContext = createContext();

const ProductsProvider = (props) => {

  const [queryProduct, setQueryProduct] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if(queryProduct === '') return
    console.log('valor:', queryProduct);
    const getAPIProducts = async () => {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=${queryProduct}`
      const answer = await fetch(url)
      const data = await answer.json()
      console.log('Result API', data.results)
      setProductsList(data.results)
      setBreadcrumbs(data.filters)
    }
    getAPIProducts()
  }, [queryProduct]);

  return (
    <ProductsContext.Provider value={{
      queryProduct,
      productsList,
      breadcrumbs,
      setQueryProduct
    }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;