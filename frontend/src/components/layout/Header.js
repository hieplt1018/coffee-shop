import React, {Fragment} from 'react'

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12" >
                <div className="header__top__inner">
                  <div className="header__top__left">
                    <ul>
                      <li>USD<span className="arrow_carrot-down"></span>
                        <ul>
                          <li>VND</li>
                          <li>USD</li>
                        </ul>
                      </li>
                      <li>EN<span className="arrow_carrot-down"></span>
                        <ul>
                          <a href="./index-VI.html"><li>VN</li></a>
                          <li>EN</li>
                        </ul>
                      </li>
                        <li><a href="#">Sign in</a> <span className="arrow_carrot-down"></span></li>
                    </ul>
                  </div>
                  <div className="header__logo">
                    <a href="./index.html"><img src="img/logo.png" alt="Cantata logo" /></a>
                  </div>
                  <div className="header__top__right">
                    <div className="header__top__right__links">
                      <a href="#" className="search-switch"><img src="img/icon/search.png" alt="" /></a>
                      <a href="#"><img src="img/icon/heart.png" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
          </div>
        </div>
        <div className="container" >
          <div className="row">
            <div className="col-lg-12">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active"><a href="./index.html" >Home</a></li>
                  <li><a href="./about.html">About</a></li>
                  <li><a href="./menu.html">Menu</a></li>
                  <li><a href="./blog.html">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header