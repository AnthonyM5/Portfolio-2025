import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: 'Home', target: 'greeting' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Industry', target: 'industries' },
    { name: 'Contact', target: 'contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <FaSun className="theme-icon sun" />
          ) : (
            <FaMoon className="theme-icon moon" />
          )}
        </button>
        
        {/* Mobile menu button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  activeClass="active"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;