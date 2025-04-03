import React, { useEffect, useState } from 'react';
import LogoWhite from '../assets/img/logo-white.svg';
import LogoDarke from '../assets/img/logo-dark.svg';

const Header = () => {
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ?setHeader(true) : setHeader(false);
    });
  })
  const [header,setHeader]=useState(false);
  return <Header className={`${header ?'bg-white py-6 shadow-lg':'bg-transparent py-8'} fixed z-50 w-full transition-all duration-300`}>
    Header
  </Header>;
};

export default Header;
