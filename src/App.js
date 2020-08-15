import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

import ProductsProvider from './context/ProductsContext';

function App() {
  return (
    <ProductsProvider>
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
    </ProductsProvider>
  );
}

export default App;
