import React, { Fragment, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MetaData from './layout/MetaData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import Product from './product/Product';

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title={'Home'} />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="img/hero/hero-1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="img/hero/hero-2.jpg" alt="Second slide" />
        </Carousel.Item>
      </Carousel>

      <section className="about spad">
        <div className="container">
          <div className="">
            <div className="about__text">
              <div className="section-title">
                <span>Về Cantata Coffee</span>
                <h2>Chúng tôi tin vào</h2>
              </div>
              <p> &ldquo;<b><i>Cantata Coffee</i></b>&rdquo; được lấy cảm hứng từ Coffee Cantata - BWV211 của nhà soạn nhạc vĩ đại Johann Sebastian Bach. Chúng tôi tin vào tình yêu, tuổi trẻ, sự nhiệt huyết và các chuẩn mực. Bởi qua thời gian, mọi thứ sẽ biến mất, chỉ có những giá trị thực mới trường tồn cùng thời gian. Giống âm nhạc của J.Bach vậy.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="categories">
        <div className="container">
          <div className="row">
            <OwlCarousel items={5} autoplay={false}>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span><img src="img/categories/coffee_bean.svg" alt="coffee_bean" /></span>
                  <h5>Cà phê hạt</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span><img src="img/categories/cup.svg" alt="Coffee" /></span>
                  <h5>Cà phê</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span><img src="img/categories/bread.svg" alt="bread" /></span>
                  <h5>Bánh mì</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span><img src="img/categories/pastries.svg" alt="Cake" /></span>
                  <h5>Bánh</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span><img src="img/categories/croissant.svg" alt="Pastries" style={{width: '75px', height: '75px'}} /></span>
                  <h5>Bánh ngọt</h5>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <section className="product spad">
      <div className="container">
        <div className="row">
          {products && products.slice(0,8).map(product => (
            <Product key={product._id} product={product} />
          ))};
        </div>
      </div>
      </section>

      <section className="class spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="class__form">
                <div className="section-title">
                  <span></span>
                  <h2>Về sản phẩm</h2>
                  <h5 style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</h5>
                </div>
                <div id="table1">
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <img src="img/product/Coffee_bean.png" alt="coffee" />
                        </th>
                        <th>
                          <span>100% Coffee(nghĩ cái title gì hay ho)</span>
                          <h5>Fine Robusta, Honey Robusta,.... viết hay vào....</h5>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <img src="img/product/pastries.png" alt="pastries" />
                        </th>
                        <th>
                          <span>100% Coffee(nghĩ cái title gì hay ho)</span>
                          <h5>Fine Robusta, Honey Robusta,.... viết hay vào....</h5>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <img src="img/product/delivery.png" alt="delivery" />
                        </th>
                        <th>
                          <span>100% Coffee(nghĩ cái title gì hay ho)</span>
                          <h5>Fine Robusta, Honey Robusta,.... viết hay vào....</h5>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <a href="https://shopee.vn/shop/55494347/" target="_blank" rel="noopener noreferrer">
                    <button type="submit" className="site-btn">Mua ngay</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="class__video set-bg" style={{'--background': "url('img/Cake-product.png')"}}>
          </div>
        </div>
      </section>

      <section className="team spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7">
              <div className="section-title">
                <h2>Các thành viên</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item set-bg" style={{'--background': "url('img/team/team-1.jpg')"}}>
                <div className="team__item__text">
                  <h6>Lã Ngọc Anh</h6>
                  <span>Thợ làm bánh</span>
                  <div className="team__item__social">
                    <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>

                    <a href="https://www.instagram.com/cantatacoffee_/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCtPIrX2a2A09hfmJ4hoEZzA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item set-bg" style={{'--background': "url('img/team/team-2.jpg')"}}>
                <div className="team__item__text">
                  <h6>Trịnh Quang Hưng</h6>
                  <span>Người pha chế</span>
                  <div className="team__item__social">
                    <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>

                    <a href="https://www.instagram.com/cantatacoffee_/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCtPIrX2a2A09hfmJ4hoEZzA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item set-bg" style={{'--background': "url('img/team/team-3.jpg')"}}>
                <div className="team__item__text">
                  <h6>Nguyễn Khánh Toàn</h6>
                  <span>Người làm màu</span>
                  <div className="team__item__social">
                    <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>

                    <a href="https://www.instagram.com/cantatacoffee_/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCtPIrX2a2A09hfmJ4hoEZzA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item set-bg" style={{'--background': "url('img/team/team-4.jpg')"}}>
                <div className="team__item__text">
                  <h6>Lê Tuấn Hiệp</h6>
                  <span>Cố vấn tài chính</span>
                  <div className="team__item__social">
                    <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>

                    <a href="https://www.instagram.com/cantatacoffee_/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCtPIrX2a2A09hfmJ4hoEZzA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram spad" id="instagram_home">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-0">
              <div className="instagram__text">
                <div className="section-title">
                  <h2>Theo dõi chúng tôi</h2>
                </div>
                <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer">
                  <h5><i className="fa fa-facebook"></i> Cantata Cake & Coffee</h5>
                </a>
                <a href="https://www.instagram.com/cantatacoffee_/" target="_blank" rel="noopener noreferrer">
                  <h5><i className="fa fa-instagram"></i> @cantatacoffee_</h5>
                </a>
                <div id="followus">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer">
                        <img src="img/icon/icon_fb.svg" alt="fb-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/cantatacoffee_/" target="_blank" rel="noopener noreferrer">
                        <img src="img/icon/icon_ins.svg" alt="ins-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/cantatacakecoffee" target="_blank" rel="noopener noreferrer">
                        <img src="img/icon/icon_tiktok.svg" alt="tiktok-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCtPIrX2a2A09hfmJ4hoEZzA" target="_blank" rel="noopener noreferrer">
                        <img src="img/icon/icon_youtube.svg" alt="youtube-icon" />
                      </a>
                    </li>
                  </ul>
                  <div id="Sweet">
                    Sweet moments are saved as memories.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="instagram__pic">
                    <img src="img/instagram/instagram-1.jpg" alt="ins-1" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="instagram__pic middle__pic">
                    <img src="img/instagram/instagram-2.jpg" alt="ins-2" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="instagram__pic">
                    <img src="img/instagram/instagram-3.jpg" alt="ins-3" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="instagram__pic">
                    <img src="img/instagram/instagram-4.jpg" alt="inst-4" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="instagram__pic middle__pic">
                    <img src="img/instagram/instagram-5.jpg" alt="ins-5" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="instagram__pic">
                    <img src="img/instagram/instagram-3.jpg" alt="ins-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7">
              <div className="map__inner">
                <h6>Hà Nội</h6>
                <ul>
                  <li>Số 145 ngõ 337, Định Công, Hoàng Mai, Hà Nội</li>
                  <li>Cantatacoffee247@gmail.com</li>
                  <li>+84 98686 7613</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="map__iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.391784183889!2d105.83145429098968!3d20.976926695053407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac59a7a126d9%3A0x22275675f4667bb8!2zMTQ1IE5nw7UgMzM3IMSQ4buLbmggQ8O0bmcsIMSQ4buLbmggQ8O0bmcsIEhvw6BuZyBNYWksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1637853042539!5m2!1svi!2s" title="iframe-map" height={300} style={{border: '0}}'}} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
      </div>
    </Fragment>
  )
}

export default Home