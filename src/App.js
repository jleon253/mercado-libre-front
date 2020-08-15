import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';

import ProductsProvider from './context/ProductsContext';

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Header />
        <div className="container">
          <section className="row">
            <Switch>
              <Route path="/items" component={Products} />
            </Switch>
          </section>
        </div>
      </Router>
    </ProductsProvider>
  );
}

export default App;
