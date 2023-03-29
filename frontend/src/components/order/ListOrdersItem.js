import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MDBBadge } from 'mdbreact'

const ListOrdersItem = (item) => {
  const { order } = item;

  return (
    <Fragment>
      <tr>
        <td>
          <p className='fw-normal mb-1'>{order._id}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>{order.orderItems.length}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>{new Intl.NumberFormat().format(order.totalOrder)} &#8363;</p>
        </td>
        <td>
          {
            {
              'Delivering': <h5><MDBBadge color='primary' pill>Đang giao</MDBBadge></h5>,
              'Completed': <h5><MDBBadge color='success' pill>Hoàn tất</MDBBadge></h5>,
              'Cancelled': <h5><MDBBadge color='danger' pill>Đã hủy</MDBBadge></h5>
            }[order.orderStatus]
          }
        </td>
        <td>
          <Link to={`/order/${order._id}`} className="btn-floating btn-view">
            <i className="fa-solid fa-eye fa-xl"></i>
          </Link>
        </td>
          
      </tr>
    </Fragment>
  )
}

export default ListOrdersItem
