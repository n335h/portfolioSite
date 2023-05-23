import React, { useState, useEffect } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a to="/about" href="/#about">
            // about
          </a>
        </li>
        <li>
          <a to="/portfolio" href="/#portfolio">
            // portfolio
          </a>
        </li>
        <li>
          <a to="/contact" href="/#contact">
            // contact
          </a>
        </li>

        <div className="logo-container">
          <a
            href="https://github.com/n335h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              src={github}
              alt="github"
              id="iconsNav"
            />
          </a>
          <a
            href="https://linkedin.com/in/nichhorishny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              src={linkedin}
              alt="linkedin"
              id="iconsNav"
            />
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
