import React, { Fragment, useState, useEffect } from 'react'
import MetaData from './layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import Product from './product/Product';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import { PreLoader } from './layout/PreLoader';
import Search from './common/Search';
import { useParams } from 'react-router-dom';


const Menu = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products);
  const { keyword } = useParams();

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage));
    if(error) {
      alert.error(error);
    };
  }, [dispatch, alert, error, keyword, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  };
  
  return (
    <Fragment>
      <MetaData title={'Thực đơn'} />
      {
        loading ? (<PreLoader />) : (
        <Fragment>
          <div className="breadcrumb-option">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="breadcrumb__text">
                    <h2>Thực đơn</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="breadcrumb__links">
                    <a href="./index.html">Trang chủ</a>
                    <span>Thực đơn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="shop spad">
            <div className="container">
              <Search />
              <div className='row'>
                {products && products.map(product => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
              {resPerPage <= productsCount && (
                <div className="shop__last__option">
                  <div className="row">
                    <div className="d-flex justify-content-center mt-5">
                      <div className="shop__pagination">
                        <Pagination 
                          activePage={currentPage}
                          itemsCountPerPage={resPerPage}
                          totalItemsCount={productsCount}
                          onChange={setCurrentPageNo}
                          nextPageText={'>'}
                          prevPageText={'<'}
                          firstPageText={'<<'}
                          lastPageText={'>>'}
                          itemClass='page-item'
                          linkClass='page-link'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </Fragment>
        )
      }
    </Fragment>
  )
}

export default Menu
