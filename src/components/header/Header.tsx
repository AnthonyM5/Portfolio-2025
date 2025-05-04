import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Set default to light mode
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    
    // Set theme in localStorage and update document attribute
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo on the left - now with theme toggle */}
        <div className="logo" onClick={toggleTheme} role="button" tabIndex={0}>
          <a className="logo-text">Anthony Mai</a>
          <img 
            src={isDarkMode ? "/assets/images/sunsvg.svg" : "/assets/images/moonsvg.svg"} 
            alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="logo-theme-icon"
            width="16"
            height="16"
          />
        </div>
        
        {/* Navigation links next to the logo */}
        <nav className={`navigation ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#greeting" className="nav-link">Home</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        
        {/* Theme toggle button - pushed to right */}
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme} 
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <img 
              src="/assets/images/sunsvg.svg" 
              alt="Light mode"
              width="24"
              height="24"
            />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.7479 21.1181 10.0795 20.7461C8.41108 20.3741 6.8802 19.5345 5.67423 18.3285C4.46826 17.1226 3.62866 15.5917 3.25668 13.9232C2.8847 12.2548 2.99552 10.5148 3.57627 8.90707C4.15703 7.29935 5.18362 5.89027 6.53604 4.84464C7.88845 3.79901 9.51061 3.16017 11.213 3.003C10.2391 4.34511 9.73379 5.95518 9.76823 7.60173C9.80267 9.24827 10.3752 10.8363 11.3957 12.1421C12.4162 13.4479 13.8232 14.3939 15.4001 14.8365C16.9771 15.2791 18.6461 15.1987 20.174 14.608L21 12.79Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        
        {/* Mobile menu toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;