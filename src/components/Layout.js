import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/about';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Outlet />
      {location.pathname === '/' && <About />}
      <Footer />
    </div>
  );
};

export default Layout;
