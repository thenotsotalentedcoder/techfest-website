// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { clubsData } from '../../data/clubsData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'py-3 bg-tech-darker/90 backdrop-blur-md shadow-lg'
      : 'py-5 bg-transparent'
  }`;

  // Animation variants
  const mobileMenuVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500"
            >
              TECH FEST '25
            </motion.div>
          </Link>

          {/* Desktop Menu - to the right */}
          <div className="hidden md:flex justify-end flex-1">
            <div className="flex space-x-8 items-center">
              <Link 
                to="/" 
                className={`text-white hover:text-tech-blue transition-colors ${
                  location.pathname === '/' ? 'text-tech-blue font-medium' : ''
                }`}
              >
                Home
              </Link>
              
              {/* CSIT Clubs Dropdown */}
              <div className="relative group">
                <button className={`text-white hover:text-tech-blue transition-colors flex items-center ${
                  location.pathname.includes('/clubs/') ? 'text-tech-blue font-medium' : ''
                }`}>
                  CSIT Clubs <span className="ml-1">▼</span>
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-tech-darker/95 backdrop-blur-md border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {clubsData.map((club) => (
                    <Link
                      key={club.id}
                      to={`/clubs/${club.slug}`}
                      className="block px-4 py-2 text-sm text-white hover:bg-tech-blue/20"
                    >
                      {club.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Events Link */}
              <Link 
                to="/events" 
                className={`text-white hover:text-tech-blue transition-colors ${
                  location.pathname === '/events' ? 'text-tech-blue font-medium' : ''
                }`}
              >
                Events
              </Link>
              
              {/* Schedule Link */}
              <Link 
                to="/schedule" 
                className={`text-white hover:text-tech-blue transition-colors ${
                  location.pathname === '/schedule' ? 'text-tech-blue font-medium' : ''
                }`}
              >
                Schedule
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-tech-darker/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-4 py-5 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-tech-blue"
              >
                Home
              </Link>
              
              <div className="border-t border-gray-800 pt-2">
                <div className="text-gray-400 mb-2">CSIT Clubs</div>
                {clubsData.map((club) => (
                  <Link
                    key={club.id}
                    to={`/clubs/${club.slug}`}
                    className="block text-white hover:text-tech-blue pl-4 py-1"
                  >
                    {club.name}
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/events" 
                className="block text-white hover:text-tech-blue"
              >
                Events
              </Link>
              
              <Link 
                to="/schedule" 
                className="block text-white hover:text-tech-blue"
              >
                Schedule
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;