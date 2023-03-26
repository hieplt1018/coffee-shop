import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from "../constants/cartConstants";
import axios from "axios";

export const addItemToCart = (id, quantity) => async(dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      description: data.product.description,
      image: data.product.images[0].url,
      stock: data.product.stock,
      category: data.product.category,
      quantity
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemToCart = (id) => async(dispatch, getState) => {
  await axios.get(`/api/v1/product/${id}`);
  
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: id
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingInfo = (data) => async(dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data
  });

  localStorage.setItem('shippingInfo', JSON.stringify(data))
}
