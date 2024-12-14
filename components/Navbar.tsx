import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  console.log('Navbar rendered');
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-semibold hover:text-white/80 transition-colors duration-200">
              Logo
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-white/80 transition-colors duration-200 px-3 py-2">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-white/80 transition-colors duration-200 px-3 py-2">
                About
              </Link>
              <Link to="/services" className="text-white hover:text-white/80 transition-colors duration-200 px-3 py-2">
                Services
              </Link>
              <Link to="/contact" className="text-white hover:text-white/80 transition-colors duration-200 px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;