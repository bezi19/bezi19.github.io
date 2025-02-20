import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClasses = (path) => `
    relative px-4 py-2 transition-colors duration-200
    ${isActive(path) ? 'text-blue-500' : 'text-[#9ca3af] hover:text-blue-500'}
    ${isActive(path) ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-500' : ''}
  `;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className={`transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'nav-container' 
          : 'md:bg-transparent md:border-transparent nav-container md:bg-opacity-0 md:border-opacity-0 md:shadow-none'
      }`}>
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-white">/portfolio</h2>
          
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className={navLinkClasses('/')}>
              Strona Główna
            </Link>
            <Link to="/technologies" className={navLinkClasses('/technologies')}>
              Technologie
            </Link>
            <Link to="/projects" className={navLinkClasses('/projects')}>
              Projekty
            </Link>
            <Link to="/about" className={navLinkClasses('/about')}>
              O mnie
            </Link>
            <Link to="/contact" className={navLinkClasses('/contact')}>
              Kontakt
            </Link>
          </div>

          <button 
            className="md:hidden text-[#9ca3af] hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobilka*/}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-4 mt-4`}>
          <Link to="/" className={navLinkClasses('/')}>
            Strona Główna
          </Link>
          <Link to="/technologies" className={navLinkClasses('/technologies')}>
            Technologie
          </Link>
          <Link to="/projects" className={navLinkClasses('/projects')}>
            Projekty
          </Link>
          <Link to="/about" className={navLinkClasses('/about')}>
            O mnie
          </Link>
          <Link to="/contact" className={navLinkClasses('/contact')}>
            Kontakt
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar; 