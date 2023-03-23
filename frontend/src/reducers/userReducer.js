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
  REGISTER_USER_FAIL
} from "../constants/userConstants";

export const authReducer = (state = { user: {}}, action) => {
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
