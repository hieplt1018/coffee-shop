import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'  ;
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import CanvasMenu from './components/layout/CanvasMenu';
import Menu from './components/Menu';
import Login from './components/user/Login';
import { loadUser } from './actions/userActions';
import store from './store';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  
  return (
    <BrowserRouter >
      <div className='App'>
        <Fragment>
          <CanvasMenu /> 
          <Header />
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/search/:keyword' element={<Menu />} /> 
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/products' element={<Menu />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/me' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path='/me/update' element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            } />
          </Routes>
          <Footer />
        </Fragment>
      </div>  
    </BrowserRouter>
  );
}

export default App;
