import axios from "axios";
import {
  CREATE_ORDER_REQUEST, 
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL
} from '../constants/orderConstant'

export const createOrder = (orderData) => async(dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/v1/order/new', orderData, config);

    dispatch({ 
      type: CREATE_ORDER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message
    });
  }
}

export const myOrders = () => async(dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });

    const { data } = await axios.get('/api/v1/orders/me');
    
    dispatch({ 
      type: MY_ORDERS_SUCCESS,
      payload: data.orders
    });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message
    });
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};
