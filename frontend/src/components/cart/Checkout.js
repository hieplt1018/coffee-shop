import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { saveShippingInfo } from '../../actions/cartAction';
import MetaData from '../layout/MetaData';
import { PreLoader } from '../layout/PreLoader';
import { createOrder } from '../../actions/orderAction';

const Checkout = () => {
  const { cartItems } = useSelector(state => state.cart);
  const { user, loading } = useSelector(state => state.auth);
  const [address, setAddress] = useState();
  const [telNum, setTelNum] = useState();
  const [methodChecked, setMethodChecked] = useState("Cash");
  const [totalItemsPrice, setTotalItemsPrice] = useState();
  const [totalOrder, setTotalOrder] = useState();
  const [name, setName] = useState();

  if(user) {
    setAddress(user.shippingInfo.address); 
    setTelNum(user.shippingInfo.telNum);
    setName(user.name);
  }

  const paymentMethods = [
    { label: "COD (Thanh toán khi nhận hàng)", value: "COD"},
    { label: "Chuyển khoản", value: "Banking"},
    { label: "Tiền mặt", value: "Cash"}
  ]
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();

    setTotalItemsPrice(cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0));
    setTotalOrder(totalItemsPrice);

    const orderData = {
      shippingInfo: {
        address: address,
        telNum: telNum
      },
      orderItems: cartItems,
      paymentMethod: methodChecked,
      totalItemPrice: totalItemsPrice,
      totalOrder: totalOrder,
      seller: user._id,
      customer: name
    }
    console.log(orderData);
    dispatch(saveShippingInfo({ address, telNum }));
    dispatch(createOrder(orderData));
    navigate('/orders/me');
  }
  const handleChangeCheckbox = (e) => {
    setMethodChecked(e.target.value);
  }

  const handleChangeTelNum = (e) => {
    if(e.target.value.match('/(0[3|5|7|8|9])+([0-9]{8})\b/g') != null) {
      setTelNum(e.target.value);
    }
  }

  return (
    <Fragment>
      <MetaData title='Thanh toán' />
      {
        loading ? (<PreLoader />) : (
          <div>
            <div className="breadcrumb-option">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="breadcrumb__text">
                      <h2>Thanh toán</h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="breadcrumb__links">
                      <a href="./index.html">Trang chủ</a>
                      <span>Thanh toán</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="checkout spad">
              <div className="container">
                <div className="checkout__form">
                  <form onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-lg-8 col-md-6">
                        <h6 className="checkout__title">Chi tiết hóa đơn</h6>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="checkout__input">
                              <p>Họ tên <span>*</span></p>
                              <input 
                                type="text" 
                                placeholder="" 
                                className="checkout__input__add" 
                                name="address"
                                required
                                maxLength="300"
                                minLength="0"
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                id="address" 
                              />
                            </div>
                          </div>
                        </div>
                        <div className="checkout__input">
                          <p>Địa chỉ<span>*</span></p>
                          <input 
                            type="text" 
                            placeholder="Tên đường, số nhà, ..." 
                            className="checkout__input__add" 
                            name="address"
                            required
                            maxLength="300"
                            minLength="0"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} 
                            id="address" 
                            />
                        </div>
                        <div className="checkout__input">
                          <p>Số điện thoại<span>*</span></p>
                          <input 
                            type="text" 
                            className="checkout__input__add" 
                            name="telNum"
                            required
                            maxLength="11"
                            minLength="0"
                            value={telNum}
                            onChange={handleChangeTelNum} 
                            id="telnum" 
                            />
                          
                        </div>
                        <div className="checkout__input__checkbox">
                          <label htmlFor="acc">
                          Bạn có muốn tạo một tài khoản để nhận khuyến mãi dành riêng cho thành viên? 
                            <input type="checkbox" id="acc" />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <div className="checkout__input">
                          <p>Order notes<span>*</span></p>
                          <input type="text" placeholder="Lưu ý về đơn đặt hàng của bạn" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="checkout__order">
                          <h6 className="order__title">Đơn hàng của bạn</h6>
                          <div className="checkout__order__products">Sản phẩm <span>Tổng giá</span></div>
                          <ul className="checkout__total__products">
                            {cartItems.map((item, index) => (
                              <li key={item.product}><samp>{'0' + (index + 1)}. </samp>{item.name} 
                              <span>{new Intl.NumberFormat().format(item.price * item.quantity)} &#8363;</span></li> 
                            ))}
                          </ul>
                          <ul className="checkout__total__all">
                            <li id="subtotal">Phí giao hàng<span>{new Intl.NumberFormat().format(0)} &#8363; </span></li>
                            <li id="total">Tổng thanh toán <span>{new Intl.NumberFormat().format(cartItems
                              .reduce((acc, item) => acc + item.quantity * item.price, 0))} &#8363;</span></li>
                          </ul>
                          {paymentMethods.map((item) => (
                            <div key={item.value} className="checkout__input__checkbox">
                              <label htmlFor={item.value}>
                                {item.label}
                                <input type="checkbox" 
                                  name="paymentMethod"
                                  id={item.value}
                                  value={item.value} 
                                  onChange={(e) => handleChangeCheckbox(e)}
                                  checked={methodChecked === item.value}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                          ))}
                          <button type="submit" className="site-btn">ĐẶT HÀNG</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        )
      }
    </Fragment>
  )
}

export default Checkout