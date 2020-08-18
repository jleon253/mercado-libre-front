import React, {createContext, useState, useEffect} from 'react'

export const ProductsContext = createContext();

const ProductsProvider = (props) => {

  const [queryProduct, setQueryProduct] = useState('');
  const [queryAnswer, setQueryAnswer] = useState('');
  const [paging, setPaging] = useState(null);
  const [productsList, setProductsList] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if(queryProduct === '') return;
    setProductsList([]);
    setQueryAnswer('');
    setBreadcrumbs([]);
    setPaging(null);
    const getAPIProducts = async () => {
      console.log('Llamando API Lista de Productos...');
      try {
        const url = `${process.env.REACT_APP_SERVER_URL}/api/items?q=${queryProduct}`;
        const answer = await fetch(url);
        const data = await answer.json();
        console.log('API Lista de Productos Respondio');
        setQueryAnswer(data.query);
        setProductsList(data.items);
        setBreadcrumbs(data.categories);
        setPaging(data.items.length);
      } catch (error) {
        console.error(error);
      }
    };
    getAPIProducts();
  }, [queryProduct]);

  return (
    <ProductsContext.Provider value={{
      queryAnswer,
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