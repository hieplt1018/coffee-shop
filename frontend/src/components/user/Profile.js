import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import { PreLoader } from '../layout/PreLoader'

const Profile = () => {
  const { user, loading } = useSelector(state => state.auth);

  return (
    <Fragment>
      { loading ? <PreLoader /> : (
        <Fragment>
          <MetaData title={'Hồ sơ người dùng'} />
          <div className="breadcrumb-option">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="breadcrumb__text">
                    <h2>Hồ sơ người dùng</h2>
                  </div>
                </div>
              </div>
              <div id="main-profile">
            <div className="row justify-content-center">
              <div className="col-12 col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <figure>
                    <img className="rounded-circle mt-5" width="150px" src={user.avatar && user.avatar.url} alt={user.name}
                    />
                  </figure>
                  <Link to="/me/update" id="edit_profile" class="btn btn-primary btn-block my-5">
                    Chỉnh sửa hồ sơ
                  </Link>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="row mt-3">
                    <div className="col-md-12"><h4><label className="labels profile">Tên</label></h4>
                      <p className="font-weight-bold">{user.name}</p>
                    </div>
                    <div className="col-md-12"><h4><label className="labels profile">Email</label></h4>
                      <p className="font-weight-bold">{user.email}</p>
                    </div>
                    <div className="col-md-12"><h4><label className="labels profile">Ngày đăng ký</label></h4>
                      <p className="font-weight-bold">{String(user.createdAt).substring(0, 10)}</p>
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
