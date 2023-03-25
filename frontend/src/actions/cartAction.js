import { ADD_TO_CART } from "../constants/cartConstants";
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
