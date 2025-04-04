import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoWhite from '../assets/img/logo-white.svg';
import LogoDark from '../assets/img/logo-dark.svg';

const Header = () => {
  const [header, setHeader] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-300`}>
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between'>
        <a href='/'>
          {header ? (
            <img className='w-[160px]' src={LogoDark} />
          ) : (
            <img className='w-[160px]' src={LogoWhite} />
          )}
        </a>
        <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-accent transition">
            Home
          </a>
          <a href="/" onClick={(e) => handleNavClick(e, 'rooms')} className="hover:text-accent transition">
            Rooms
          </a>
          <a href="/" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-accent transition">
            About Us
          </a>
          <a href="/" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
