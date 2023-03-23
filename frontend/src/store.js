import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productsReducer } from './reducers/productReducer';
import { usersReducer } from './reducers/userReducer';

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  users: usersReducer
});

let initialState = {};

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;
