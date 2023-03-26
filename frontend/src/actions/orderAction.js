import axios from "axios";
import {
  CREATE_ORDER_REQUEST, 
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS
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
      payload: data.orderData
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message
    });
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};
