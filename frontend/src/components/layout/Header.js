import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header__top__inner">
                <div className="header__top__left">
                  <ul>
                    <li>VND<span className="arrow_carrot-down"></span>
                      <ul>
                        <li>VND</li>
                        <li>USD</li>
                      </ul>
                    </li>
                    <li>VN<span className="arrow_carrot-down"></span>
                      <ul>
                        <li>VN</li>
                        <a href="./index.html">
                          <li>EN</li>
                        </a>
                      </ul>
                    </li>
                    <li><Link to="#">Đăng nhập</Link> <span className="arrow_carrot-down"></span></li>
                  </ul>
                </div>
                <div className="header__logo">
                  <Link to="./index.html"><img src="https://i.ibb.co/T4zW2Qm/logo.png" alt="logo" /></Link>
                </div>
                <div className="header__top__right">
                  <div className="header__top__right__links">
                    <Link to="#" className="search-switch"><img src="https://i.ibb.co/2SK2sbX/search.png" alt="search" /></Link>
                    <Link to="#"><img src="https://i.ibb.co/DfVcbFT/heart.png" alt="heart" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className="active"><a href="./index.html">Trang chủ</a></li>
                <li><a href="./about.html">Giới thiệu</a></li>
                <li><a href="./menu_vi.html">Thực đơn</a></li>
                <li><a href="./blog.html">Tin tức</a></li>
                <li><a href="./contact.html">Liên hệ</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header