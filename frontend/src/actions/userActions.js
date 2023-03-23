import axios from 'axios';
import { 
  REGISTER_USER_FAIL, 
  REGISTER_USER_REQUEST, 
  REGISTER_USER_SUCCESS, 
  CLEAR_ERRORS 
} from '../constants/userConstants';

export const register = (userData) => async(dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } = await axios.post('/api/v1/register', userData, config);
    
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message
    })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};
