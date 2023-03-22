import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProducts } from '../../actions/productActions';

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();

    if(keyword.trim()) {
      history.pushState(null, '', `/search/${keyword}`);
    } else {
      history.pushState(null, '', `/products`);
    }
  };

  useEffect(() => {
    dispatch(getProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <Fragment>
      <div className="col-lg-7 col-md-7">
        <div className="shop__option__search">
          <form onSubmit={searchHandler}>
            <select>
              <option value>Categories</option>
              <option value>Cake</option>
              <option value>Coffee Drink</option>
              <option value>Coffee Bean</option>
              <option value>Machine</option>
            </select>
            <input 
              type="text" 
              placeholder="Search"
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <button type="submit"><i className="fa fa-search" /></button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Search