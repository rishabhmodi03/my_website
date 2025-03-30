import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import styles from './Navbar.module.css'; // Create this CSS module

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <NavLink to="/" className={styles.brand}>
          MyPortfolio
        </NavLink>
        <div className={styles.links}>
          <NavLink to="/" className={getNavLinkClass} end> {/* 'end' prop for exact match */}
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={getNavLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;