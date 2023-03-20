import React from 'react'

const Footer = () => {
  return (
    <footer className="footer set-bg" style={{'--background': "url('img/footer-bg.jpg')"}}>
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                      <h6>Giờ mở cửa</h6>
                      <ul>
                          <li>Thứ 2 - 6: 05:30 am – 10:30 pm</li>
                          <li>Thứ 7: 5:30 am – 11:00 pm</li>
                          <li>Chủ nhật: 5:30 am – 11:00 pm</li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__about">
                      <div className="footer__logo">
                          <a href="#"><img src="img/footer-logo.png" alt="Cantata" /></a>
                      </div>
                      <p>Luôn phục vụ những thứ tốt nhất</p>

                      <div className="footer__social">
                          <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#"><i className="fa fa-twitter"></i></a>
                          <a href="https://www.instagram.com/cantatacoffee_/?fbclid=IwAR3zCP6iq_7_Ym1l2wqa5k7TEYxdfWR1SYPMCf08OZoMn0bAxZ0jmv6H9AE" 
                          target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="#"><i className="fa fa-youtube-play"></i></a>
                      </div>

                      <div id="footericon">
                          <ul>
                              <li>
                                  <a href="https://shopee.vn/shop/55494347/" target="_blank" rel="noopener noreferrer">
                                    <img src="img/icon/shopee.png" alt="shopee" />     
                                  </a>
                              </li>
                              <li>
                                  <a href="https://shopee.vn/shop/55494347/" target="_blank" rel="noopener noreferrer">
                                    <img src="img/icon/shopeefood.png" alt="shopeefood" />     
                                  </a>
                              </li>
                              <li>
                                  <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="img/icon/grabfood.png" alt="grabfood"/>     
                                  </a>
                              </li>
                              <li>
                                  <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="img/icon/tiki.png" alt="tiki" />     
                                  </a>
                              </li>
                          </ul>
                          </div>

                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__newslatter">
                      <h6>Theo dõi</h6>
                      <p>Cập nhật mới nhất</p>
                      <form action="#">
                          <input type="text" placeholder="Email" />
                          <button type="submit"><i className="fa fa-send-o"></i></button>
                      </form>

                      <div >
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcantatacakecoffee%2F&tabs=timeline&width=400&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  title="fb-iframe-1" width="100%" height="200px" style={{border:'none', overflow:'none'}} scrolling="no" frameborder="0" allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                  
                  <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcantatacakecoffee&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId"
                  title="fb-iframe-2" width="150" height="46" style={{border:'none', overflow:'none'}} scrolling="no" frameborder="0" allowfullscreen="true" 
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
                        &copy;<script>document.write(new Date().getFullYear());</script> Cantata Coffee. Tất cả các quyền được bảo lưu.
                    </p>
                  </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer