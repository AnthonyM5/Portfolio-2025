import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">
          <Link to="greeting" smooth={true} duration={500}>
            Anthony Mai
          </Link>
        </h1>

        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="achievements" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Achievements
              </Link>
            </li>
            <li>
              <Link to="blogs" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}; 