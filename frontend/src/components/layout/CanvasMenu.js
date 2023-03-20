import React, {Fragment} from 'react'

const CanvasMenu = () => {
  return (
    <Fragment>
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__cart">
          <div className="offcanvas__cart__links">
              <a href="#" className="search-switch"><img src="img/icon/search.png" alt="search" /></a>
              <a href="#"><img src="img/icon/heart.png" alt="heart" /></a>
          </div>
        </div>
        <div className="offcanvas__logo">
          <a href="./index-VI.html"><img src="img/logo.png" alt="logo" /></a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__option">
          <ul>
            <li>VND <span className="arrow_carrot-down"></span>
              <ul>
                <li>EUR</li>
                <li>USD</li>
              </ul>
            </li>
            <li>VN <span className="arrow_carrot-down"></span>
              <ul>
                <li>VN</li>
                <a href="./index.html"><li>EN</li></a>
              </ul>
            </li>
            <li><a href="#">Đăng nhập</a> <span className="arrow_carrot-down"></span></li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default CanvasMenu