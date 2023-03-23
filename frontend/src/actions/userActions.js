import axios from 'axios';
import { 
  LOGIN_USER_FAIL, 
  LOGIN_USER_REQUEST, 
  LOGIN_USER_SUCCESS, 
  CLEAR_ERRORS, 
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../constants/userConstants';

export const login = (email, password) => async(dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/v1/login', { email, password }, config);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message
    })
  }
}

export const register = (name, email, password) => async(dispatch) => {
  console.log('register')
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const { data } = await axios.post('/api/v1/register', { name, email, password } , config);

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

export const loadUser = () => async(dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST});

    const { data } = await axios.get('api/v1/me');

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message
    })
  }
}

export const logout = () => async(dispatch) => {
  try {
    await axios.get('/api/v1/logout');

    dispatch({
      type: LOG_OUT_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: LOG_OUT_FAIL,
      payload: error.response.data.message
    })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};