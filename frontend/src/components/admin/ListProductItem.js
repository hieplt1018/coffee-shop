import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MDBBadge } from 'mdbreact'

const ListProductItems = (item) => {
  const { product } = item;

  return (
    <Fragment>
      <tr>
        <td>
          <p className='fw-normal mb-1'>{product._id}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>{product.name}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>{new Intl.NumberFormat().format(product.price)} &#8363;</p>
        </td>
        <td>
          {
            product.stock === 0 ? (
              <h5><MDBBadge color='danger' pill>Hết hàng</MDBBadge></h5> 
            ) : (
              <p className='fw-normal mb-1'>{new Intl.NumberFormat().format(product.stock)} sản phẩm</p>
            )
          }
        </td>
        <td>
          <Link to={`/product/${product._id}`} className="btn-view">
            <i className="fa-solid fa-eye fa-xl"></i>
          </Link>
          <Link to={`/admin/product/${product._id}`} className="btn-edit">
            <i className="fa-solid fa-pen-to-square fa-xl"></i>
          </Link>
        </td>
      </tr>
    </Fragment>
  )
}

export default ListProductItems
