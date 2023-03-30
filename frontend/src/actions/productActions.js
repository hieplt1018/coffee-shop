import axios from 'axios';

import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_REQUEST,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  NEW_PRODUCTS_REQUEST,
  NEW_PRODUCTS_SUCCESS,
  NEW_PRODUCTS_FAIL,
} from '../constants/productConstants'

export const getProducts = (keyword=' ', currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    const { data } = await axios.get(`/api/v1/products?page=${currentPage}&keyword=${keyword}`);

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message
    });
  }
};

export const getAdminProducts = (keyword=' ', currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/products?page=${currentPage}&keyword=${keyword}`);

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message
    });
  }
};

export const newProduct = (productData) => async(dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCTS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`/api/v1/admin/product/new`, productData, config);

    dispatch({
      type: NEW_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: NEW_PRODUCTS_FAIL,
      payload: error.response.data.message
    })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
};
