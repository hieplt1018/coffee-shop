import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function NavBar() {
  return (
    <ul>
        <CustomLink to="/">Trang chủ</CustomLink>
        <CustomLink to="./about.html">Giới thiệu</CustomLink>
        <CustomLink to="/products">Thực đơn</CustomLink>
        <CustomLink to="./blog.html">Tin tức</CustomLink>
        <CustomLink to="./contact.html">Liên hệ</CustomLink>
    </ul>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
