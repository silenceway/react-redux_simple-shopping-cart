import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

import { About, Store, Cart, NoPage } from './pages';
import { Content, Footer, Header } from './components';
import { setProducts } from './actions/products';
import data from './data/products.json';

import './App.css';

function App({ setProducts }) {
  useEffect(() => {
    setProducts(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Content>
        <Router>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Store} />
            <Route path="/cart" component={
              () => <Cart
              />}
            />
            <Route path="*" component={NoPage} />
          </Switch>
          <Footer />
        </Router>
      </Content>
    </div>
  );
}

export default connect(null, { setProducts })(App);
