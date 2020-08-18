import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

import ProductsProvider from './context/ProductsContext';
import ProductDetailProvider from './context/ProductDetailContext';

function App() {
  console.log('Conectado a:',process.env.REACT_APP_SERVER_URL);
  return (
    <ProductsProvider>
      <ProductDetailProvider>
      <Router>
        <Header />
        <div className="container">
          <section className="row">
            <Switch>
              <Route exact path="/items" component={Products} />
              <Route exact path="/items/:id" component={ProductDetail} />
            </Switch>
          </section>
        </div>
        </Router>
      </ProductDetailProvider>
    </ProductsProvider>
  );
}

export default App;
