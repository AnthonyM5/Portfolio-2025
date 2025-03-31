import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { portfolio } from "@/config/portfolio";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="header-logo">
          <Link to="greeting" smooth={true} duration={500}>
            {portfolio.name}
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
              <Link to="experience" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header; 