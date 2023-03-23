import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'  ;
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import CanvasMenu from './components/layout/CanvasMenu';
import Menu from './components/Menu';
import Login from './components/user/Login';
import { clearErrors, loadUser } from './actions/userActions';
import store from './store';
import Register from './components/user/Register';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(loadUser());
    dispatch(clearErrors());
  });
  
  return (
    <BrowserRouter >
      <div className="App">
        <Fragment>
          <CanvasMenu /> 
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/search/:keyword" element={<Menu />} /> 
            <Route exact path='/product/:id' element={<ProductDetails />} />
            <Route exact path='/products' element={<Menu />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </Fragment>
      </div>  
    </BrowserRouter>
  );
}

export default App;
