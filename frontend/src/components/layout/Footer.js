import React, {Fragment} from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer set-bg" data-setbg="img/footer-bg.jpg" style={{backgroundImage: 'url(img/footer-bg.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>WORKING HOURS</h6>
                <ul>
                  <li>Monday - Friday: 05:30 am – 10:30 pm</li>
                  <li>Saturday: 5:30 am – 11:00 pm</li>
                  <li>Sunday: 5:30 am – 11:00 pm</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__logo">
                    <a href="#"><img src="img/footer-logo.png" alt="Cantata" /></a>
                </div>
                <p>Always serve the best we have.</p>
                <div >
                  <div id="footericon">
                  <ul>
                    <li>
                      <a href="https://shopee.vn/shop/55494347/" target="_blank" rel="noopener noreferrer">
                          <img src="img/icon/shopee.png" alt="Shopee" />     
                      </a>
                    </li>
                    <li>
                      <a href="https://shopee.vn/shop/55494347/" target="_blank" rel="noopener noreferrer">
                          <img src="img/icon/shopeefood.png" alt="ShopeeFood" />     
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                          <img src="img/icon/grabfood.png" alt="GrabFood" />     
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                          <img src="img/icon/tiki.png" alt="Tiki" />     
                      </a>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__newslatter">
              <div >
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcantatacakecoffee%2F&tabs=timeline&width=400&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              title="facebook-frame-1" width="100%" height="200px" style={{border:'none', overflow:'none'}} scrolling="no" frameborder="0" allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              
              <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcantatacakecoffee&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId" 
              title="facebook-frame-2" width="150" height="46" style={{border:'none', overflow:'none'}} scrolling="no" frameborder="0" allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <p className="copyright__text text-white">
                &copy;<script>document.write(new Date().getFullYear());</script> Cantata Coffee. All rights reserved.
                </p>
              </div>
            </div>
          </div>
    	  </div>
      </footer>
    </Fragment>
  )
}

export default Footer