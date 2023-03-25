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
  REGISTER_USER_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL
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
    
    const { data } = await axios.get('/api/v1/me');
    
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message
    });
    dispatch({ type: CLEAR_ERRORS });
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

export const updateProfile = (name, email) => async(dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const { data } = await axios.put('/api/v1/me/update', { name, email } , config);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message
    })
  }
}

export const updatePassword = (oldPassword, password) => async(dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const { data } = await axios.put('/api/v1/password/update', { oldPassword, password } , config);

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message
    })
  }
}

export const forgotPassword = (email) => async(dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const { data } = await axios.post('/api/v1/password/forgot', { email } , config);

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message
    })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};