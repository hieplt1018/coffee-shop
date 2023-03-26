import { CLEAR_ERRORS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, CREATE_ORDER_SUCCESS } from "../constants/orderConstant"

export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        isCreated: false,
        loading: true
      }
    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        isCreated: true,
        order: action.payload
      }
    case CREATE_ORDER_FAIL:
      return {
        loading: false,
        isCreated: false,
        error: action.payload
      }
    case CREATE_ORDER_RESET:
      return {
        ...state,
        isCreated: false
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
