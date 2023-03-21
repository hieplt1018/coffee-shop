import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="product__item">
        <div className="product__item__pic">
          <Link to="#">
            <img src="https://i.ibb.co/3CHfwN0/product-4.jpg" alt="product-4" />
          </Link>
          <div className="product__label">
            <span>{product.category}</span>
          </div>
        </div>
        <div className="product__item__text">
          <h6><Link href={`/product/${product._id}`}>{product.name}</Link></h6>
          <div className="product__item__price">{product.price}</div>
          <div className="cart_add">
            <Link href="#">Thêm vào giỏ hàng</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Product;
