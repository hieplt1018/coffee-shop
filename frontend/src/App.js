import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"  ;
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import CanvasMenu from "./components/layout/CanvasMenu";
import Menu from "./components/Menu";
import Login from "./components/user/Login";
import { loadUser } from "./actions/userActions";
import store from "./store";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
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
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<NewPassword />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/me/update" element={<UpdateProfile />} />
              <Route path="/password/update" element={<UpdatePassword />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
          <Footer />
        </Fragment>
      </div>  
    </BrowserRouter>
  );
}

export default App;
