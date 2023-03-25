import React, { Fragment } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import MetaData from "../layout/MetaData"
import { PreLoader } from "../layout/PreLoader"

const Profile = () => {
  const { user, loading } = useSelector(state => state.auth);

  return (
    <Fragment>
      <MetaData title={"Hồ sơ người dùng"} />
      { loading ? <PreLoader /> : (
        <Fragment>
          <div className="breadcrumb-option">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 offset-md-4">
                  <div className="breadcrumb__text">
                    <h2>Hồ sơ người dùng</h2>
                  </div>
                </div>
              </div>
              <div id="main-profile">
                <div className="row justify-content-center">
                  <div className="col-12 border-right">
                    <div className="d-flex flex-column align-items-center text-center">
                      <figure>
                        <img className="rounded-circle mt-5" width="200px" src={user.avatar.url} alt={user.name}
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-5 border-right">
                    <div className="p-3 pb-4 pt-5">
                      <div className="row mt-3">
                        <div className="row">
                          <div className="col-md-6">
                            <h4 className="profile-label"><label className="labels profile">Tên</label></h4>
                          </div>
                          <div className="col-md-6">
                            <p className="font-weight-bold profile-text">{user.name}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h4 className="profile-label"><label className="labels profile">Email</label></h4>
                          </div>
                          <div className="col-md-6">
                            <p className="font-weight-bold profile-text">{user.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h4 className="profile-label"><label className="labels profile">Ngày đăng ký</label></h4>
                          </div>
                          <div className="col-md-6">
                            <p className="font-weight-bold profile-text" >{String(user.createdAt).substring(0, 10)}</p>
                          </div>
                        </div>
                      </div>   
                      <div className="row pt-5 pb-3">
                        <div className="col-md-6">
                          <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-2 edit_profile_btn">
                            Chỉnh sửa hồ sơ
                          </Link>
                        </div>
                        <div className="col-md-6">
                          <Link to="/password/update" id="update-password" className="btn btn-primary btn-block my-2 edit_profile_btn">
                            Thay đổi mật khẩu
                          </Link>
                        </div>
                      </div>           
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Profile
