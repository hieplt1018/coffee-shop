import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addItemToCart } from '../../actions/cartAction';


const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (id, quantity) => {
    dispatch(addItemToCart(id, quantity));
    toast.success('Đã thêm sản phẩm vào giỏ hàng', {
      theme: "colored"
    });
  }

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="product__item">
        <div className="product__item__pic">
          <Link to={`/product/${product._id}`}>
            <img className='product__item__pic set-bg' src={product.images[0].url} alt="product-4" />
          </Link>
          <div className="product__label">
            <span>{product.category}</span>
          </div>
        </div>
        <div className="product__item__text">
          <h6><Link to={`/product/${product._id}`}>{product.name}</Link></h6>
          <div className="product__item__price">{new Intl.NumberFormat().format(product.price)} &#8363;</div>
          <div className="cart_add">
            <Link onClick={() => addToCart(product._id, 1)}>Thêm vào giỏ hàng</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Product;
