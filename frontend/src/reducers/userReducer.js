import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL,
  ALL_USERS_REQUETS,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_RESET,
  DELETE_USERS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL
} from "../constants/userConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch(action.type) {
    case LOGIN_USER_REQUEST:
    case LOAD_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      }
    case LOGIN_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state, 
        loading: false,
        isAuthenticated: true,
        user: action.payload
      }
    case LOG_OUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null
      }
    case LOG_OUT_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload
      }
    case LOGIN_USER_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }

    default:
      return state; 
  }
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
    case DELETE_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload
      }
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload
      }
    case UPDATE_PROFILE_RESET:
    case UPDATE_PASSWORD_RESET:
      return {
        ...state,
        isUpdated: false
      }
    case DELETE_USERS_RESET:
      return {
        ...state,
        isDeleted: false
      }
    case UPDATE_PROFILE_FAIL:
    case UPDATE_PASSWORD_FAIL:
    case DELETE_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case NEW_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload
      }
    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload
      }
    case FORGOT_PASSWORD_FAIL:
    case NEW_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export const usersReducer = (state = { users: [] }, action) => {
  switch(action.type) {
    case ALL_USERS_REQUETS:
      return {
        loading: true,
        users: []
      }
    case ALL_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        usersCount: action.payload.usersCount,
        resPerPage: action.payload.resPerPage
      }
    case ALL_USERS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { account: {} }, action) => {
  switch(action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        account: action.payload
      }
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    
    default:
      return state;
  }
};
