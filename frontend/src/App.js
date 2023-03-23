import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'  ;
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import CanvasMenu from './components/layout/CanvasMenu';
import Menu from './components/Menu';
import Register from './components/user/Register';
import Login from './components/user/Login';

function App() {
  const auth = window.location.href.split('/');
  let paths = '';

  if (auth.includes('register')) {
    paths = (
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    );
  } else if (auth.includes('login')) {
    paths = (
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    );
    
  } else {
    paths = (
      <Fragment>
        <CanvasMenu /> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/search/:keyword" element={<Menu />} /> 
          <Route exact path='/product/:id' element={<ProductDetails />} />
          <Route exact path='/products' element={<Menu />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }

  return (
    <BrowserRouter >
      <div className="App">
        {paths}
      </div>  
    </BrowserRouter>
  );
}

export default App;
