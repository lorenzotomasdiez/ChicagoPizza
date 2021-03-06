import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';
import Products from './components/Products'
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your menu' data={productData}/>
      <Feature/>
      <Footer/>
    </Router>
  );
}

export default App;
