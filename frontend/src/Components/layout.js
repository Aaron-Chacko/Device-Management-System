import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; // adjust path

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
