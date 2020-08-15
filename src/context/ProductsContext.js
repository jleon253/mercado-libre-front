import React, {createContext, useState, useEffect} from 'react'

export const ProductsContext = createContext();

const ProductsProvider = (props) => {

  const [queryProduct, setQueryProduct] = useState('');
  const [paging, setPaging] = useState(null);
  const [productsList, setProductsList] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if(queryProduct === '') return
    const getAPIProducts = async () => {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=${queryProduct}`
      const answer = await fetch(url)
      const data = await answer.json()
      setProductsList(data.results)
      setBreadcrumbs(data.filters)
      setPaging(data.paging.total)
    }
    getAPIProducts()
  }, [queryProduct]);

  return (
    <ProductsContext.Provider value={{
      queryProduct,
      paging,
      productsList,
      breadcrumbs,
      setQueryProduct
    }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;