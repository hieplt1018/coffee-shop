import React, { Fragment } from 'react'

const Login = () => {
  return (
    <Fragment>
      <section className="vh-100 login-page">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" id="login-card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://i.ibb.co/FJxz4LM/pexels-viktoria-alipatova-2668498.jpg" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fa-solid fa-mug-hot fa-2x me-3" id="login-icon-coffee" />
                          <span className="h1 fw-bold mb-0">Cantata Coffee</span>
                        </div>
                        
                        <div className="form-outline mb-4">
                          <input type="email" placeholder='Email' id="form2Example17" className="form-control form-control-lg" />
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" placeholder='Mật khẩu' id="form2Example27" className="form-control form-control-lg" />
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button">Đăng nhập</button>
                        </div>
                        <a className="login-link" href="#!">Quên mật khẩu?</a>
                        <p className="mb-5 pb-lg-2">Bạn chưa có tài khoản? <a className="login-link" href="#!">Đăng ký tại đây</a></p>
                        <a href="#!" className="small text-muted">Điều khoản sử dụng - </a>
                        <a href="#!" className="small text-muted">Chính sách bảo mật</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Login