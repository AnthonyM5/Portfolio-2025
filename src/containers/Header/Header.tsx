import React from "react";
import './Header.scss';
import { portfolio } from "@/config/portfolio";

export const Header = () => {
  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">{portfolio.name}</a>
        <nav className="nav-links">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}; 