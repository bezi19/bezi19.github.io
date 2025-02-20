import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="nav-container">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-white">Portfolio</h2>
          
          <div className="hidden md:flex gap-6 items-center">
            <Link 
              to="/" 
              className={`text-gray hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/technologies" 
              className={`text-gray hover:text-white transition-colors ${location.pathname === '/technologies' ? 'text-white' : ''}`}
            >
              Technologie
            </Link>
            <Link 
              to="/projects" 
              className={`text-gray hover:text-white transition-colors ${location.pathname === '/projects' ? 'text-white' : ''}`}
            >
              Projekty
            </Link>
            <Link 
              to="/about" 
              className={`text-gray hover:text-white transition-colors ${location.pathname === '/about' ? 'text-white' : ''}`}
            >
              O mnie
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray hover:text-white transition-colors ${location.pathname === '/contact' ? 'text-white' : ''}`}
            >
              Kontakt
            </Link>
          </div>

          <button 
            className="md:hidden text-gray hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobilka*/}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-4 mt-4`}>
          <Link to="/" className="text-gray hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/technologies" className="text-gray hover:text-white transition-colors">
            Technologie
          </Link>
          <Link to="/projects" className="text-gray hover:text-white transition-colors">
            Projekty
          </Link>
          <Link to="/about" className="text-gray hover:text-white transition-colors">
            O mnie
          </Link>
          <Link to="/contact" className="text-gray hover:text-white transition-colors">
            Kontakt
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar; 