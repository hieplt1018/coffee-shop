import React, { Fragment, useEffect } from 'react'
import { getProductDetails, clearErrors } from '../../actions/productActions';
import MetaData from '../layout/MetaData'
import { PreLoader } from '../layout/PreLoader'
import { Link, useParams } from 'react-router-dom';
import { truncate } from '../../helpers/string_helpers';
import { useDispatch, useSelector } from 'react-redux';
import ProductImages from './ProductImages';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product, error } = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(id));
    if(error) {
      toast.error(error, {
        theme: "colored"
      });
      dispatch(clearErrors());
    };
  }, [dispatch, alert, error, id]);

  return (
    <Fragment>
      <MetaData title={'Chi tiết sản phẩm'} />
      {
        loading ? (<PreLoader />) : (
          <Fragment>
            <div className="breadcrumb-option">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="breadcrumb__text">
                      <h2>Thông tin sản phẩm</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="breadcrumb__links">
                      <Link to="./index.html">Trang chủ</Link>
                      <Link to="./shop.html">Thực đơn</Link>
                      <span>{product.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="product-details spad">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product__details__img">
                      <div className="product__details__big__img">
                        <img className="big_img" src={product.images && product.images[0].url } alt="" />
                      </div>
                      <div className="product__details__thumb">
                        {product.images && product.images.slice(1,6).map(image => (
                          <ProductImages key={image._id} image={image} />
                        ))}
                      </div>  
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product__details__text">
                      <div className="product__label">{product.category}</div>
                      <h4>{product.name}</h4>
                      <h5>{new Intl.NumberFormat().format(product.price)} &#8363;</h5>
                      <p>{product.description && truncate(product.description, 200)}</p>
                      <ul>
                        <li>Số lượng còn lại: <span>{new Intl.NumberFormat("de-DE").format(product.stock)}</span></li>
                        <li>Danh mục: <span>{product.category}</span></li>
                        <li>Nhà cung cấp: <span>{product.supplier}</span></li>
                      </ul>
                      <div className="product__details__option">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" defaultValue={1} />
                          </div>
                        </div>
                        <Link to="#" className="primary-btn">Thêm vào giỏ hàng</Link>
                        <Link to="#" className="heart__btn"><span className="icon_heart_alt" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__details__tab">
                  <div className="col-lg-12">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <Link className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Mô tả</Link>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tabs-1" role="tabpanel">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-8">
                            <p>{product.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="related-products spad">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="section-title">
                      <h2>Sản phẩm khác</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="related__products__slider owl-carousel">
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        )
      }
    </Fragment>
  )
}

export default ProductDetails
