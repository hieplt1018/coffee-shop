import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [keyword, setKeyword] = useState();
  let history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/search/${keyword}`);
    } else {
      history('/');
    }
  };
  console.log(history);
  return (
    <Fragment>
      <div className="shop__option">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="shop__option__search">
              <form onSubmit={submitHandler} >
                <input 
                  type="text" 
                  value={
                    window.location.href.split('/').includes('products') ?
                      'Search' : window.location.href.split('/').pop() }
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit"><i className="fa fa-search" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Search
