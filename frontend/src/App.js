import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'  ;
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import CanvasMenu from './components/layout/CanvasMenu';
import { PreLoader } from './components/common/PreLoader';
import Menu from './components/Menu';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, []);

  return (
    <BrowserRouter >
      <div className="App">
      {
        loading ? ( <PreLoader />  ): (
        <Fragment>
          <CanvasMenu /> 
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/products' element={<Menu />} />
            <Route path='/search/:keyword' element={<Menu />} />
          </Routes>
          <Footer />
        </Fragment>
        )
      }
      </div>  
    </BrowserRouter>
  );
}

export default App;
