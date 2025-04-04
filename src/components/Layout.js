import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/about';
import Contact from './Contact';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Outlet />
      {location.pathname === '/' && <About />}
      {location.pathname === '/' && <Contact />}
      <Footer />
    </div>
  );
};

export default Layout;
