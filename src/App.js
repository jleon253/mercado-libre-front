import React from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Products from './components/Products';

import ProductsProvider from './context/ProductsContext';

function App() {
  return (
    <ProductsProvider>
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-12 my-3">
            <Breadcrumbs />
          </div>
        </div>
      </section>
      <Products />
    </ProductsProvider>
  );
}

export default App;
